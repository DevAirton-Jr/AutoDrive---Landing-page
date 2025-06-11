document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('header nav span');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.textContent.toLowerCase(); // Assuming text content matches section ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Account for fixed header
          behavior: 'smooth'
        });
      }
    });
  });

  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('header button');
  const mobileNav = document.querySelector('header nav'); // Select the nav element

  if (mobileMenuButton && mobileNav) {
    mobileMenuButton.addEventListener('click', function() {
      mobileNav.classList.toggle('hidden'); // Toggle visibility of the nav
      mobileNav.classList.toggle('flex'); // Ensure it's a flex container when visible
    });
  }

  // "Alugar agora" button functionality (example)
  const rentButtons = document.querySelectorAll('.bg-gold'); // Select all gold buttons
  rentButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert('Redirecionando para a página de aluguel...'); // Replace with actual redirect logic
    });
  });

  // Car detail button functionality (example)
  const carDetailButtons = document.querySelectorAll('#fleet .bg-gold'); // Select car detail buttons
  carDetailButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert('Redirecionando para a página de detalhes do carro...'); // Replace with actual redirect logic
    });
  });

  // "Ver toda a frota" button functionality (example)
  const allCarsButton = document.querySelector('#fleet .border-gold');
  if (allCarsButton) {
    allCarsButton.addEventListener('click', function() {
      alert('Redirecionando para a página com toda a frota...'); // Replace with actual redirect logic
    });
  }

  // Form submission handling (example)
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent default form submission

      // Get form data
      const name = contactForm.querySelector('input[type="text"]').value;
      const email = contactForm.querySelector('input[type="email"]').value;
      const phone = contactForm.querySelector('input[type="tel"]').value;
      const message = contactForm.querySelector('textarea').value;

      // Basic validation (you can add more robust validation)
      if (!name || !email || !phone || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      // Simulate sending the message (replace with actual API call)
      console.log('Enviando mensagem:', { name, email, phone, message });
      alert('Mensagem enviada com sucesso!');

      // Clear the form
      contactForm.reset();
    });
  }

  // Newsletter subscription (example)
  const newsletterForm = document.querySelector('#footer form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;

      if (!email) {
        alert('Por favor, insira seu email.');
        return;
      }

      console.log('Subscribing with email:', email);
      alert('Obrigado por se inscrever na nossa newsletter!');
      newsletterForm.reset();
    });
  }

  // Observe benefits section to add a class when it's in view
  const benefitsSection = document.getElementById('benefits');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        benefitsSection.classList.add('in-view');
      } else {
        benefitsSection.classList.remove('in-view');
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the section is visible
  });

  observer.observe(benefitsSection);

  // Add a class to the header when scrolling down
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Add a class to the footer when it's in view
  const footer = document.getElementById('footer');
  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footer.classList.add('in-view');
      } else {
        footer.classList.remove('in-view');
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the section is visible
  });

  footerObserver.observe(footer);

  // Add a class to the CTA section when it's in view
  const ctaSection = document.getElementById('cta');
  const ctaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ctaSection.classList.add('in-view');
      } else {
        ctaSection.classList.remove('in-view');
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the section is visible
  });

  ctaObserver.observe(ctaSection);

  // Add a class to the testimonials section when it's in view
  const testimonialsSection = document.getElementById('testimonials');
  const testimonialsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        testimonialsSection.classList.add('in-view');
      } else {
        testimonialsSection.classList.remove('in-view');
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the section is visible
  });

  testimonialsObserver.observe(testimonialsSection);

  // Add a class to the fleet section when it's in view
  const fleetSection = document.getElementById('fleet');
  const fleetObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fleetSection.classList.add('in-view');
      } else {
        fleetSection.classList.remove('in-view');
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the section is visible
  });

  fleetObserver.observe(fleetSection);

  // Add a class to the contact section when it's in view
  const contactSection = document.getElementById('contact');
  const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactSection.classList.add('in-view');
      } else {
        contactSection.classList.remove('in-view');
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the section is visible
  });

  contactObserver.observe(contactSection);

  // Add a class to the hero section when it's in view
  const heroSection = document.getElementById('home');
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        heroSection.classList.add('in-view');
      } else {
        heroSection.classList.remove('in-view');
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the section is visible
  });

  heroObserver.observe(heroSection);

  // Add a class to the header section when it's in view
  const headerSection = document.getElementById('header');
  const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        headerSection.classList.add('in-view');
      } else {
        headerSection.classList.remove('in-view');
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the section is visible
  });

  headerObserver.observe(headerSection);

});
