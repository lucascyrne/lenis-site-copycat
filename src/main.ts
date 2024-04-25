import './style.css';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';

const lenis = new Lenis({
  lerp: 0.1,
  smoothWheel: true,
});

// Inicializa as animações e eventos necessários após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  setupScrollProgressBar();
  setupLenis();
  setupGradient();
  setupFirstDiv();
  setTimeout(createParticles, 3000);
});

// Configuração do indicador de progresso de rolagem
function setupScrollProgressBar() {
  // Cria a barra de progresso e adiciona ao body
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress-bar';
  document.body.prepend(progressBar);

  // Adiciona evento de scroll para atualizar a barra de progresso
  window.addEventListener('scroll', () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.pageYOffset / height) * 100;
    progressBar.style.width = `${scrolled}%`;
  });
}

// Configuração do Lenis para rolagem suave
function setupLenis() {
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

function setupGradient() {
  const gradientDiv = document.createElement('div');
  gradientDiv.id = 'gradient';
  gradientDiv.style.position = 'fixed';
  gradientDiv.style.top = '0';
  gradientDiv.style.left = '0';
  gradientDiv.style.width = '100vw';
  gradientDiv.style.height = '100vh';
  gradientDiv.style.zIndex = '0';
  gradientDiv.style.background =
    'linear-gradient(0deg, rgba(255, 152, 162, .26) 0%, #000 46%)';
  document.body.prepend(gradientDiv); // Assegura que é o primeiro no body
}

// Cria partículas e as anima
function createParticles() {
  const maxOffset = window.innerHeight * 5;
  for (let i = 0; i < 225; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    if (Math.random() < 0.3) {
      // 30% das partículas terão um brilho
      particle.classList.add('glowing');
    }
    particle.style.top = `${Math.random() * maxOffset}px`;
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    document.body.appendChild(particle);

    animateParticle(particle);
  }
}

// Animação individual de partícula
function animateParticle(particle: HTMLElement) {
  // Animação comum
  gsap.to(particle, {
    x: `+=${Math.random() * 100 - 50}`,
    y: `+=${Math.random() * 100 - 50}`,
    repeat: -1,
    yoyo: true,
    duration: Math.random() * 6 + 1,
  });

  if (particle.classList.contains('glowing')) {
    // Piscar para partículas brilhantes
    gsap.to(particle, {
      opacity: 0.3,
      repeat: -1,
      yoyo: true,
      duration: Math.random() * 2 + 1,
    });
  }
}

// function disableScroll() {
//   document.body.style.overflowY = 'hidden';
// }

function setupFirstDiv() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = ''; // Limpa a div#app

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
    '.banner, .letter, .letter-bottom, .subtitle, .scroll-to-explore, .first-section-description, .first-section-button',
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

function positionLetters() {
  const letters = document.querySelectorAll('.letter');
  const bottomLetters = document.querySelectorAll('.letter-bottom');

  // Assumindo que há 3 letras na linha de cima e 2 na de baixo
  letters.forEach((letter, index) => {
    gsap.set(letter, {
      position: 'absolute',
      top: index < 3 ? '0%' : '50%', // Ajuste os valores conforme necessário
      left: `${12 + index * 38.6}%`, // Espalha as letras horizontalmente
      transform: 'translate(-50%, -50%)',
    });
  });

  // Assumindo que as letras inferiores começam no mesmo local e movem para cima
  bottomLetters.forEach((letter, index) => {
    gsap.set(letter, {
      position: 'absolute',
      top: '62%', // Começa mais abaixo
      left: `${31.5 + index * 36.5}%`, // Ajuste os valores conforme necessário
      transform: 'translate(-50%, -50%)',
    });
  });
}

function animateLettersIn() {
  const letters = document.querySelectorAll('.letter, .letter-bottom');

  // Define opacidade inicial e visibilidade escondida
  gsap.set(letters, {
    y: 200,
    opacity: 1,
    visibility: 'visible',
    clipPath: 'inset(0% 0% 100% 0%)',
  });

  // Anima as letras para que elas surjam de sua própria base

  gsap.to(letters, {
    y: 0,
    clipPath: 'inset(0% 0% 0% 0%)',
    stagger: 0.1, // Pequeno atraso entre cada letra
    ease: 'power2.out', // Suavização da animação
    duration: 1, // Duração da animação
    delay: 0.5, // Atraso após o fundo vermelho aparecer
  });
}

// Função para animar o fundo e as letras inferiores subindo e mudança de cor das letras
function animateTransitionBackground() {
  const transitionBackground = document.querySelector('.transition-background');
  const lettersTop = document.querySelectorAll('.letter');
  const lettersBottom = document.querySelectorAll('.letter-bottom');

  if (transitionBackground) {
    // Cria uma timeline para a animação
    const tl = gsap.timeline({
      ease: 'power2.inOut',
      onComplete: startApplication, // Reativa a rolagem quando a animação estiver completa
    });

    // Animação do fundo vermelho subindo
    tl.to(transitionBackground, {
      y: '-100vh', // Recolhe o fundo para cima
      duration: 0.5,
    })
      .to(
        lettersBottom,
        {
          y: '-62vh', // Move as letras inferiores para o topo
          color: '#ff98a2', // Muda a cor das letras para branco
          duration: 0.5,
        },
        '<0.1'
      ) // Começa um pouco antes do movimento do fundo
      .to(
        lettersTop,
        {
          color: '#ff98a2', // Muda a cor das letras para branco
          duration: 0.5,
        },
        '<0.15'
      ); // As letras superiores começam a mudar de cor um pouco depois
  }
}

function animateBannerIn() {
  const banner = document.querySelector('.banner')!;
  gsap.from(banner, {
    y: -100,
    opacity: 0,
    duration: 0.5,
  });

  gsap.to(banner, {
    autoAlpha: 1,
  });
}

function startApplication() {
  enableScroll();
  renderFirstSectionElements();

  setTimeout(() => {
    lenis.resize();
  }, 100);
}

function createBanner(parent: HTMLElement) {
  const bannerHTML = `
    <div class="banner">
      <span>THIS SITE IS STILL UNDER CONSTRUCTION. VISIT IT AGAIN SOON TO SEE IT BEING UPDATED. THIS WORK IS A COPY OF THE LENIS <a href="https://lenis.darkroom.engineering/">SITE</a>  FOR STUDY PURPOSES AND TO ENRICH THE DEVELOPER'S PORTFOLIO.</span>
      <button class="close-button">&times;</button>
    </div>
  `;

  parent.insertAdjacentHTML('afterbegin', bannerHTML);
  const closeButton = document.querySelector('.close-button');
  closeButton!.addEventListener('click', () => removeBanner());
}

function removeBanner() {
  const banner = document.querySelector('.banner')!;
  gsap.to(banner, {
    y: -100,
    opacity: 0,
    duration: 0.5,
    onComplete: () => banner.remove(),
  });
}

function enableScroll() {
  document.body.style.overflowY = 'scroll';
}

function renderFirstSectionElements() {
  const subtitle = document.querySelectorAll('.subtitle');
  const scrollToExplore = document.querySelectorAll('.scroll-to-explore');
  const firstSectionDescription = document.querySelector(
    '.first-section-description'
  );
  const firstSectionButton = document.querySelector('.first-section-button');

  // Configurações iniciais dos elementos da seção
  gsap.set(
    [subtitle, scrollToExplore, firstSectionDescription, firstSectionButton],
    {
      y: 50,
      opacity: 1,
      visibility: 'visible',
      clipPath: 'inset(0% 0% 100% 0%)',
    }
  );

  gsap.to(firstSectionButton, {
    y: 0,
    clipPath: 'inset(0% 0% 0% 0%)',
    stagger: 0.1, // Pequeno atraso entre cada elemento
    ease: 'power2.out', // Suavização da animação
    duration: 0.5, // Duração da animação
    delay: 0, // Atraso após o fundo vermelho aparecer
  });

  // Animações de entrada dos elementos
  gsap.to([subtitle, scrollToExplore, firstSectionDescription], {
    y: 0,
    clipPath: 'inset(0% 0% 0% 0%)',
    stagger: 0.1, // Pequeno atraso entre cada elemento
    ease: 'power2.out', // Suavização da animação
    duration: 0.5, // Duração da animação
    delay: 0.5, // Atraso após o fundo vermelho aparecer
  });

  const redLine = document.querySelector('.red-line');
  gsap.to(redLine, {
    height: 54, // Altura máxima
    repeat: -1, // Repetir infinitamente
    yoyo: true, // Volta para o estado inicial após completar uma animação
    ease: 'sine.inOut', // Efeito de suavização para a animação de altura
    duration: 2, // Duração de cada ciclo de animação
  });

  firstSectionButton!.addEventListener('mouseenter', () => {
    gsap.to(firstSectionButton, {
      duration: 0.1,
      ease: 'none',
      backgroundColor: '#FFFFFF', // Animação da cor de fundo
    });

    gsap.to(firstSectionButton, {
      duration: 0.1,
      ease: 'none',
      '--height-after': '100%', // Animação da altura do pseudo-elemento
    });
  });

  firstSectionButton!.addEventListener('mouseleave', () => {
    gsap.to(firstSectionButton, {
      duration: 0.1,
      ease: 'none',
      backgroundColor: 'var(--primary-red)', // Animação da cor de fundo
    });

    gsap.to(firstSectionButton, {
      duration: 0.1,
      ease: 'none',
      '--height-after': '0%', // Animação da altura do pseudo-elemento
    });
  });
}
