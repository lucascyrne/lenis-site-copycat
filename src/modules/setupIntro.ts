import gsap from "gsap";
import {
  animateBannerIn,
  animateLettersIn,
  animateTransitionBackground,
  positionLetters,
} from "./animations";

export function setupIntro() {
  const isMobileViewport = window.innerWidth <= 768;
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
            ${
              isMobileViewport
                ? ""
                : `
            <div class="scroll-to-explore">
              <div class="red-line"></div>
              <h5>SCROLL <br/> TO EXPLORE</h5>
            </div>
            `
            }
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
                  <img src="/images/github-mark.svg" />
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
  // createBanner(app);

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
