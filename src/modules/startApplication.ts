import { enableScroll } from "../utils/enableScroll";
import { renderFirstSectionElements } from "./setupFirstDiv";
import { lenis } from "./setupLenis";

export function startApplication() {
  enableScroll();
  renderFirstSectionElements();

  setTimeout(() => {
    lenis.resize();
  }, 100);
}
