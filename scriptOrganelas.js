function openTab(contentId) {
    // Fechar todas as abas
    var allContents = document.querySelectorAll('.content');
    allContents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Abrir a aba selecionada
    var contentToShow = document.getElementById(contentId);
    contentToShow.classList.add('active');

    // Mostrar a info-box
    var infoBox = document.getElementById('info-box');
    infoBox.style.display = 'block';

    // Adicionar a classe no-scroll ao body
    document.body.classList.add('no-scroll');

    // Garantir que o info-box seja recalculado após aparecer
    setTimeout(function() {
        // Centralizar a info-box baseado na posição da rolagem
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var viewportHeight = window.innerHeight;
        var infoBoxHeight = infoBox.offsetHeight;

        infoBox.style.top = (scrollTop + (viewportHeight - infoBoxHeight) / 2) + 'px';
        infoBox.style.left = '50%';
        infoBox.style.transform = 'translateX(-50%)';
    }, 0); // Timeout de 0 para garantir que o elemento tenha sido renderizado
    
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    overlay.style.display = 'block';

    // Fecha o painel ao clicar fora
    overlay.onclick = function() {
        infoBox.style.display = 'none';
        overlay.remove();
        
        // Remover a classe no-scroll do body ao fechar
        document.body.classList.remove('no-scroll');
    };
}
