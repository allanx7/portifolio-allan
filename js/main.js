const revealElements = document.querySelectorAll(".reveal");

// Anima os elementos quando entram na tela.
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.16,
    }
);

revealElements.forEach((element, index) => {
    const delay = Math.min(index * 0.07, 0.55);
    element.style.transitionDelay = `${delay}s`;
    observer.observe(element);
});

const roleText = document.querySelector(".hero-role");
const roles = [
    "Desenvolvedor Full Stack",
    "Dev Júnior em evolução",
    "Estagiário focado em resultados",
];

let roleIndex = 0;

// Troca o texto principal para dar mais dinamismo ao topo.
setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleText.classList.add("fade-role");

    setTimeout(() => {
        roleText.textContent = roles[roleIndex];
        roleText.classList.remove("fade-role");
    }, 180);
}, 3200);

const cardElements = document.querySelectorAll(".project-card, .skill-card, .certificate-card, .contact-card");

// Inclinação leve dos cards seguindo o cursor.
cardElements.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * -8;
        const rotateY = ((x / rect.width) - 0.5) * 8;

        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});
