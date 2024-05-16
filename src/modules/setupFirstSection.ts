import gsap from "gsap";

export function setupFirstSection() {
  const isMobileViewport = window.innerWidth <= 768;
  const subtitle = document.querySelectorAll(".subtitle");
  const firstSectionDescription = document.querySelector(
    ".first-section-description"
  );
  const firstSectionButton = document.querySelector(".first-section-button");

  if (!isMobileViewport) {
    const scrollToExplore = document.querySelectorAll(".scroll-to-explore");

    // Configurações iniciais dos elementos da seção
    gsap.set(
      [subtitle, scrollToExplore, firstSectionDescription, firstSectionButton],
      {
        y: 50,
        opacity: 1,
        visibility: "visible",
        clipPath: "inset(0% 0% 100% 0%)",
      }
    );

    // Animações de entrada dos elementos
    gsap.to([subtitle, scrollToExplore, firstSectionDescription], {
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      stagger: 0.1, // Pequeno atraso entre cada elemento
      ease: "power2.out", // Suavização da animação
      duration: 0.5, // Duração da animação
      delay: 0.5, // Atraso após o fundo vermelho aparecer
    });

    const redLine = document.querySelector(".red-line");
    let redLineHeight = 0;

    // Verificar o tamanho da viewport e ajustar a altura da red-line
    if (window.innerWidth >= 1920) {
      redLineHeight = 100; // Viewport extra grande
    } else if (window.innerWidth > 1200) {
      redLineHeight = 72; // Viewport grande
    } else {
      redLineHeight = 54; // Viewport média
    }

    gsap.to(redLine, {
      height: redLineHeight, // Altura máxima
      repeat: -1, // Repetir infinitamente
      yoyo: true, // Volta para o estado inicial após completar uma animação
      ease: "sine.inOut", // Efeito de suavização para a animação de altura
      duration: 2, // Duração de cada ciclo de animação
    });
  }

  // Configurações iniciais dos elementos da seção
  gsap.set([subtitle, firstSectionDescription, firstSectionButton], {
    y: 50,
    opacity: 1,
    visibility: "visible",
    clipPath: "inset(0% 0% 100% 0%)",
  });

  // Animações de entrada dos elementos
  gsap.to([subtitle, firstSectionDescription], {
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    stagger: 0.1, // Pequeno atraso entre cada elemento
    ease: "power2.out", // Suavização da animação
    duration: 0.5, // Duração da animação
    delay: 0.5, // Atraso após o fundo vermelho aparecer
  });

  gsap.to(firstSectionButton, {
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    stagger: 0.1, // Pequeno atraso entre cada elemento
    ease: "power2.out", // Suavização da animação
    duration: 0.5, // Duração da animação
    delay: 0, // Atraso após o fundo vermelho aparecer
  });

  firstSectionButton!.addEventListener("mouseenter", () => {
    gsap.to(firstSectionButton, {
      duration: 0.1,
      ease: "none",
      backgroundColor: "#FFFFFF", // Animação da cor de fundo
    });

    gsap.to(firstSectionButton, {
      duration: 0.1,
      ease: "none",
      "--height-after": "100%", // Animação da altura do pseudo-elemento
    });
  });

  firstSectionButton!.addEventListener("mouseleave", () => {
    gsap.to(firstSectionButton, {
      duration: 0.1,
      ease: "none",
      backgroundColor: "var(--primary-red)", // Animação da cor de fundo
    });

    gsap.to(firstSectionButton, {
      duration: 0.1,
      ease: "none",
      "--height-after": "0%", // Animação da altura do pseudo-elemento
    });
  });
}
