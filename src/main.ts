import { createParticles } from "./modules/createParticles";
import { setupGradient } from "./modules/setupGradient";
import { setupIntro } from "./modules/setupIntro";
import { setupLenis } from "./modules/setupLenis";
import { setupScrollProgressBar } from "./modules/setupScrollProgressBar";
import { startApplication } from "./modules/startApplication";
import "./styles/style.css";

// Inicializa as animações e eventos necessários após o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
  setupScrollProgressBar();
  setupLenis();
  setupGradient();

  if (window.innerWidth > 768) {
    setupIntro();
  } else {
    const app = document.querySelector<HTMLDivElement>("#app")!;
    app.innerHTML = ""; // Limpa a div#app

    // Cria a estrutura inicial com fundo e letras
    const firstSectionHTML = `
      <div class="first-section">
        <div class="headline">
          <h1 class="title">CYRNE</h1>
        </div>
        <div class="subtitle">
          <h2>SMOOTH FRONTEND</h2>
          <h3>@ 2024 HORIZONTE TECH</h3>
        </div>
        <div class="first-section-bottom">
          <h6 class="first-section-description">
            A SMOOTH SCROLL LIBRARY <br />
            FRESH OUT OF THE DARKROOM <br />
            DESIGNED BY STUDIO FREIGHT
          </h6> 
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
    `;
    app.innerHTML = firstSectionHTML;

    startApplication();
  }

  setTimeout(createParticles, 3000);
});
