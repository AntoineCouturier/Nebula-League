// Navigation simple via tout le div
document.querySelectorAll('.card-A').forEach(card => {
    card.style.cursor = 'pointer'; // montre que c'est cliquable
    card.addEventListener('click', () => {
        const link = card.dataset.link;
        if (link) {
            window.location.href = link;
        }
    });
});
