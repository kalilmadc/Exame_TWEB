// Navegação entre páginas
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageName = link.getAttribute('data-page');
        navigateTo(pageName);
    });
});

function navigateTo(pageName) {
    // Remove active de todos os links e páginas
    navLinks.forEach(link => link.classList.remove('active'));
    pages.forEach(page => page.classList.remove('active'));

    // Adiciona active ao link e página correspondentes
    const activeLink = document.querySelector(`[data-page="${pageName}"]`);
    const activePage = document.getElementById(pageName);

    if (activeLink) {
        activeLink.classList.add('active');
    }
    if (activePage) {
        activePage.classList.add('active');
        activePage.scrollTop = 0;
    }

    // Scroll para o topo
    document.querySelector('.main-content').scrollTop = 0;
}

// Animações de scroll suave
document.querySelectorAll('.toc a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Função auxiliar para navegação via botão
window.navigateTo = navigateTo;

// Highlight de código (opcional, se usar highlight.js)
// document.querySelectorAll('code').forEach(block => {
//     hljs.highlightElement(block);
// });
