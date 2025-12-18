const categoryBtns = document.querySelectorAll('.category-btn');
const matchCards = document.querySelectorAll('.match-card');

// FILTRE PAR CATÉGORIE
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.dataset.cat;

        matchCards.forEach(card => {
            card.style.display = (cat === 'all' || card.dataset.cat === cat) ? 'block' : 'none';
        });

        const visibleCards = Array.from(matchCards).filter(c => c.style.display !== 'none');
        visibleCards.sort((a,b) => new Date(b.dataset.date) - new Date(a.dataset.date));
        const parent = document.querySelector('.match-list');
        visibleCards.forEach(c => parent.appendChild(c));
    });
});

// Tri au chargement
document.querySelector('.category-btn.active').click();

// ---- POPUP ----
document.querySelectorAll(".details-btn").forEach(button => {
    button.addEventListener("click", () => {
        const popupID = button.dataset.popup;
        document.getElementById(popupID).style.display = "flex";
    });
});

document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".popup-bg").style.display = "none";
    });
});

// Clique extérieur = fermer
document.querySelectorAll(".popup-bg").forEach(p => {
    p.addEventListener("click", e => {
        if (e.target === p) p.style.display = "none";
    });
});

// Couleur de Notes

function interpolateColor(color1, color2, factor) {
    const c1 = color1.match(/\w\w/g).map(x => parseInt(x, 16));
    const c2 = color2.match(/\w\w/g).map(x => parseInt(x, 16));
    const result = c1.map((c, i) => Math.round(c + (c2[i] - c) * factor));
    return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
}

document.querySelectorAll('.note-bar').forEach(bar => {
    const note = parseFloat(bar.dataset.note);
    bar.style.setProperty('--note', note);

    let color;

    if (note <= 5) { 
        // Rouge → Orange
        const t = note / 5;
        color = interpolateColor("#FF2B2B", "#FF8C00", t);
    }
    else if (note <= 6.5) { 
        // Orange → Jaune
        const t = (note - 5) / 1.5;
        color = interpolateColor("#FF8C00", "#FFD300", t);
    }
    else if (note <= 8) { 
        // Jaune → Vert clair
        const t = (note - 6.5) / 1.5;
        color = interpolateColor("#FFD300", "#39FF14", t);
    }
    else if (note <= 9) {
        // Vert clair → Vert flashy
        const t = (note - 8) / 1;
        color = interpolateColor("#39FF14", "#00FF00", t);
    }
    else { 
        // Vert flashy → Bleu néon
        const t = (note - 9) / 1;
        color = interpolateColor("#00FF00", "#00ffeaff", t);
    }

    bar.innerHTML = "";
    bar.style.background = "#000000ff";

    const fill = document.createElement("div");
    fill.style.height = "100%";
    fill.style.width = `${note * 10}%`;
    fill.style.borderRadius = "10px";
    fill.style.backgroundColor = color;
    fill.style.transition = "0.3s";

    bar.appendChild(fill);
});
