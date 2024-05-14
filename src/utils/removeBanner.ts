import gsap from "gsap";

export function removeBanner() {
  const banner = document.querySelector(".banner")!;
  gsap.to(banner, {
    y: -100,
    opacity: 0,
    duration: 0.5,
    onComplete: () => banner.remove(),
  });
}
