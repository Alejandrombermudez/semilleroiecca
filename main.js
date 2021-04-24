document.addEventListener('DOMContentLoaded'), () => {
    const elementosintegrantes = document.querySelectorAll('.carousel');
    M.carousel.init(elementosintegrantes, {
        duration: 150
    });
};