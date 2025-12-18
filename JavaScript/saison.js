// Gestion des popups par saison
document.querySelectorAll(".season-card").forEach(card => {

    const btn = card.querySelector(".details-btn");
    const popup = card.querySelector(".popup-bg");
    const close = popup.querySelector(".close-btn");

    btn.addEventListener("click", () => {
        popup.style.display = "flex";
    });

    close.addEventListener("click", () => {
        popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
        if (e.target === popup) popup.style.display = "none";
    });

});

// Tri des saisons par date décroissante
const seasonList = document.querySelector(".season-list");
const cards = Array.from(document.querySelectorAll(".season-card"));

cards.sort((a, b) => new Date(b.dataset.start) - new Date(a.dataset.start));

cards.forEach(c => seasonList.appendChild(c));
