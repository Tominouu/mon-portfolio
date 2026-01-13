
// Fonction globale pour fermer la vidéo
window.fermerVideo = function() {
    const modal = document.getElementById('video-modal');
    const modalContent = document.querySelector('.modal-content');
    if (modal) {
        modal.classList.remove('open');
        setTimeout(() => { modalContent.innerHTML = ''; }, 300);
    }
};


// ======================================================
// 3. CARROUSEL PHOTO (LOZNIS) - GLOBALE
// ======================================================

// LISTE DE TES PHOTOS (Vérifie bien que les fichiers existent !)
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

// Cette fonction doit être en dehors de tout bloc pour être vue par le HTML onclick="..."
window.changePhoto = function(direction) {
    // Petit log pour vérifier si le clic marche (Ouvre la console F12 pour voir)
    console.log("Clic reçu ! Direction : " + direction);

    currentPhotoIndex += direction;

    // Boucle infinie
    if (currentPhotoIndex >= photosLoznis.length) {
        currentPhotoIndex = 0;
    } else if (currentPhotoIndex < 0) {
        currentPhotoIndex = photosLoznis.length - 1;
    }

    // Mise à jour de l'image
    const mainPhoto = document.getElementById('main-photo');
    if (mainPhoto) {
        mainPhoto.style.opacity = 0; // On cache
        setTimeout(() => {
             mainPhoto.src = photosLoznis[currentPhotoIndex]; // On change
             mainPhoto.style.opacity = 1; // On affiche
        }, 300);
    } else {
        console.error("Erreur : Je ne trouve pas l'image avec l'id 'main-photo'");
    }

<script>
    document.addEventListener('DOMContentLoaded', function() {
        
        // --- PARTIE 1 : GESTION DES ONGLETS (VIDÉO / PHOTO) ---
        window.afficherSection = function(type) {
            const secVideo = document.getElementById('section-video');
            const secPhoto = document.getElementById('section-photo');
            
            // On cache tout
            if(secVideo) secVideo.style.display = 'none';
            if(secPhoto) secPhoto.style.display = 'none';
            
            // On affiche celui demandé
            const sectionAafficher = document.getElementById('section-' + type);
            if(sectionAafficher) sectionAafficher.style.display = 'block';

            // On gère la couleur du bouton actif
            const boutons = document.querySelectorAll('.btn-choix');
            boutons.forEach(btn => btn.classList.remove('actif'));
            if(event && event.target) event.target.classList.add('actif');
        };

        // --- PARTIE 2 : GESTION DU MODAL (VIDÉOS LOCALES) ---
        const modal = document.getElementById('video-modal');
        const lecteur = document.getElementById('lecteur-local');
        const closeBtn = document.querySelector('.close-btn');
        const items = document.querySelectorAll('.item-video');

        // A. QUAND ON CLIQUE SUR UNE IMAGE
        items.forEach(item => {
            item.addEventListener('click', function() {
                // 1. On cherche le fichier vidéo
                const videoSrc = this.getAttribute('data-video-src');
                
                if (videoSrc) {
                    // 2. On met le lien dans le lecteur
                    lecteur.src = videoSrc;
                    
                    // 3. On ajoute la classe 'open' (pour que le CSS l'affiche)
                    modal.classList.add('open');
                    
                    // 4. On lance la lecture
                    lecteur.play();
                } else {
                    console.error("Erreur : Pas de fichier vidéo trouvé !");
                }
            });
        });

        // B. FONCTION POUR FERMER
        function fermerModal() {
            modal.classList.remove('open'); // On enlève la classe 'open'
            lecteur.pause();                // Pause
            lecteur.src = "";               // On vide le lecteur
        }

        // C. LES DÉCLENCHEURS DE FERMETURE
        if (closeBtn) closeBtn.addEventListener('click', fermerModal);

        // Fermer si on clique sur le fond noir
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    fermerModal();
                }
            });
        }
    });



    /* Script pour gérer le clic des boutons Vidéo/Photo */
const boutons = document.querySelectorAll('.btn-glass');

boutons.forEach(btn => {
    btn.addEventListener('click', function() {
        // 1. On éteint TOUS les boutons (on enlève la classe .active)
        boutons.forEach(b => b.classList.remove('active'));
        
        // 2. On allume CELUI qu'on vient de cliquer
        this.classList.add('active');
        
        // (Ici le reste de ton code pour filtrer les images/vidéos...)
    });
});
</script>

