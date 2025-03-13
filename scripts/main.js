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

        // Trigger GitHub Actions Securely
        fetch("https://api.github.com/repos/alexrR0987-arch/installer-rblx/dispatches", {
            method: "POST",
            headers: {
                "Accept": "application/vnd.github.v3+json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ event_type: "install-roblox" })
        })
        .then(response => {
            if (response.ok) {
                alert("Roblox installation started! The ZIP file will be available soon.");
            } else {
                alert("Error starting installation. Check console for details.");
                response.json().then(data => console.error("GitHub API Error:", data));
            }
        })
        .catch(error => console.error("Error Triggering Workflow:", error));
    });
});
