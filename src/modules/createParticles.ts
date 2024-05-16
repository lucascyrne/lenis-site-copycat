import gsap from "gsap";

// Cria partículas e as anima
export function createParticles() {
  const maxOffset = window.innerHeight * 5;
  for (let i = 0; i < 325; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    if (Math.random() < 0.45) {
      // 30% das partículas terão um brilho
      particle.classList.add("glowing");
    }
    particle.style.top = `${Math.random() * maxOffset}px`;
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    document.body.appendChild(particle);

    animateParticle(particle);
  }
}

// Animação individual de partícula
function animateParticle(particle: HTMLElement) {
  // Animação comum
  gsap.to(particle, {
    x: `+=${Math.random() * 100 - 50}`,
    y: `+=${Math.random() * 100 - 50}`,
    repeat: -1,
    yoyo: true,
    duration: Math.random() * 6 + 1,
  });

  if (particle.classList.contains("glowing")) {
    // Piscar para partículas brilhantes
    gsap.to(particle, {
      opacity: 0.3,
      repeat: -1,
      yoyo: true,
      duration: Math.random() * 2 + 1,
    });
  }
}
