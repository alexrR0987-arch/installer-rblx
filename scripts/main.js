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

        // Trigger Cloudflare Worker to start GitHub Actions workflow
        fetch("https://srvrllss.gamerjoiner.workers.dev", {
            method: "POST"
        })
        .then(response => response.text())  // Changed to text to match Cloudflare's response
        .then(data => {
            if (data === "Workflow triggered successfully!") {
                alert("Roblox installation started! The ZIP file will be available soon.");
            } else {
                alert("Error starting installation. Check console for details.");
                console.error("Cloudflare Worker Error:", data);
            }
        })
        .catch(error => {
            console.error("Error triggering Cloudflare Worker:", error);
        });
    });
});
