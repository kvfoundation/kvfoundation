const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

// Lightweight hero carousel: copy and headline change while retaining the supplied photo.
const slides = [
  { title: 'Together for a<br>More <span>Inclusive</span> Tomorrow', subtitle: 'Education. Empowerment. Equal Opportunities.' },
  { title: 'Every Child<br>Deserves a <span>Chance</span>', subtitle: 'Learning today. Leading tomorrow.' },
  { title: 'Stronger Together<br>For a <span>Better</span> Tomorrow', subtitle: 'Building communities where everyone belongs.' },
  { title: 'Empowering Lives<br>Creating <span>Possibilities</span>', subtitle: 'Opportunity, dignity and support for all.' },
  { title: 'Inclusion Begins<br>With <span>All of Us</span>', subtitle: 'A kinder world is a world for everyone.' },
  { title: 'Small Steps<br>Can Create <span>Big Change</span>', subtitle: 'Join us in making a lasting difference.' }
];
let currentSlide = 0;
const title = document.getElementById("hero-title");
const subtitle = document.getElementById("hero-subtitle");
const dots = [...document.querySelectorAll(".dot")];

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  title.innerHTML = slides[currentSlide].title;
  subtitle.textContent = slides[currentSlide].subtitle;
  dots.forEach((dot, i) => dot.classList.toggle("active", i === currentSlide));
}
const prevButton = document.querySelector(".hero-arrow.prev");

if (prevButton) {
    prevButton.addEventListener("click", () => showSlide(currentSlide - 1));
}
document.querySelector(".hero-arrow.next").addEventListener("click", () => showSlide(currentSlide + 1));
dots.forEach((dot, i) => dot.addEventListener("click", () => showSlide(i)));
