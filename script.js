document.addEventListener('DOMContentLoaded', () => {

    // 1. DÉTECTION MOBILE (Pas de curseur sur téléphone)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) return;

    // 2. CRÉATION DU CURSEUR
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');

    const cursorOutline = document.createElement('div');
    cursorOutline.classList.add('cursor-outline');

    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);

    // 3. LOGIQUE DE MOUVEMENT
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    // Mouvement instantané du point
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    // Mouvement fluide du cercle (Lerp)
    const animateCursor = () => {
        const speed = 0.15; // Vitesse de suivi (plus bas = plus fluide/lent)

        outlineX += (mouseX - outlineX) * speed;
        outlineY += (mouseY - outlineY) * speed;

        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;

        requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // 4. EFFETS AU SURVOL (HOVER)
    const interactiveElements = document.querySelectorAll('a, button, .btn-glass, .item-video, .nav-tab, .card-vlog, .showcase-card, .project-card, .gallery-item, .tool-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hovered');
            cursorDot.classList.add('hovered');
        });

        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hovered');
            cursorDot.classList.remove('hovered');
        });
    });

    // 5. CLIC EFFECT
    window.addEventListener('mousedown', () => {
        cursorOutline.classList.add('clicking');
    });

    window.addEventListener('mouseup', () => {
        cursorOutline.classList.remove('clicking');
    });
});