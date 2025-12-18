// 🔥 COULEURS DEGRADÉES SELON TON ORDRE
const CLUB_COLORS = {
    "Bastard Munchen": { from: "#ff3a3a", to: "#c900dfff" }, 
    "PXG": { from: "#0026ff", to: "#c900dfff" },
    "Ubers": { from: "#34ff4e", to: "#c900dfff" },
    "Barcha": { from: "#ffe600", to: "#c900dfff" },
    "Manshine City": { from: "#00d4ff", to: "#c900dfff" },
};

// 🔥 LOGOS — nommage automatique (img/clubs/)
const CLUB_LOGOS = club => `images/clubs_icon/${club.replace(/\s+/g, "_")}.png`;


// ------------------------
// TES DONNÉES (NON MODIFIÉES)
// ------------------------
const DATA = {
    topScorer: { name: "Dylan", goals: 6, club: "Bastard Munchen" },
    topPasser: { name: "Antoine", passes: 7, club: "Bastard Munchen" },
    topDefender: { name: "Antoine", defenses: 12, club: "Bastard Munchen" },
    topPrice: { name: "Antoine", price: "79,000,000¥💎", club: "Bastard Munchen" },
    topClub: { name: "Manshine City", titles: 1 },

    clubsAlltime: [
        {rank:1, name:"Manshine City", points:3, titles:1, winpct:100, diff:+11},
        {rank:2, name:"PXG", points:0, titles:0, winpct:0, diff:-11},
        {rank:3, name:"Ubers", points:0, titles:0, winpct:0, diff:0},
        {rank:4, name:"Barcha", points:0, titles:0, winpct:0, diff:0},
        {rank:5, name:"Bastard Munchen", points:0, titles:0, winpct:0, diff:0}
    ],

    scorers: [
        {rank:1, name:"Dylan", club:"Manshine City", goals:6, avg:6.0},
        {rank:2, name:"Antoine", club:"Manshine City", goals:5, avg:5.0},
        {rank:3, name:"Theo", club:"Manshine City", goals:2, avg:2.0},
        {rank:4, name:"Jason", club:"PXG", goals:1, avg:1.0},
        {rank:5, name:"Enzo", club:"PXG", goals:1, avg:1.0},
    ],


    records: [

        // ----------------------------
        // Records All Time
        // ----------------------------
        {title:"Match le plus prolifique", value:"Manshine City 13 - 2 PXG (15 buts)"},
        {title:"Plus grosse victoire", value:"Manshine City 13 - 2 PXG (11 buts)"},
        {title:"Série d'invincibilité", value:"Manshine City — 1 matchs"},
        {title:"Meilleur Buteur en une seul Saison", value:"Dylan — 6 Buts"},
        {title:"Meilleur Offense", value:"Manshine City — 13 Buts Marqués"},
        {title:"Meilleur Defense", value:"Manshine City — 2 Buts Encaissés"},
        {title:"Buts le Plus Rapide", value:"Dylan — 43s"},
        {
            title: "Plus Beau But",
            value: `<a href="Autre/greatest_goal.html" target=_blank class="record-btn">Voir →</a>`
        },
        {
            title: "Pire But Manqué",
            value: `<a href="Autre/worst_goal.html" target=_blank class="record-btn">Voir →</a>`
        },

        // ----------------------------
        // Records Saisonier
        // ----------------------------
        {title:"Match le plus prolifique de la Saison", value:"Manshine City 11 - 2 PXG (15 buts)",season:true},
        {title:"Plus grosse victoire de la Saison", value:"Manshine City 11 - 2 PXG (11 buts)",season:true},
        {title:"Plus Grande Série d'invincibilité de la Saison", value:"Manshine City — 2 matchs",season:true},
        {title:"Meilleur Offense de la Saison", value:"Manshine City — 11 Buts Marqués", season:true},
        {title:"Meilleur Defense de la Saison", value:"Manshine City — 1 Buts Encaissés", season:true},
        {title:"Buts le Plus Rapide de la Saison", value:"Dylan — 23s",season:true},
        {
            title: "Plus Beau But de la Saison",
            value: `<a href="Autre/season_goal.html" target=_blank class="record-btn">Voir →</a>`,season:true
        },
        {
            title: "Pire But Manqué de la Saison",
            value: `<a href="Autre/season_miss.html" target=_blank class="record-btn">Voir →</a>`,season:true
        }


    ],

    clubsPerformance: [
        { club: "Manshine City", value: 100 },
        { club: "Bastard Munchen", value: 0 },
        { club: "Ubers", value: 0 },
        { club: "Barcha", value: 0 },
        { club: "PXG", value: 1 }
    ]
};


// ----------------------------
// Injection des stat-cards
// ----------------------------
document.getElementById("topScorer").textContent = DATA.topScorer.name + " (" + DATA.topScorer.goals + ")";
document.getElementById("topPasser").textContent = DATA.topPasser.name + " (" + DATA.topPasser.passes + ")";
document.getElementById("topDefender").textContent = DATA.topDefender.name + " (" + DATA.topDefender.defenses + ")";
document.getElementById("topPrice").textContent = DATA.topPrice.name + " (" + DATA.topPrice.price + ")";
document.getElementById("topClub").textContent = DATA.topClub.name + " (" + DATA.topClub.titles + ")";


// ----------------------------
// FONCTION LIGNE CLUB avec LOGO
// ----------------------------
const clubRow = c => `
<tr>
    <td>${c.rank}</td>
    <td>
        <img src="${CLUB_LOGOS(c.name)}" class="club-icon"> 
        ${c.name}
    </td>
    <td>${c.points}</td>
    <td>${c.titles}</td>
    <td>${c.winpct}%</td>
    <td>${c.diff}</td>
</tr>
`;


// ----------------------------
// Tableau all-time + TRI
// ----------------------------
let clubsTableData = [...DATA.clubsAlltime];

const tbodyAll = document.querySelector("#alltime-table tbody");

function renderAllTime() {
    tbodyAll.innerHTML = "";
    clubsTableData.forEach(c => tbodyAll.innerHTML += clubRow(c));
}
renderAllTime();

document.querySelectorAll("#alltime-table th").forEach((th, index) => {
    if (index < 2) return; // On ne trie pas Rank / Nom

    let asc = false;
    th.style.cursor = "pointer";

    th.addEventListener("click", () => {
        const keys = ["points","titles","winpct","diff"];
        const key = keys[index - 2];

        asc = !asc;

        clubsTableData.sort((a, b) => {
            if (a[key] === "No Data") return 1;
            if (b[key] === "No Data") return -1;
            return asc ? a[key] - b[key] : b[key] - a[key];
        });

        renderAllTime();
    });
});


// ----------------------------
// Tableau buteurs (+ logos)
// ----------------------------
const tbodySc = document.querySelector("#scorers-table tbody");

DATA.scorers.forEach(s => {
    tbodySc.innerHTML += `
        <tr>
            <td>${s.rank}</td>
            <td>${s.name}</td>
            <td>
                <img src="${CLUB_LOGOS(s.club)}" class="club-icon">
                ${s.club}
            </td>
            <td>${s.goals}</td>
            <td>${s.avg}</td>
        </tr>
    `;
});


// ----------------------------
// Records
// ----------------------------


// ----------------------------
// CLUB MINI-BARRES ANIMÉES + LOGO
// ----------------------------
const clubsPerf = document.getElementById("clubsPerfs");

DATA.clubsPerformance.forEach((c) => {
    const barID = "bar_" + c.club.replace(/\s+/g, "_");

    // Création du conteneur
    const clubDiv = document.createElement("div");
    clubDiv.className = "club-mini";

    // Titre + logo
    const h4 = document.createElement("h4");
    const img = document.createElement("img");
    img.src = CLUB_LOGOS(c.club);
    img.className = "club-icon";
    img.alt = c.club;
    h4.appendChild(img);
    h4.appendChild(document.createTextNode(c.club));
    clubDiv.appendChild(h4);

    // Conteneur de la barre
    const container = document.createElement("div");
    container.className = "mini-bar-container";

    // Barre
    const bar = document.createElement("div");
    bar.className = "mini-bar";
    bar.id = barID;

    // Dégradé selon le club
    const colors = CLUB_COLORS[c.club] || { from: "#ddd", to: "#aaa" };
    bar.style.background = `linear-gradient(90deg, ${colors.from}, ${colors.to})`;
    bar.style.width = "0%"; // départ pour animation

    container.appendChild(bar);
    clubDiv.appendChild(container);

    clubsPerf.appendChild(clubDiv);

    // Animation fluide
    setTimeout(() => {
        bar.style.width = c.value + "%";
    }, 50);
});

const alltimeList = document.getElementById("records-alltime");
const seasonList = document.getElementById("records-season");

// On sépare les records selon leur type (ici je suppose que tu as All-Time et Saison)
const allTimeRecords = DATA.records.filter(r => !r.season);
const seasonRecords = DATA.records.filter(r => r.season);

// Injection
allTimeRecords.forEach(r => {
    alltimeList.innerHTML += `<li><strong>${r.title}:</strong> ${r.value}</li>`;
});

seasonRecords.forEach(r => {
    seasonList.innerHTML += `<li><strong>${r.title}:</strong> ${r.value}</li>`;
});

// Toggle boutons
document.querySelectorAll(".records-toggle .record-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".records-toggle .record-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const target = btn.getAttribute("data-target");
        if (target === "alltime") {
            alltimeList.style.display = "block";
            seasonList.style.display = "none";
        } else {
            alltimeList.style.display = "none";
            seasonList.style.display = "block";
        }
    });
});

// Exemple pour topScorer
const topScorerCard = document.getElementById("topScorer");
topScorerCard.innerHTML = `
    ${DATA.topScorer.name} (${DATA.topScorer.goals})
    <img src="${CLUB_LOGOS(DATA.topScorer.club)}" class="stat-card-img" alt="Logo Club">
`;

// Même principe pour les autres cartes
const topPasserCard = document.getElementById("topPasser");
topPasserCard.innerHTML = `
    ${DATA.topPasser.name} (${DATA.topPasser.passes})
    <img src="${CLUB_LOGOS(DATA.topPasser.club)}" class="stat-card-img" alt="Logo Club">
`;

const topDefenderCard = document.getElementById("topDefender");
topDefenderCard.innerHTML = `
    ${DATA.topDefender.name} (${DATA.topDefender.defenses})
    <img src="${CLUB_LOGOS(DATA.topDefender.club)}" class="stat-card-img" alt="Logo Club">
`;

const topPriceCard = document.getElementById("topPrice");
topPriceCard.innerHTML = `
    ${DATA.topPrice.name} (${DATA.topPrice.price})
    <img src="${CLUB_LOGOS(DATA.topPrice.club)}" class="stat-card-img" alt="Logo Club">
`;

const topClubCard = document.getElementById("topClub");
topClubCard.innerHTML = `
    ${DATA.topClub.name} (${DATA.topClub.titles})
    <img src="${CLUB_LOGOS(DATA.topClub.name)}" class="stat-card-img" alt="Logo Club">
`;
