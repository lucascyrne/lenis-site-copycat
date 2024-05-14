import gsap from "gsap";
import { startApplication } from "./startApplication";

export function positionLetters() {
  const letters = document.querySelectorAll(".letter");
  const bottomLetters = document.querySelectorAll(".letter-bottom");

  // Assumindo que há 3 letras na linha de cima e 2 na de baixo
  letters.forEach((letter, index) => {
    gsap.set(letter, {
      position: "absolute",
      top: index < 3 ? "0%" : "50%", // Ajuste os valores conforme necessário
      left: `${12 + index * 38.6}%`, // Espalha as letras horizontalmente
      transform: "translate(-50%, -50%)",
    });
  });

  // Assumindo que as letras inferiores começam no mesmo local e movem para cima
  bottomLetters.forEach((letter, index) => {
    gsap.set(letter, {
      position: "absolute",
      top: "62%", // Começa mais abaixo
      left: `${31.5 + index * 36.5}%`, // Ajuste os valores conforme necessário
      transform: "translate(-50%, -50%)",
    });
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
          y: "-62vh", // Move as letras inferiores para o topo
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
