// Script placeholder - add interactivity if needed
console.log("Script loaded.");

document.addEventListener("scroll", () => {
  const heroSection = document.querySelector(".hero");
  const scrollPosition = window.scrollY; // Position actuelle du défilement
  const windowHeight = window.innerHeight; // Hauteur visible de la fenêtre
  const maxFadeDistance = windowHeight; // Distance maximale où le fade est complet

  // Calcule une opacité proportionnelle à la position de défilement
  let opacity = 1 - scrollPosition / maxFadeDistance;
  if (opacity < 0) opacity = 0; // Limite inférieure
  if (opacity > 1) opacity = 1; // Limite supérieure

  // Applique l'opacité à l'élément
  heroSection.style.backgroundColor = `rgba(0, 0, 0, ${1 - opacity})`;
  heroSection.style.backgroundBlendMode = opacity < 1 ? "darken" : "normal";
});

document.addEventListener("DOMContentLoaded", () => {
  const anemone = document.querySelector("#anemone");

  if (anemone) {
    // Initialisez l'image en mode "fade-out"
    anemone.classList.add("fade-out");

    // Créez un IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anemone.classList.add("fade-in");
            anemone.classList.remove("fade-out");
          } else {
            anemone.classList.add("fade-out");
            anemone.classList.remove("fade-in");
          }
        });
      },
      {
        root: null, // Par défaut, la fenêtre visible
        rootMargin: "-200px 0px -200px 0px", // Ajuste les marges pour activer plus tôt
        threshold: 0.2, // Déclenche à 20% de visibilité
      }
    );

    // Observez l'image de l'anémone
    observer.observe(anemone);
  } else {
    console.error("L'élément #anemone est introuvable dans le DOM.");
  }
});


  document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector("#about-me");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            target.classList.add("active");
          } else {
            target.classList.remove("active");
          }
        });
      },
      { threshold: 0.5 } // Active l'animation lorsque 50% de la section est visible
    );

    observer.observe(target);
  });


 
    // Attendre que la page soit complètement chargée
    window.addEventListener('load', function () {
        const preloader = document.getElementById('preloader');
        const mainContent = document.getElementById('main-content');

        // Ajouter une transition pour une sortie fluide
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';

        // Supprimer le préchargeur après la transition
        setTimeout(() => {
            preloader.style.display = 'none';
            mainContent.style.display = 'block'; // Afficher le contenu principal
        }, 500); // Correspond au temps de la transition
    });


    