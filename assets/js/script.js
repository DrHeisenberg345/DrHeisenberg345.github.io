document.addEventListener("DOMContentLoaded", () => {
    const balloonContainer = document.querySelector(".balloons");
    const message = "Happy Birthday";
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];

    for (let i = 0; i < message.length; i++) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.setProperty("--balloon-color", colors[i % colors.length]);
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDelay = Math.random() * 2 + "s";
        balloon.textContent = message[i];
        balloonContainer.appendChild(balloon);
    }
});
