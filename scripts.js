// Reveal animation on scroll
const sections = document.querySelectorAll('.section');
function revealOnScroll() {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) sec.classList.add('reveal');
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Simple contact form prevention (demo)
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for reaching out!');
});
