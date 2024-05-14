import Lenis from "@studio-freight/lenis";

export const lenis = new Lenis({
  lerp: 0.1,
  smoothWheel: true,
});

// Configuração do Lenis para rolagem suave
export function setupLenis() {
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
