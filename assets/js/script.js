document.addEventListener("DOMContentLoaded", () => {
    const balloonContainer = document.querySelector(".balloons");
    const message = "Happy Birthday";
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];

    // Entferne vorhandene Ballons (falls Seite schnell neu geladen wird)
    balloonContainer.innerHTML = "";

    for (let i = 0; i < message.length; i++) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.setProperty("--balloon-color", colors[i % colors.length]);
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDelay = Math.random() * 0.5 + "s"; // Zufälliger Start
        balloon.textContent = message[i];
        balloonContainer.appendChild(balloon);

        // Entferne Ballon nach Ende der Animation (optional)
        balloon.addEventListener("animationend", () => {
            balloon.remove();
        });
    }
});
