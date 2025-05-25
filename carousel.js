document.addEventListener("DOMContentLoaded", function () {
    let slider = document.querySelector(".skills-grid");
    let siguiente = document.getElementById("btn-der");
    let anterior = document.getElementById("btn-izq");

    let sections = slider.querySelectorAll(".skill-card");
    let position = 0;
    let slideWidth = 400 + 32; // Tamaño de la tarjeta + gap
    let isMoving = false; // Variable para evitar spam

    function moverD() {
        if (isMoving) return; // Si ya está en movimiento, no hacer nada
        isMoving = true; // Bloquear nuevos clics

        position -= slideWidth;
        slider.style.transition = "transform 0.7s ease-in-out";
        slider.style.transform = `translateX(${position}px)`;

        setTimeout(function () {
            let firstSection = slider.querySelector(".skill-card");
            slider.appendChild(firstSection);
            slider.style.transition = "none";
            position += slideWidth;
            slider.style.transform = `translateX(${position}px)`;
            isMoving = false; // Desbloquear clics después de la animación
        }, 700);
    }

    function moverI() {
        if (isMoving) return; // Evita que se dispare varias veces
        isMoving = true;

        position += slideWidth;
        slider.style.transition = "transform 0.7s ease-in-out";
        slider.style.transform = `translateX(${position}px)`;

        setTimeout(function () {
            let sections = slider.querySelectorAll(".skill-card");
            slider.insertBefore(sections[sections.length - 1], sections[0]);
            slider.style.transition = "none";
            position -= slideWidth;
            slider.style.transform = `translateX(${position}px)`;
            isMoving = false;
        }, 700);
    }

    siguiente.addEventListener("click", moverD);
    anterior.addEventListener("click", moverI);
});
