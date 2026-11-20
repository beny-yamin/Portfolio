import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance;
}

export function scrollToTarget(target: string, offset = -30) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset, duration: 1.2 });
  } else {
    const elem = document.querySelector(target);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
