document.addEventListener("DOMContentLoaded", () => {

    const PLAYERS = [
        /* Bastard Munchen */
        { name: "Dylan", club: "bastard", folder: "bm", clubName: "Bastard Munchen", position: "RW", value: 0, avatar: "Joueurs/images-joueurs/dylan.jpeg" },
        { name: "Antoine", club: "bastard", folder: "bm", clubName: "Bastard Munchen", position: "CM", value: 0, avatar: "Joueurs/images-joueurs/anto.png" },
        { name: "Alessio", club: "bastard", folder: "bm", clubName: "Bastard Munchen", position: "CF", value: 0, avatar: "Joueurs/images-joueurs/alessio.png" },

        /* PXG */
        { name: "Jason", club: "pxg", folder: "pxg", clubName: "PXG", position: "CF", value: 0, avatar: "Joueurs/images-joueurs/Jason.png" },
        { name: "Enzo", club: "pxg", folder: "pxg", clubName: "PXG", position: "CM", value: 0, avatar: "Joueurs/images-joueurs/enzo.png" },

        /* Manshine */
        { name: "William", club: "manshine", folder: "manshine", clubName: "Manshine City", position: "CF", value: 0, avatar: "Joueurs/images-joueurs/william.png" },
        { name: "Imrane", club: "manshine", folder: "manshine", clubName: "Manshine City", position: "CF", value: 0, avatar: "Joueurs/images-joueurs/imrane.png" },
        { name: "Elijah", club: "manshine", folder: "manshine", clubName: "Manshine City", position: "RW", value: 0, avatar: "Joueurs/images-joueurs/elijah.png" },

        /* Ubers */

        /* Barcha */

        /* Retraite */
        { name: "Matheo", club: "retraite", folder: "retraite", clubName: "Retraite", position: "CM", value: 0, avatar: "Joueurs/images-joueurs/matheo.png" },
        { name: "Theo", club: "retraite", folder: "retraite", clubName: "Retraite", position: "RW", value: 0, avatar: "Joueurs/images-joueurs/theo.png" }
    ];

    const container = document.getElementById("playersContainer");
    const clubFilter = document.getElementById("clubFilter");
    const valueSort = document.getElementById("valueSort");



    function displayPlayers(list) {
    container.innerHTML = "";

    list.forEach(p => {
        const card = document.createElement("a");
        card.classList.add("player-card", p.club);
        card.href = `Joueurs/${p.folder}/${p.name.toLowerCase()}.html`;

        // Formater le prix avec span séparé pour le nombre
        const formattedValue = p.value.toLocaleString();
        const priceHTML = p.value === 0 
            ? `<span class="price-number zero-value">${formattedValue}</span>¥💎`
            : `<span class="price-number">${formattedValue}</span>¥💎`;

        card.innerHTML = `
            <img src="${p.avatar}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>Club: ${p.clubName}</p>
            <p>Position: ${p.position}</p>
            <p>Valeur: ${priceHTML}</p>
        `;

        container.appendChild(card);
    });
}


    function updatePlayers() {

        const selectedClub = clubFilter.value;
        const sortOrder = valueSort.value;

        let result = PLAYERS.filter(p =>
            selectedClub === "all" ? true : p.club === selectedClub
        );

        result.sort((a, b) =>
            sortOrder === "asc"
                ? a.value - b.value
                : b.value - a.value
        );

        displayPlayers(result);
    }

    clubFilter.addEventListener("change", updatePlayers);
    valueSort.addEventListener("change", updatePlayers);

    updatePlayers();
});