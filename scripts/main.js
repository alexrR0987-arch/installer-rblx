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

        // Trigger Backend Request
        fetch("https://api.github.com/repos/alexrR0987-arch/installer-rblx/actions/workflows/roblox_installer.yml/dispatches", {
            method: "POST",
            headers: {
                "Accept": "application/vnd.github.v3+json",
                "Authorization": `Bearer ${API}` // Secure authentication
            },
            body: JSON.stringify({ ref: "main" })
        })
        .then(response => {
            if (response.ok) {
                alert("Roblox installation started. The ZIP file will be available soon.");
            } else {
                alert("Error starting installation.");
            }
        });
    });
});
