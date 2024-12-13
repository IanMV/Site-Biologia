function createCarousel(carouselId) {
    let currentIndex = 0;
    const carouselContainer = document.getElementById(carouselId);
    const texts = carouselContainer.children; // Seleciona diretamente os filhos

    function showText(index) {
        for (let i = 0; i < texts.length; i++) {
            texts[i].classList.remove('active');
            if (i === index) {
                texts[i].classList.add('active');
            }
        }
    }

    function proxText() {
        currentIndex = (currentIndex + 1) % texts.length;
        showText(currentIndex);
    }

    function anteText() {
        currentIndex = (currentIndex - 1 + texts.length) % texts.length;
        showText(currentIndex);
    }

    // Inicializa o carrossel com o primeiro texto visível
    showText(currentIndex);


    return { proxText, anteText };
}

const carrossel1 = createCarousel('carrossel1');
const carrossel2 = createCarousel('carrossel2');

// Atualiza as funções para os botões
window.proxText = function(carouselId) {
    if (carouselId === 'carrossel1') carrossel1.proxText();
    else if (carouselId === 'carrossel2') carrossel2.proxText();
};

window.anteText = function(carouselId) {
    if (carouselId === 'carrossel1') carrossel1.anteText();
    else if (carouselId === 'carrossel2') carrossel2.anteText();
};
