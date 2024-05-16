import gsap from "gsap";
import { startApplication } from "./startApplication";

export function positionLetters() {
  const letters = document.querySelectorAll(".letter");
  const bottomLetters = document.querySelectorAll(".letter-bottom");

  const isExtraLargeViewport = window.innerWidth >= 1920;
  const isLargeViewport = window.innerWidth > 1200;
  const isMediumViewport = window.innerWidth > 768 && window.innerWidth <= 1200;

  letters.forEach((letter, index) => {
    if (isExtraLargeViewport) {
      // Configuração para viewports extra grandes
      gsap.set(letter, {
        position: "absolute",
        top: "30%",
        left: `${12 + index * 37.5}%`,
        transform: "translate(-50%, -50%)",
      });
    } else if (isLargeViewport) {
      // Configuração para viewports grandes
      gsap.set(letter, {
        position: "absolute",
        top: index < 3 ? "32%" : "52%",
        left: `${13 + index * 37}%`,
        transform: "translate(-50%, -50%)",
      });
    } else if (isMediumViewport) {
      // Configuração para viewports médias (notebooks)
      gsap.set(letter, {
        position: "absolute",
        top: "12.5%",
        left: `${14 + index * 36}%`,
        transform: "translate(-50%, -50%)",
      });
    } else {
      // Configuração para viewports pequenas (mobiles)
      gsap.set(letter, {
        position: "absolute",
        top: "32%",
        left: `${12 + index * 40}%`,
        transform: "translate(-50%, -50%)",
      });
    }
  });

  bottomLetters.forEach((letter, index) => {
    if (isExtraLargeViewport) {
      // Configuração para viewports extra grandes
      gsap.set(letter, {
        position: "absolute",
        top: "70%",
        left: `${31 + index * 37.5}%`,
        transform: "translate(-50%, -50%)",
      });
    } else if (isLargeViewport) {
      // Configuração para viewports grandes
      gsap.set(letter, {
        position: "absolute",
        top: "72%",
        left: `${31.5 + index * 35.5}%`,
        transform: "translate(-50%, -50%)",
      });
    } else if (isMediumViewport) {
      // Configuração para viewports médias (notebooks)
      gsap.set(letter, {
        position: "absolute",
        top: "90%",
        left: `${32 + index * 36.5}%`,
        transform: "translate(-50%, -50%)",
      });
    } else {
      // Configuração para viewports peque2nas (mobiles)
      gsap.set(letter, {
        position: "absolute",
        top: "80%",
        left: `${10 + index * 15}%`,
        transform: "translate(-50%, -50%)",
      });
    }
  });
}

export function animateLettersIn() {
  const letters = document.querySelectorAll(".letter, .letter-bottom");

  // Define opacidade inicial e visibilidade escondida
  gsap.set(letters, {
    y: 200,
    opacity: 1,
    visibility: "visible",
    clipPath: "inset(0% 0% 100% 0%)",
  });

  // Anima as letras para que elas surjam de sua própria base

  gsap.to(letters, {
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    stagger: 0.1, // Pequeno atraso entre cada letra
    ease: "power2.out", // Suavização da animação
    duration: 1, // Duração da animação
    delay: 0.5, // Atraso após o fundo vermelho aparecer
  });
}

// Função para animar o fundo e as letras inferiores subindo e mudança de cor das letras
export function animateTransitionBackground() {
  const transitionBackground = document.querySelector(".transition-background");
  const lettersTop = document.querySelectorAll(".letter");
  const lettersBottom = document.querySelectorAll(".letter-bottom");

  // Verifica o tamanho da viewport
  const isExtraLargeViewport = window.innerWidth >= 1920;
  const isLargeViewport = window.innerWidth > 1200;
  const isMediumViewport = window.innerWidth > 768 && window.innerWidth <= 1200;

  let finalYPosition = "";
  if (isExtraLargeViewport) {
    finalYPosition = "-40vh"; // Valor padrão para viewports extra largas
  } else if (isLargeViewport) {
    finalYPosition = "-40vh"; // Valor padrão para viewports largas
  } else if (isMediumViewport) {
    finalYPosition = "-77vh"; // Valor padrão para viewports medio
  } else if (!isLargeViewport) {
    finalYPosition = "-40vh"; // Valor padrão para viewports mobile
  }

  if (transitionBackground) {
    // Cria uma timeline para a animação
    const tl = gsap.timeline({
      ease: "power2.inOut",
      onComplete: startApplication, // Reativa a rolagem quando a animação estiver completa
    });

    // Animação do fundo vermelho subindo
    tl.to(transitionBackground, {
      y: "-100vh", // Recolhe o fundo para cima
      duration: 0.5,
    })
      .to(
        lettersBottom,
        {
          y: finalYPosition, // Move as letras inferiores para o topo com base na viewport
          color: "#ff98a2", // Muda a cor das letras para branco
          duration: 0.5,
        },
        "<0.1"
      ) // Começa um pouco antes do movimento do fundo
      .to(
        lettersTop,
        {
          color: "#ff98a2", // Muda a cor das letras para branco
          duration: 0.5,
        },
        "<0.15"
      ); // As letras superiores começam a mudar de cor um pouco depois
  }
}

export function animateBannerIn() {
  const banner = document.querySelector(".banner")!;
  gsap.from(banner, {
    y: -100,
    opacity: 0,
    duration: 0.5,
  });

  gsap.to(banner, {
    autoAlpha: 1,
  });
}
