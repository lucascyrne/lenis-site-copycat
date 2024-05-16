import { enableScroll } from "../utils/enableScroll";
import { setupFirstSection } from "./setupFirstSection";
import { lenis } from "./setupLenis";

export function startApplication() {
  enableScroll();
  setupFirstSection();

  setTimeout(() => {
    lenis.resize();
  }, 100);
}
