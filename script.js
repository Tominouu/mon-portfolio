
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
    // 1. On sélectionne les éléments
    const triggers = document.querySelectorAll('.item-video'); // Tes images cliquables
    const modal = document.getElementById('video-modal');      // La fenêtre noire
    const iframe = document.getElementById('lecteur-youtube'); // Le lecteur YouTube
    const closeBtn = document.querySelector('.close-btn');     // La croix

    // 2. Quand on clique sur une image
    triggers.forEach(item => {
        item.addEventListener('click', function() {
            // On récupère l'ID que tu as mis dans le HTML (ex: cdPgFZ63LjA)
            const youtubeId = this.getAttribute('data-youtube-id');
            
            if (youtubeId) {
                // On crée l'adresse YouTube Embed
                const url = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&showinfo=0&modestbranding=1`;
                
                // On l'injecte dans l'iframe
                iframe.src = url;
                
                // On affiche la modale
                modal.classList.add('active');
            }
        });
    });

    // 3. Fonction pour fermer (coupe le son)
    function closeModal() {
        modal.classList.remove('active');
        iframe.src = ""; // Important : vide la source pour arrêter la musique
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

