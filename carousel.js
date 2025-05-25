document.addEventListener("DOMContentLoaded", function () {
    let slider = document.querySelector(".skills-grid");
    let siguiente = document.getElementById("btn-der");
    let anterior = document.getElementById("btn-izq");
    let toggleButton = document.getElementById("toggle-slider");
    let playIcon = document.getElementById("play-icon");
    let pauseIcon = document.getElementById("pause-icon");

    let sections = slider.querySelectorAll(".skill-card");
    let position = 0;
    let slideWidth = 400 + 32; // 400px + 2rem
    let interval = null;
    let isRunning = false;

    function moverD() {
        position -= slideWidth;
        slider.style.transition = "transform 0.7s ease-in-out";
        slider.style.transform = `translateX(${position}px)`;

        setTimeout(function () {
            let firstSection = slider.querySelector(".skill-card");
            slider.appendChild(firstSection);
            slider.style.transition = "none";
            position += slideWidth;
            slider.style.transform = `translateX(${position}px)`;
        }, 700);
    }

    siguiente.addEventListener("click", moverD);
    anterior.addEventListener("click", function () {
        position += slideWidth;
        slider.style.transition = "transform 0.7s ease-in-out";
        slider.style.transform = `translateX(${position}px)`;

        setTimeout(function () {
            let sections = slider.querySelectorAll(".skill-card");
            slider.insertBefore(sections[sections.length - 1], sections[0]);
            slider.style.transition = "none";
            position -= slideWidth;
            slider.style.transform = `translateX(${position}px)`;
        }, 700);
    });

    // Activar/desactivar el slider infinito
    toggleButton.addEventListener("click", function () {
        if (isRunning) {
            clearInterval(interval);
            isRunning = false;
            playIcon.style.display = "inline"; // Mostrar icono de play
            pauseIcon.style.display = "none";  // Ocultar icono de pausa
        } else {
            interval = setInterval(moverD, 2000); // Mueve cada 2 segundos
            isRunning = true;
            playIcon.style.display = "none";  // Ocultar icono de play
            pauseIcon.style.display = "inline"; // Mostrar icono de pausa
			pauseIcon.style.fontWeight = "bold"; // Aumenta grosor del icono

        }
    });
});
