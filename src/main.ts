import { createParticles } from "./modules/createParticles";
import { setupFirstDiv } from "./modules/setupFirstDiv";
import { setupGradient } from "./modules/setupGradient";
import { setupLenis } from "./modules/setupLenis";
import { setupScrollProgressBar } from "./modules/setupScrollProgressBar";
import "./styles/style.css";

// Inicializa as animações e eventos necessários após o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
  setupScrollProgressBar();
  setupLenis();
  setupGradient();
  setupFirstDiv();
  setTimeout(createParticles, 3000);
});
