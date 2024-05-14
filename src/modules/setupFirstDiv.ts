import gsap from "gsap";
import { createBanner } from "../utils/createBanner";
import {
  animateBannerIn,
  animateLettersIn,
  animateTransitionBackground,
  positionLetters,
} from "./animations";

export function setupFirstDiv() {
  const app = document.querySelector<HTMLDivElement>("#app")!;
  app.innerHTML = ""; // Limpa a div#app

  // Cria a estrutura inicial com fundo e letras
  const firstSectionHTML = `
      <div class="transition-background"></div>
      <div class="first-section">
        <div class="headline">
          <h1 class="letter">C</h1>
          <h1 class="letter">R</h1>
          <h1 class="letter">E</h1>
          <h1 class="letter-bottom">Y</h1>
          <h1 class="letter-bottom">N</h1>
        </div>
        <div class="subtitle">
          <h2>SMOOTH FRONTEND</h2>
          <h3>@ 2024 HORIZONTE TECH</h3>
        </div>
        <div class="first-section-bottom">
          <div class="first-section-bottom-left">
            <div class="scroll-to-explore">
              <div class="red-line"></div>
              <h5>SCROLL <br/> TO EXPLORE</h5>
            </div>
            <h6 class="first-section-description">
              A SMOOTH SCROLL LIBRARY <br />
              FRESH OUT OF THE DARKROOM <br />
              DESIGNED BY STUDIO FREIGHT
            </h6>
          </div>
          <div class="first-section-bottom-right">
            <div class="first-section-button">
              <div class="github-img-wrapper">
                <div class="github-img">
                  <img src="/public/images/github-mark.svg" />
                </div>
              </div>
              <h6>
                CHECK IT OUT ON GITHUB
              </h6>
              <div class="arrow-img">
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  app.innerHTML = firstSectionHTML;

  // Banner indicativo de construção
  createBanner(app);

  // Assegura que as letras estejam invisíveis no início
  gsap.set(
    ".banner, .letter, .letter-bottom, .subtitle, .scroll-to-explore, .first-section-description, .first-section-button",
    { autoAlpha: 0 }
  );

  // Posiciona as letras e prepara a animação de entrada
  positionLetters();

  // Começa a animação de entrada das letras depois de 1 segundo
  setTimeout(() => {
    animateLettersIn();
  }, 1000);

  // Inicia o banner
  setTimeout(() => {
    animateBannerIn(); // Anima a entrada do banner após a configuração inicial
  }, 5000);

  // Inicia a animação de transição de fundo após 3 segundos
  setTimeout(() => {
    animateTransitionBackground();
  }, 3000);
}

export function renderFirstSectionElements() {
  const subtitle = document.querySelectorAll(".subtitle");
  const scrollToExplore = document.querySelectorAll(".scroll-to-explore");
  const firstSectionDescription = document.querySelector(
    ".first-section-description"
  );
  const firstSectionButton = document.querySelector(".first-section-button");

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

  gsap.to(firstSectionButton, {
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    stagger: 0.1, // Pequeno atraso entre cada elemento
    ease: "power2.out", // Suavização da animação
    duration: 0.5, // Duração da animação
    delay: 0, // Atraso após o fundo vermelho aparecer
  });

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
  gsap.to(redLine, {
    height: 54, // Altura máxima
    repeat: -1, // Repetir infinitamente
    yoyo: true, // Volta para o estado inicial após completar uma animação
    ease: "sine.inOut", // Efeito de suavização para a animação de altura
    duration: 2, // Duração de cada ciclo de animação
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
