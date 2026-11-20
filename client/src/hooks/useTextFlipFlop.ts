import { useState, useRef, useCallback, useEffect } from 'react';

const GLYPHS = ['◈', '◇', '✦', '§', '0', '1', 'λ', 'ψ', 'α', 'β', 'γ', 'δ'];

export function useTextFlipFlop(originalText: string) {
  const [displayText, setDisplayText] = useState(originalText);
  const intervalRef = useRef<number | null>(null);
  const isScramblingRef = useRef(false);

  const cleanup = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    isScramblingRef.current = false;
  }, []);

  const triggerScramble = useCallback(() => {
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;

    const len = originalText.length;
    let step = 0;

    intervalRef.current = window.setInterval(() => {
      step++;

      if (step <= len) {
        // Phase 1: Right-to-Left scramble into glyphs
        const scrambleIndex = len - step;
        const chars = originalText.split('');
        for (let i = len - 1; i >= scrambleIndex; i--) {
          chars[i] = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        setDisplayText(chars.join(''));
      } else if (step <= len * 2) {
        // Phase 2: Left-to-Right crisp reveal of original text
        const revealIndex = step - len;
        const chars = originalText.split('');
        for (let i = revealIndex; i < len; i++) {
          chars[i] = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        setDisplayText(chars.join(''));
      } else {
        // Final snap
        setDisplayText(originalText);
        cleanup();
      }
    }, 28);
  }, [originalText, cleanup]);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return { displayText, triggerScramble };
}
