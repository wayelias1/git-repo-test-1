document.addEventListener("DOMContentLoaded", function () {
    let slider = document.querySelector(".skills-grid");
    let siguiente = document.getElementById("btn-der");
    let anterior = document.getElementById("btn-izq");

    let sections = slider.querySelectorAll(".skill-card");
    let position = 0;
    let slideWidth = 400 + 32; // Tamaño de la tarjeta + gap
    let isMoving = false; 
    let movementTimeout; // Nuevo timeout para controlar el spam

    function moverD() {
        if (isMoving) return; 
        isMoving = true;

        position -= slideWidth;
        slider.style.transition = "transform 0.7s ease-in-out";
        slider.style.transform = `translateX(${position}px)`;

        movementTimeout = setTimeout(function () {
            let firstSection = slider.querySelector(".skill-card");
            slider.appendChild(firstSection);
            slider.style.transition = "none";
            position += slideWidth;
            slider.style.transform = `translateX(${position}px)`;

            isMoving = false; // Solo se desbloquea después de completar la animación
            clearTimeout(movementTimeout);
        }, 700);
    }

    function moverI() {
        if (isMoving) return;
        isMoving = true;

        position += slideWidth;
        slider.style.transition = "transform 0.7s ease-in-out";
        slider.style.transform = `translateX(${position}px)`;

        movementTimeout = setTimeout(function () {
            let sections = slider.querySelectorAll(".skill-card");
            slider.insertBefore(sections[sections.length - 1], sections[0]);
            slider.style.transition = "none";
            position -= slideWidth;
            slider.style.transform = `translateX(${position}px)`;

            isMoving = false; 
            clearTimeout(movementTimeout);
        }, 700);
    }

    siguiente.addEventListener("click", moverD);
    anterior.addEventListener("click", moverI);
});

