document.addEventListener("DOMContentLoaded", () => {
    const particleContainer = document.getElementById("background-container");

    function createParticle() {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        particleContainer.appendChild(particle);

        let size = Math.random() * 4 + 2;  // Random size
        let posX = Math.random() * window.innerWidth;
        let posY = Math.random() * window.innerHeight;
        let duration = Math.random() * 5 + 3; // Random speed

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.animationDuration = `${duration}s`;

        setTimeout(() => {
            particle.remove();
            createParticle();  // Replace with a new one when it disappears
        }, duration * 1000);
    }

    // Generate multiple particles
    for (let i = 0; i < 100; i++) {
        createParticle();
    }
});
