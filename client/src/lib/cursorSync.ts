/**
 * Unified Viewport Cursor Synchronization Engine
 * Single source of truth for normalized cursor coordinates in [-1, 1]
 * with smooth 0.035 easing and 1.8s idle decay back to (0, 0).
 */

class CursorSyncEngine {
  public x = 0;
  public y = 0;
  public targetX = 0;
  public targetY = 0;

  private lastMoveTime = 0;
  private lastUpdateTime = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      const onMove = (clientX: number, clientY: number) => {
        const w = window.innerWidth || 1;
        const h = window.innerHeight || 1;
        this.targetX = Math.max(-1, Math.min(1, (clientX / w) * 2 - 1));
        this.targetY = Math.max(-1, Math.min(1, -(clientY / h) * 2 + 1));
        this.lastMoveTime = performance.now();
      };

      window.addEventListener('pointermove', (e) => onMove(e.clientX, e.clientY), { passive: true });
      window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY), { passive: true });
      window.addEventListener(
        'touchmove',
        (e) => {
          if (e.touches && e.touches[0]) {
            onMove(e.touches[0].clientX, e.touches[0].clientY);
          }
        },
        { passive: true }
      );

      const onLeave = () => {
        this.targetX = 0;
        this.targetY = 0;
      };

      window.addEventListener('blur', onLeave);
      document.addEventListener('mouseleave', onLeave);
    }
  }

  public update(): { x: number; y: number } {
    const now = performance.now();

    // Prevent duplicate step integration if called multiple times in the same frame
    if (now - this.lastUpdateTime < 4) {
      return { x: this.x, y: this.y };
    }
    this.lastUpdateTime = now;

    // If mouse has stopped moving for > 1.8s, smoothly decay target back to center (0, 0)
    if (now - this.lastMoveTime > 1800) {
      this.targetX = 0;
      this.targetY = 0;
    }

    const ease = 0.035;
    this.x += (this.targetX - this.x) * ease;
    this.y += (this.targetY - this.y) * ease;

    if (Math.abs(this.x) < 0.0001 && this.targetX === 0) this.x = 0;
    if (Math.abs(this.y) < 0.0001 && this.targetY === 0) this.y = 0;

    return { x: this.x, y: this.y };
  }
}

export const cursorSync = new CursorSyncEngine();
