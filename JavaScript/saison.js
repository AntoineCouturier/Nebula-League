// saison.js - Version améliorée avec animations

document.addEventListener('DOMContentLoaded', function() {
    // Gestion des popups par saison
    document.querySelectorAll(".season-card").forEach(card => {
        const btn = card.querySelector(".details-btn");
        const popup = card.querySelector(".popup-bg");
        const close = popup.querySelector(".close-btn");

        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            popup.style.display = "flex";
            
            // Animation d'entrée
            setTimeout(() => {
                popup.querySelector('.popup-box').style.opacity = '1';
                popup.querySelector('.popup-box').style.transform = 'scale(1)';
            }, 10);
        });

        close.addEventListener("click", () => {
            popup.querySelector('.popup-box').style.opacity = '0';
            popup.querySelector('.popup-box').style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                popup.style.display = "none";
            }, 300);
        });

        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.querySelector('.popup-box').style.opacity = '0';
                popup.querySelector('.popup-box').style.transform = 'scale(0.9)';
                
                setTimeout(() => {
                    popup.style.display = "none";
                }, 300);
            }
        });
    });

    // Tri des saisons par date décroissante
    const seasonList = document.querySelector(".season-list");
    const cards = Array.from(document.querySelectorAll(".season-card"));

    cards.sort((a, b) => new Date(b.dataset.start) - new Date(a.dataset.start));

    // Animation d'apparition progressive
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
        
        seasonList.appendChild(card);
    });
    
    // Fermeture avec ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.popup-bg').forEach(popup => {
                if (popup.style.display === 'flex') {
                    popup.querySelector('.popup-box').style.opacity = '0';
                    popup.querySelector('.popup-box').style.transform = 'scale(0.9)';
                    
                    setTimeout(() => {
                        popup.style.display = "none";
                    }, 300);
                }
            });
        }
    });
});