document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  const formMessage = document.getElementById('formMessage');
  formMessage.textContent = `¡Gracias, ${nombre}! Tu mensaje ha sido enviado.`;

  e.target.reset();
});


function toggleMenu() {
  const menu = document.querySelector('nav ul.menu');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
}
window.addEventListener("scroll", function() {
  const heroText = document.querySelector('.hero-text');
  const scrollPosition = window.scrollY;

  heroText.style.transform = `translate(-50%, -50%) translateY(${scrollPosition * 0.3}px)`;
});

const clientes = document.querySelectorAll('.cliente');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 }); 

clientes.forEach(cliente => {
    observer.observe(cliente);
});

