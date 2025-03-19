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
        fetch("https://srvrllss.gamerjoiner.workers.dev/", {  // Replace with your Cloudflare Worker URL
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ event_type: "install-roblox" })  // Send data to worker
        })
        .then(response => response.text())  // Cloudflare Worker will return a message
        .then(data => {
            alert(data);  // Show the response message from Cloudflare Worker
        })
        .catch(error => {
            console.error("Error triggering Cloudflare Worker:", error);
            alert("Error triggering installation. Check console for details.");
    });
});
