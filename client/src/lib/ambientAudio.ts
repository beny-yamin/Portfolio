type SoundSubscriber = (isPlaying: boolean) => void;

class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private analyser: AnalyserNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private isPlaying: boolean = false;
  private fadeDuration: number = 1.2;
  private listeners: Set<SoundSubscriber> = new Set();
  private freqData: Uint8Array | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);

      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      this.analyser.smoothingTimeConstant = 0.8;
      this.freqData = new Uint8Array(new ArrayBuffer(this.analyser.frequencyBinCount));

      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public subscribe(fn: SoundSubscriber): () => void {
    this.listeners.add(fn);
    fn(this.isPlaying);
    return () => this.listeners.delete(fn);
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.isPlaying));
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public play() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    // Harmonic chords: 55Hz (A1), 82.4Hz (E2), 110Hz (A2), 164.8Hz (E3)
    const baseFreqs = [55, 82.41, 110, 164.81];
    this.oscillators = [];

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, this.ctx.currentTime);
    filter.connect(this.masterGain);

    baseFreqs.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.detune.setValueAtTime((idx - 1.5) * 4, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.08 / (idx + 1), this.ctx.currentTime);
      osc.connect(gain);
      gain.connect(filter);

      osc.start();
      this.oscillators.push(osc);
    });

    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(0.0001, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.22, now + this.fadeDuration);

    this.isPlaying = true;
    this.notify();
  }

  public stop() {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;

    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + this.fadeDuration);

    setTimeout(() => {
      this.oscillators.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // already stopped
        }
      });
      this.oscillators = [];
    }, this.fadeDuration * 1000);

    this.isPlaying = false;
    this.notify();
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public getAudioBands(): { bass: number; mid: number; high: number } | null {
    if (!this.isPlaying || !this.analyser || !this.freqData) {
      return null;
    }
    this.analyser.getByteFrequencyData(this.freqData as any);

    let bassSum = 0;
    let midSum = 0;
    let highSum = 0;

    for (let i = 0; i < 4; i++) bassSum += this.freqData[i];
    for (let i = 4; i < 16; i++) midSum += this.freqData[i];
    for (let i = 16; i < 32; i++) highSum += this.freqData[i];

    return {
      bass: Math.min(1.0, (bassSum / (4 * 255)) * 2.2),
      mid: Math.min(1.0, (midSum / (12 * 255)) * 2.5),
      high: Math.min(1.0, (highSum / (16 * 255)) * 3.0),
    };
  }
}

export const ambientSound = new AmbientSoundEngine();
