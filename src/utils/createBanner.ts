import { removeBanner } from "./removeBanner";

export function createBanner(parent: HTMLElement) {
  const bannerHTML = `
      <div class="banner">
        <span>THIS SITE IS STILL UNDER CONSTRUCTION. VISIT IT AGAIN SOON TO SEE IT BEING UPDATED. THIS WORK IS A COPY OF THE LENIS <a href="https://lenis.darkroom.engineering/">SITE</a>  FOR STUDY PURPOSES AND TO ENRICH THE DEVELOPER'S PORTFOLIO.</span>
        <button class="close-button">&times;</button>
      </div>
    `;

  parent.insertAdjacentHTML("afterbegin", bannerHTML);
  const closeButton = document.querySelector(".close-button");
  closeButton!.addEventListener("click", () => removeBanner());
}
