// Configuração do indicador de progresso de rolagem
export function setupScrollProgressBar() {
  // Cria a barra de progresso e adiciona ao body
  const progressBar = document.createElement("div");
  progressBar.id = "scroll-progress-bar";
  document.body.prepend(progressBar);

  // Adiciona evento de scroll para atualizar a barra de progresso
  window.addEventListener("scroll", () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.pageYOffset / height) * 100;
    progressBar.style.width = `${scrolled}%`;
  });
}
