const popup = document.getElementById("popupSeason");
const openBtn = document.getElementById("openSeasonPopup");
const closeBtn = document.getElementById("closeSeasonPopup");
const seasonSelect = document.getElementById("seasonSelect");
const seasonStatsDisplay = document.getElementById("seasonStatsDisplay");

function getStatsForSeason(season) {
    const elem = document.querySelector(
        `.season[data-season="${season}"]`
    );

    return {
        matchs: elem.dataset.matchs,
        buts: elem.dataset.buts,
        assists: elem.dataset.assists,
        saves: elem.dataset.saves,
        dribbles: elem.dataset.dribbles,
        mvp: elem.dataset.mvp,
        win: elem.dataset.win,
        lose: elem.dataset.lose
    };
}

function updateSeasonStats(season) {
    const s = getStatsForSeason(season);

    seasonStatsDisplay.innerHTML = `
        <p><strong>Matchs :</strong> ${s.matchs}</p>
        <p><strong>Buts :</strong> ${s.buts}</p>
        <p><strong>Assists :</strong> ${s.assists}</p>
        <p><strong>Defensive Save :</strong> ${s.saves}</p>
        <p><strong>Dribbles :</strong> ${s.dribbles}</p>
        <p><strong>MVP :</strong> ${s.mvp}</p>
        <p><strong>Victoire :</strong> ${s.win}</p>
        <p><strong>Défaite :</strong> ${s.lose}</p>
    `;
}

openBtn.onclick = () => {
    popup.style.display = "flex";
    updateSeasonStats(seasonSelect.value);
};

closeBtn.onclick = () => {
    popup.style.display = "none";
};

// Fermer en cliquant en dehors du pop-up
window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});


seasonSelect.onchange = () => {
    updateSeasonStats(seasonSelect.value);
};
// ------------------ POPUP SECRET PAR MATCH ------------------

const popupMatch = document.getElementById("popupMatch");
const closeMatchBtn = document.getElementById("closeMatchPopup");
const matchSelect = document.getElementById("matchSelect");
const matchStatsDisplay = document.getElementById("matchStatsDisplay");

// Récupérer les données depuis <div class="match">
function getStatsForMatch(match) {
    const elem = document.querySelector(`.match[data-match="${match}"]`);

    return {
        title: elem.dataset.title,
        buts: elem.dataset.buts,
        pass: elem.dataset.pass,
        saves: elem.dataset.saves,
        dribbles: elem.dataset.dribbles
    };
}

function updateMatchStats(match) {
    const s = getStatsForMatch(match);

    matchStatsDisplay.innerHTML = `
        <h3 style="margin-top:5px;">${s.title}</h3>
        <p><strong>Buts :</strong> ${s.buts}</p>
        <p><strong>Passes D :</strong> ${s.pass}</p>
        <p><strong>Defenses :</strong> ${s.saves}</p>
        <p><strong>Dribbles :</strong> ${s.dribbles}</p>
    `;
}


// Ouvrir popup via Ctrl + Shift + S
document.addEventListener("keydown", (e) => {
    // Vérifie Ctrl + Shift + S
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "s") {
        popupMatch.style.display = "flex";
        updateMatchStats(matchSelect.value);
    }
});


closeMatchBtn.onclick = () => {
    popupMatch.style.display = "none";
};

// Fermer en cliquant dehors
window.addEventListener("click", (e) => {
    if (e.target === popupMatch) popupMatch.style.display = "none";
});

// changement du match
matchSelect.onchange = () => {
    updateMatchStats(matchSelect.value);
};
