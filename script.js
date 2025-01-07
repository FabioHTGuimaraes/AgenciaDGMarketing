// Função para redirecionar para o instagram
function redirecionarParaPagina1() {
    // Redireciona para outra página
    window.open("https://www.instagram.com/agenciadgmarketing/", "_blank");
}

// Função para redirecionar para o google
function redirecionarParaPagina2() {
    // Redireciona para outra página
    window.open("https://maps.app.goo.gl/cdXyFsrW1CFwvGWM6", "_blank");
}

// Função para redirecionar para o gmail
function redirecionarParaPagina3() {
  // Redireciona para outra página
  window.open("mailto:mktdguimaraes@gmail.com", "_blank");
}

// Função para redirecionar para o whatsapp
function redirecionarParaPagina4() {
    // Redireciona para outra página
    window.open("https://wa.me/5521976291433", "_blank");
}

// Função para redirecionar para o linkedin
function redirecionarParaPagina5() {
    // Redireciona para outra página
    window.open("https://www.linkedin.com/in/fabioguimaraes1/", "_blank");
}






// Função para mover cards serviços
// IDs das imagens no carrossel
const imageIds = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6'];
let currentIndex = 0; // Índice atual

// Atualiza o carrossel para mostrar a imagem com base no índice atual
function goToSlide(index) {
    currentIndex = index;
    const carousel = document.getElementById('carousel');
    const cardWidth = document.querySelector('.card').offsetWidth;

    // Move o carrossel horizontalmente
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    updateDots();
    resetAutoSlide();
}

// Atualiza o estado das bolinhas
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

// Avança automaticamente para o próximo slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % imageIds.length;
    goToSlide(currentIndex);
}

// Reinicia o temporizador de avanço automático
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 4000);
}

// Inicializa ao carregar a página
let autoSlideInterval = setInterval(nextSlide, 4000);

// Garante que o carrossel esteja pronto ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    goToSlide(0);
});







// Seleciona todos os links do menu
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 
        
        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId); 
        
        if (targetElement) {
            const targetPosition = targetElement.offsetTop; 
            const startPosition = window.scrollY; 
            const distance = targetPosition - startPosition; 
            const duration = 9000; 
            let start = null;

            function scrollAnimation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
            }

            // Função para suavizar a rolagem
            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return (c / 2) * t * t + b;
                t--;
                return (-c / 2) * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(scrollAnimation);
        }
    });
});


// Esperar o carregamento completo da página
window.onload = function() {
    const botaoTopo = document.getElementById("botão-topo");

    // Mostrar o botão quando rolar para baixo
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            botaoTopo.style.display = "block";
        } else {
            botaoTopo.style.display = "none"; 
        }
    };

    // Função para rolar até o topo quando o botão for clicado
    botaoTopo.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    });
};
