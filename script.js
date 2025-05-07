// Scroll suave para as âncoras de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  // Impede o comportamento padrão de navegação

        // Obtém o ID do destino do link (por exemplo, #sobre-mim, #projetos, etc.)
        const targetId = this.getAttribute("href");

        // Verifica se o elemento de destino realmente existe antes de tentar o scroll
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth"  // Ativa o comportamento suave de rolagem
            });
        }
    });
});

// Interatividade com os botões
const botoes = document.querySelectorAll('.botao');

// Aplica efeitos visuais aos botões quando o mouse passa sobre eles
botoes.forEach(botao => {
    botao.addEventListener('mouseover', () => {
        // Adiciona o efeito de aumento e sombra no botão
        botao.style.transform = "scale(1.05)";
        botao.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
    });

    // Restaura o estado original do botão quando o mouse sai
    botao.addEventListener('mouseout', () => {
        botao.style.transform = "scale(1)";
        botao.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    });
});
