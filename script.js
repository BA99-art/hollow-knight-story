/* LOADER */

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

    }, 700);

});



/* SCROLL REVEAL */

const revealItems =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealItems.forEach((element) => {

    observer.observe(element);

});



/* PARTICLES */

const particleBox =
    document.querySelector(".particles");


for (let i = 0; i < 70; i++) {

    const particle =
        document.createElement("span");

    particle.className =
        "particle";


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.animationDuration =
        (8 + Math.random() * 15) + "s";


    particle.style.animationDelay =
        (-Math.random() * 15) + "s";


    particle.style.opacity =
        0.15 + Math.random() * 0.5;


    particleBox.appendChild(particle);

}



/* CINEMATIC MODE */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle(
        "cinematic"
    );


    if (
        document.body.classList.contains(
            "cinematic"
        )
    ) {

        themeBtn.textContent = "◑";

    } else {

        themeBtn.textContent = "◐";

    }

});



/* PARALLAX */

window.addEventListener("scroll", () => {

    const y =
        window.scrollY;


    const art =
        document.querySelector(
            ".hero-art"
        );


    if (
        art &&
        window.innerWidth > 900
    ) {

        art.style.transform =
            `translateY(${y * 0.08}px)`;

    }

});