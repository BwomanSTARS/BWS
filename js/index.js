document.addEventListener('DOMContentLoaded', () => {
    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMobile = document.getElementById('nav-mobile');
    
    menuToggle?.addEventListener('click', () => {
        navMobile.classList.toggle('show');
        menuToggle.classList.toggle('active');
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!navMobile.contains(e.target) && 
            !menuToggle.contains(e.target) && 
            navMobile.classList.contains('show')) {
            navMobile.classList.remove('show');
            menuToggle.classList.remove('active');
        }
    });

    // Inicializar AOS
    AOS.init({
        duration: 800,
        once: true
    });
});
