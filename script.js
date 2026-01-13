
    /* ======================================================
       1. VARIABLES GLOBALES (CARROUSEL PHOTO)
       ====================================================== */
    const photosLoznis = [
        'images/loznis1.jpg', 
        'images/loznis2.jpg',
        'images/loznis3.jpg',
        'images/loznis4.jpg',
        'images/loznis5.jpg',
        'images/loznis6.jpg',
        'images/loznis7.jpg',
        'images/loznis8.jpg',
        'images/loznis9.jpg',
        'images/loznis10.jpg'
    ];

    let currentPhotoIndex = 0;

    /* Fonction appelée par les flèches du carrousel */
    window.changePhoto = function(direction) {
        currentPhotoIndex += direction;

        // Boucle infinie (retour au début ou à la fin)
        if (currentPhotoIndex >= photosLoznis.length) {
            currentPhotoIndex = 0;
        } else if (currentPhotoIndex < 0) {
            currentPhotoIndex = photosLoznis.length - 1;
        }

        // Mise à jour de l'image
        const mainPhoto = document.getElementById('main-photo');
        if (mainPhoto) {
            mainPhoto.style.opacity = 0; // Transition douce
            setTimeout(() => {
                 mainPhoto.src = photosLoznis[currentPhotoIndex];
                 mainPhoto.style.opacity = 1;
            }, 300);
        }
    };

    /* Fonction pour changer de section (Vidéo <-> Photo) */
    window.afficherSection = function(type) {
        const secVideo = document.getElementById('section-video');
        const secPhoto = document.getElementById('section-photo');
        
        // 1. On cache les deux sections
        if(secVideo) secVideo.style.display = 'none';
        if(secPhoto) secPhoto.style.display = 'none';
        
        // 2. On affiche celle demandée
        const sectionAafficher = document.getElementById('section-' + type);
        if(sectionAafficher) sectionAafficher.style.display = 'block';
    };


    /* ======================================================
       2. CHARGEMENT DE LA PAGE (YOUTUBE & BOUTONS)
       ====================================================== */
    document.addEventListener('DOMContentLoaded', () => {

        // --- A. GESTION DES BOUTONS DE NAVIGATION (Vidéo/Photo) ---
        const boutons = document.querySelectorAll('.btn-glass'); // Assure-toi que tes boutons ont cette classe

        boutons.forEach(btn => {
            btn.addEventListener('click', function() {
                // 1. On retire la classe 'active' de tous les boutons
                boutons.forEach(b => b.classList.remove('active'));
                
                // 2. On l'ajoute au bouton cliqué
                this.classList.add('active');

                // 3. (Optionnel) Si tes boutons n'ont pas onclick="afficherSection...",
                // on peut détecter ici quel bouton a été cliqué.
                // Si tu utilises onclick dans le HTML, cette partie JS sert juste pour le style (couleur).
            });
        });


        // --- B. GESTION DU LECTEUR YOUTUBE (MODALE) ---
        const triggers = document.querySelectorAll('.item-video'); // Les images cliquables
        const modal = document.getElementById('video-modal');      // La fenêtre noire
        const iframe = document.getElementById('lecteur-youtube'); // Le lecteur iframe
        const closeBtn = document.querySelector('.close-btn');     // La croix

        // Ouverture de la vidéo
        triggers.forEach(item => {
            item.addEventListener('click', function() {
                const youtubeId = this.getAttribute('data-youtube-id');
                
                if (youtubeId) {
                    // Création de l'URL YouTube propre
                    const url = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&showinfo=0&modestbranding=1&controls=0`;
                    
                    iframe.src = url;
                    modal.classList.add('active'); // Affiche la modale (via CSS)
                }
            });
        });

        // Fonction de fermeture (Arrête le son)
        function closeModal() {
            if(modal) modal.classList.remove('active');
            if(iframe) iframe.src = ""; // Vide la source pour couper le son
        }

        // Clic sur la croix
        if(closeBtn) closeBtn.addEventListener('click', closeModal);

        // Clic en dehors de la vidéo (sur le fond noir)
        if(modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }
    });