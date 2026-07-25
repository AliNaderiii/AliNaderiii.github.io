const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('ali-theme');
if (savedTheme) root.dataset.theme = savedTheme;
function updateThemeIcon() { themeToggle.textContent = root.dataset.theme === 'light' ? '☾' : '☼'; }
updateThemeIcon();
themeToggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('ali-theme', root.dataset.theme);
  updateThemeIcon();
});

const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById('progress').style.width = `${(window.scrollY / scrollable) * 100}%`;
}, { passive: true });

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = 'Thanks — your message is ready to be connected.';
  event.target.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
