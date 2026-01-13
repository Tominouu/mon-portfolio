
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

       
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item-video');
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('lecteur-youtube');
    const closeBtn = document.querySelector('.close-btn');

    // 1. OUVERTURE DE LA MODALE
    items.forEach(item => {
        item.addEventListener('click', () => {
            const youtubeId = item.getAttribute('data-youtube-id');
            
            // On vérifie qu'il y a bien un ID
            if (youtubeId && youtubeId.length > 5) {
                // L'URL magique qui nettoie l'interface
                // autoplay=1 : lance direct
                // controls=0 : cache les boutons play/pause/son
                // rel=0 : pas de pubs concurrentes à la fin
                // modestbranding=1 : moins de logo YouTube
                const url = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=0&rel=0&modestbranding=1&showinfo=0`;
                
                iframe.src = url;
                
                // On affiche la boîte
                modal.classList.add('active'); 
                modal.style.display = 'flex'; 
            } else {
                console.error("Erreur : ID YouTube manquant ou invalide !");
            }
        });
    });

    // 2. FERMETURE
    function fermerModal() {
        modal.classList.remove('active');
        modal.style.display = 'none';
        iframe.src = ""; // Coupe le son immédiatement
    }

    if(closeBtn) closeBtn.addEventListener('click', fermerModal);

    if(modal) {
        modal.addEventListener('click', (e) => {
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

