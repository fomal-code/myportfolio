// Intersection Observer Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // reveal only once
    }
  });
}, {
  threshold: 0.1 // reveal when 10% visible
});

revealElements.forEach(el => observer.observe(el));
// Typewriter effect for hero subtitle
const typewriterText = [
  'FullStack Developer',
  'JavaScript Enthusiast',
  'UI/UX Passionate',
  'Problem Solver',
  'Open Source Contributor'
];
const typewriterElement = document.getElementById('typewriter');

let i = 0, j = 0, currentText = '', isDeleting = false, speed = 120;

function type() {
  if (i >= typewriterText.length) i = 0;

  let fullText = typewriterText[i];

  if (!isDeleting) {
    currentText = fullText.substring(0, j + 1);
    typewriterElement.textContent = currentText;
    j++;
    if (j === fullText.length) {
      isDeleting = true;
      speed = 2000; // pause before deleting
    } else {
      speed = 120;
    }
  } else {
    currentText = fullText.substring(0, j - 1);
    typewriterElement.textContent = currentText;
    j--;
    if (j === 0) {
      isDeleting = false;
      i++;
      speed = 500;
    } else {
      speed = 80;
    }
  }
  setTimeout(type, speed);
}

document.addEventListener('DOMContentLoaded', () => {
  if(typewriterElement) type();
});
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

