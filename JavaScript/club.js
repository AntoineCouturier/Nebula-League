const buttons = document.querySelectorAll(".dropdown-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const isOpen = content.classList.contains("open");

        // Ferme tous les autres dropdowns
        document.querySelectorAll(".dropdown-content.open").forEach(openContent => {
            if (openContent !== content) {
                openContent.classList.remove("open");
                openContent.previousElementSibling.classList.remove("active");
            }
        });

        // Toggle du dropdown cliqué
        if (isOpen) {
            content.classList.remove("open");
            btn.classList.remove("active");
        } else {
            content.classList.add("open");
            btn.classList.add("active");
        }
    });
});

// -------- MODE COMPACT / DETAILLE --------
const toggleBtn = document.getElementById("toggleViewBtn");
let compactMode = false;

toggleBtn.addEventListener("click", () => {
    compactMode = !compactMode;
    document.body.classList.toggle("compact");
    toggleBtn.textContent = compactMode ? "Mode détaillé" : "Mode compact";
});

// -------- SCROLL REVEAL --------
const revealClubs = () => {
    document.querySelectorAll(".club").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add("reveal");
        }
    });
};

window.addEventListener("scroll", revealClubs);
window.addEventListener("load", revealClubs);
