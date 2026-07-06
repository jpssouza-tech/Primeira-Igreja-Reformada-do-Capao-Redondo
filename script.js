// Aguarda o navegador carregar todo o HTML antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. LÓGICA DO MENU MOBILE (HAMBURGER) --- */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.main-nav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Fecha o menu automaticamente ao clicar em um link (melhor UX)
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    /* --- 2. EFEITO DE APARECER AOS POUCOS (SCROLL REVEAL) --- */
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

});