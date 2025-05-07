                                                                                                                                                                                                                      // Scroll suave para as âncoras de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Interatividade com os botões
const botoes = document.querySelectorAll('.botao');

botoes.forEach(botao => {
    botao.addEventListener('mouseover', () => {
        botao.style.transform = "scale(1.05)";
        botao.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
    });

    botao.addEventListener('mouseout', () => {
        botao.style.transform = "scale(1)";
        botao.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    });
});
