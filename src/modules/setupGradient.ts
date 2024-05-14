export function setupGradient() {
  const gradientDiv = document.createElement("div");
  gradientDiv.id = "gradient";
  gradientDiv.style.position = "fixed";
  gradientDiv.style.top = "0";
  gradientDiv.style.left = "0";
  gradientDiv.style.width = "100vw";
  gradientDiv.style.height = "100vh";
  gradientDiv.style.zIndex = "0";
  gradientDiv.style.background =
    "linear-gradient(0deg, rgba(255, 152, 162, .26) 0%, #000 46%)";
  document.body.prepend(gradientDiv); // Assegura que é o primeiro no body
}
