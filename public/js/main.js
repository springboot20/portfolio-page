window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('nav-bg', window.scrollY > 0);
});

const openMenu = (toggleIcon, closeIcon, menuId) => {
  const openBtn = document.querySelector(`#${toggleIcon}`);
  const navMenu = document.querySelector(`#${menuId}`);
  const closeBtn = document.querySelector(`#${closeIcon}`);

  if (openBtn && navMenu) {
    openBtn.addEventListener('click', () => {
      navMenu.classList.add('translate-x-0');
      navMenu.classList.remove('translate-x-full');

      openBtn.classList.replace('inline-flex', 'hidden');
      closeBtn.classList.replace('hidden', 'inline-flex');
    });
  }
};
openMenu('toggle-btn', 'close-btn', 'mobile-menu');

const closeMenu = (closeIcon, toggleIcon, menuId) => {
  const closeBtn = document.querySelector(`#${closeIcon}`);
  const navMenu = document.querySelector(`#${menuId}`);
  const openBtn = document.querySelector(`#${toggleIcon}`);

  closeBtn.addEventListener('click', () => {
    navMenu.classList.add('translate-x-full');
    navMenu.classList.remove('translate-x-0');

    closeBtn.classList.replace('inline-flex', 'hidden');
    openBtn.classList.replace('hidden', 'inline-flex');
  });
};
closeMenu('close-btn', 'toggle-btn', 'mobile-menu');

const navLink = Array.from(document.querySelectorAll('#nav-list li a'));

console.log(navLink);

navLink.forEach((link) => {
  link.addEventListener('click', scroll);
});

function scroll(e) {
  e.preventDefault();

  const href = this.getAttribute('href');
  document.querySelector(href).scrollIntoView({
    behaviour: 'smooth',
  });
}

const navLinks = document.querySelectorAll('#nav-list li a');
console.log(navLinks);

function linkAction() {
  navLinks.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');

  const navMenu = document.querySelector(`#nav-list`);
  navMenu.classList.remove('translate-x-0');
}
navLinks.forEach((m) => m.addEventListener('click', linkAction));

const form = document.getElementById('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const inputs = Array.from(form.querySelectorAll('div input'));
  const textArea = form.querySelector('div textarea');

  const formData = new FormData();

  for (let index of inputs) {
    formData.append(inputs[index].getAttribute('name'), inputs[index].value);
  }

  formData.append(textArea.getAttribute('name'), textArea.value);
  await submitFormData(formData);

  console.log(formData);

  return formData;
});

async function submitFormData(inputData) {
  try {
    const response = await fetch('http://localhost:4000/api/v1/contact-me', {
      headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify(inputData),
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * SCROLL REVEAL IMPLEMENTATION
 */

const socialIcons = Array.from(document.querySelectorAll('#developer-social-icons a'));

const scrollReveal = ScrollReveal({
  origin: 'top',
  duration: 2000,
  distance: '80px',
  reset: true,
  opacity: 0.7,
});

/**
 * SCROLL REVEAL FOR HERO SECTION
 */

scrollReveal.reveal('#developer-greeting', {});
scrollReveal.reveal('#developer-name', { delay: 250 });
scrollReveal.reveal('#developer-description', { delay: 300 });
scrollReveal.reveal(socialIcons, { delay: 350 });
scrollReveal.reveal('#developer-img', { delay: 400 });

/**
 * SCROLL REVEAL FOR SERVICE SECTION
 */

scrollReveal.reveal('#developer-service-title', {});
scrollReveal.reveal('#developer-service-info', { delay: 250 });
scrollReveal.reveal('#developer-service-card', { interval: 300 });

/**
 * SCROLL REVEAL FOR SERVICE SECTION
 */

class TypeWriter {
  constructor() {}
}
