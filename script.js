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





// Função para mover cards serviços
let currentIndex = 0;

const moveCarousel = (direction) => {
    const carousel = document.getElementById('carousel');
    const cards = document.querySelectorAll('#card'); 
    const totalCards = cards.length;
    const visibleCards = window.innerWidth <= 768 ? 1 : 4; 
    
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalCards - visibleCards; 
    } else if (currentIndex > totalCards - visibleCards) {
        currentIndex = 0;
    }

    const cardWidth = cards[0].offsetWidth; 
    const offset = -currentIndex * cardWidth;
    carousel.style.transform = `translateX(${offset}px)`;
};

// Função para mover cards depoimentos
let currentIndex1 = 0;

const moveCarousel1 = (direction) => {
    const carousel = document.getElementById('carousel1');
    const cards = document.querySelectorAll('#card1'); 
    const totalCards = cards.length;
    const visibleCards = window.innerWidth <= 768 ? 1 : 4; 
    
    currentIndex1 += direction;

    if (currentIndex1 < 0) {
        currentIndex1 = totalCards - visibleCards; 
    } else if (currentIndex1 > totalCards - visibleCards) {
        currentIndex1 = 0;
    }

    const cardWidth = cards[0].offsetWidth; 
    const offset = -currentIndex1 * cardWidth;
    carousel.style.transform = `translateX(${offset}px)`;
};





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
            botaoTopo.style.display = "block"; // Exibe o botão
        } else {
            botaoTopo.style.display = "none"; // Esconde o botão
        }
    };

    // Função para rolar até o topo quando o botão for clicado
    botaoTopo.addEventListener("click", function () {
        // Rolagem suave até o topo
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Rolagem suave
        });
    });
};
