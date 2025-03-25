document.addEventListener("DOMContentLoaded", () => {
    // Create floating particles
    for (let i = 0; i < 100; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        document.getElementById("background-container").appendChild(particle);
        
        let size = Math.random() * 4 + 2;
        let posX = Math.random() * window.innerWidth;
        let posY = Math.random() * window.innerHeight;
        let delay = Math.random() * 5;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.animationDelay = `${delay}s`;
    }

    // Install Button Click Event
    const installBtn = document.getElementById("install-btn");
    installBtn.addEventListener("click", () => {
        // Ripple Effect
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");
        installBtn.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

        // Trigger download directly
        window.location.href = 'https://setup.rbxcdn.com/RobloxPlayerLauncher.exe';
    });
});

