// =============================
// Smooth Scrolling
// =============================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        } else {
            window.location.hash = targetId;
        }
    });
});

// =============================
// Active Navigation Link
// =============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
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

// =============================
// Navbar Shadow
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
    }

});

// =============================
// Fade In Animation
// =============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");
    observer.observe(section);

});

// =============================
// Typing Effect
// =============================

const roles = [
    "Full Stack Developer",
    "Java Developer",
    "AI Enthusiast",
    "Data Analytics Learner"
];

let roleIndex = 0;
let charIndex = 0;

const roleElement = document.querySelector(".hero-content h2");

function typeRole() {

    if (charIndex < roles[roleIndex].length) {

        roleElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeRole, 100);

    } else {

        setTimeout(eraseRole, 1500);

    }

}

function eraseRole() {

    if (charIndex > 0) {

        roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseRole, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeRole, 300);

    }

}

window.onload = () => {

    roleElement.textContent = "";

    typeRole();

};

// =============================
// Scroll To Top Button
// =============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "45px";
topBtn.style.height = "45px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#2563eb";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// =============================
// Copy Email Button
// =============================

const copyBtn = document.getElementById('copyEmail');

if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        const email = 'devadharshiniikannan908@gmail.com';

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(email).then(() => {
                const original = copyBtn.textContent;
                copyBtn.textContent = 'Copied';
                setTimeout(() => copyBtn.textContent = original, 2000);
            }).catch(() => {
                alert('Email copied: ' + email);
            });
        } else {
            const textarea = document.createElement('textarea');
            textarea.value = email;
            textarea.style.position = 'fixed';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                const original = copyBtn.textContent;
                copyBtn.textContent = 'Copied';
                setTimeout(() => copyBtn.textContent = original, 2000);
            } catch (err) {
                alert('Copy failed. Email: ' + email);
            }
            document.body.removeChild(textarea);
        }
    });
}