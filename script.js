document.addEventListener("DOMContentLoaded", function () {
    // Gestion du formulaire de contact
    const contactForm = document.querySelector("#contact form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche l'envoi réel du formulaire

        // Création du message de confirmation
        let successMessage = document.createElement("p");
        successMessage.textContent = "✅ Message envoyé avec succès !";
        successMessage.style.color = "green";
        successMessage.style.fontWeight = "bold";
        successMessage.style.marginTop = "10px";

        // Vérifier si un message est déjà affiché, pour éviter les doublons
        let existingMessage = contactForm.querySelector(".success-message");
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Ajouter une classe pour identifier le message
        successMessage.classList.add("success-message");
        
        // Insérer le message après le bouton
        contactForm.appendChild(successMessage);

        // Réinitialiser le formulaire après 2 secondes
        setTimeout(() => {
            contactForm.reset();
            successMessage.remove();
        }, 2000);
    });

    // Animation du bouton
    const button = document.querySelector(".btn");

    button.addEventListener("mouseover", function() {
        button.style.transform = "scale(1.1)";
    });

    button.addEventListener("mouseleave", function() {
        button.style.transform = "scale(1)";
    });

    // Animation des barres de progression
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
            bar.style.transition = "width 2s";
            bar.style.width = width;
        }, 500);
    });

    // ANIMATION TEXTE (Fade-in + Effet Machine à écrire)
    const heroText = document.querySelector(".hero h1");
    const text = heroText.textContent; // Récupérer le texte original
    heroText.textContent = ""; // Vider le texte pour l'effet machine à écrire

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            heroText.textContent += text[i];
            i++;
            setTimeout(typeWriter, 50); // Vitesse de frappe
        } else {
            heroText.style.opacity = "1"; // S'assurer que le texte est bien visible
        }
    }

    // Appliquer l'effet fade-in et démarrer l'effet machine à écrire
    heroText.style.opacity = "0"; // Commencer invisible
    heroText.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => {
        heroText.style.opacity = "1"; // Apparition progressive
        typeWriter(); // Démarrage de l'effet machine à écrire
    }, 500);
});