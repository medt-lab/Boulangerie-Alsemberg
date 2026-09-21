const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = [...document.querySelectorAll('.nav-link')];
const revealElements = [...document.querySelectorAll('.reveal')];
const occasionLinks = [...document.querySelectorAll('[data-occasion]')];
const occasionSelect = document.querySelector('#occasion');
const quoteForm = document.querySelector('#quoteForm');
const formStatus = document.querySelector('#formStatus');
const eventDate = document.querySelector('#eventDate');

const setMenu = (open) => {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  navMenu.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
};

menuToggle.addEventListener('click', () => {
  setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) setMenu(false);
});

const updateHeader = () => {
  header.classList.toggle('scrolled', window.scrollY > 24);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px' },
);

revealElements.forEach((element) => revealObserver.observe(element));

const sections = [...document.querySelectorAll('main section[id]')];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visibleSection = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleSection) return;

    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${visibleSection.target.id}`;
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  },
  { rootMargin: '-35% 0px -55%', threshold: [0, 0.2, 0.5] },
);

sections.forEach((section) => sectionObserver.observe(section));

occasionLinks.forEach((link) => {
  link.addEventListener('click', () => {
    occasionSelect.value = link.dataset.occasion;
  });
});

const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString()
  .split('T')[0];
eventDate.min = localToday;

quoteForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!quoteForm.checkValidity()) {
    quoteForm.reportValidity();
    return;
  }

  const formData = new FormData(quoteForm);
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const occasion = formData.get('occasion');
  const eventDate = formData.get('eventDate');
  const guests = formData.get('guests');
  const message = formData.get('message');

  const whatsappMessage = `Bonjour Jad'OR 👋

*Nouvelle demande de devis*

👤 *Contact* : ${firstName} ${lastName}
📧 *Email* : ${email}
📞 *Téléphone* : ${phone}

🎂 *Occasion* : ${occasion}
📅 *Date* : ${eventDate}
👥 *Invités* : ${guests}

💬 *Message* :
${message}

Merci !`;

  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/32477235396?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');

  const submitButton = quoteForm.querySelector('.form-submit');
  submitButton.disabled = true;
  submitButton.textContent = 'Ouverture de WhatsApp…';
  formStatus.textContent = '';

  window.setTimeout(() => {
    submitButton.disabled = false;
    submitButton.innerHTML = 'Envoyer ma commande sur WhatsApp';
    formStatus.textContent = 'Merci ! Votre demande a été envoyée sur WhatsApp.';
    quoteForm.reset();
  }, 1500);
});

document.querySelector('.footer-year').textContent = new Date().getFullYear();
