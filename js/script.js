/* =========================
   TYPING ANIMATION
========================= */

const typingElement = document.getElementById("typing");

const words = [
    "Freelancer",
    "Graphic Designer",
    "Web Designer",
    "Digital Marketer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* =========================
   SKILL PROGRESS ANIMATION
========================= */

const progressBars = document.querySelectorAll(".progress-bar");

const progressObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const bar = entry.target;

                bar.style.width =
                    bar.getAttribute("data-width");

            }

        });

    },
    {
        threshold: 0.5
    }
);

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});


/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target =
                    parseInt(counter.getAttribute("data-target"));

                let count = 0;

                const updateCounter = () => {

                    const increment =
                        Math.ceil(target / 50);

                    count += increment;

                    if (count >= target) {

                        counter.textContent = target;

                    } else {

                        counter.textContent = count;

                        setTimeout(updateCounter, 30);
                    }

                };

                updateCounter();

                counterObserver.unobserve(counter);
            }

        });

    },
    {
        threshold: 0.5
    }
);

counters.forEach(counter => {
    counterObserver.observe(counter);
});


/* =========================
   PORTFOLIO FILTER
========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const portfolioItems =
    document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        const filter =
            this.getAttribute("data-filter");

        portfolioItems.forEach(item => {

            const category =
                item.getAttribute("data-category");

            if (filter === "all" || category === filter) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color = "red";

        return;
    }


    formMessage.textContent =
        "Thank you! Your message has been received.";

    formMessage.style.color = "green";

    contactForm.reset();

});


/* =========================
   BACK TO TOP
========================= */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   MOBILE NAVBAR CLOSE
========================= */

const navLinksAll =
    document.querySelectorAll(".navbar-nav .nav-link");

const navbarCollapse =
    document.querySelector(".navbar-collapse");

navLinksAll.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 992) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });
emailjs.sendForm(
    "service_vcbn5pa",
    "template_template_e2l63mo",
    contactForm
)

});