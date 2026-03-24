document.addEventListener('DOMContentLoaded', () => {

  // ─── Cursor Glow ───────────────────────────
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow && window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    });
  }

  // ─── Navbar Scroll Effect ──────────────────
  const navbar = document.getElementById('navbar');
  const scrollTop = document.getElementById('scrollTop');
  const sections = document.querySelectorAll('.section, .hero');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar background
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll to top button
    if (scrollY > 400) {
      scrollTop.classList.add('visible');
    } else {
      scrollTop.classList.remove('visible');
    }

    // Active nav link
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // Scroll to top
  scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ─── Mobile Navigation ────────────────────
  const navToggle = document.getElementById('navToggle');
  const navLinksContainer = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
  });

  // Close mobile nav on link click
  navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinksContainer.classList.remove('active');
    });
  });

  // ─── Typing Animation ─────────────────────
  const dynamicText = document.getElementById('dynamicText');
  const words = [
    'Web Applications',
    'Open Source Projects',
    'Front-end Interfaces',
    'Full Stack Solutions',
    'Community Tools'
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function typeWriter() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      dynamicText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      dynamicText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 80;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500; // Pause before next word
    }

    setTimeout(typeWriter, typeSpeed);
  }

  typeWriter();

  // ─── Scroll Reveal Animation ──────────────
  const revealElements = document.querySelectorAll(
    '.skill-card, .stat-card, .edu-card, .project-card, .contact-card, .timeline-item, .about-text, .about-stats, .contact-form'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger animation
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // ─── Skill Bar Animation ──────────────────
  const skillFills = document.querySelectorAll('.skill-fill');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillFills.forEach(fill => skillObserver.observe(fill));

  // ─── Counter Animation ────────────────────
  const statNumbers = document.querySelectorAll('.stat-number');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.getAttribute('data-count'));
        let count = 0;
        const duration = 2000;
        const increment = countTo / (duration / 16);

        const updateCount = () => {
          count += increment;
          if (count < countTo) {
            target.textContent = Math.ceil(count);
            requestAnimationFrame(updateCount);
          } else {
            target.textContent = countTo + '+';
          }
        };

        updateCount();
        counterObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(num => counterObserver.observe(num));

  // ─── Contact Form ─────────────────────────
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      shakeButton();
      return;
    }

    // Animate button
    submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;

    try {
      const response = await fetch("https://portfoliobackend-gdqa.onrender.com/api/contact", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message
        })
      });

      if (response.ok) {
        submitBtn.innerHTML = '<span>Message Sent!</span><i class="fas fa-check"></i>';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        contactForm.reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error(error);
      submitBtn.innerHTML = '<span>Error! Try again.</span><i class="fas fa-exclamation-circle"></i>';
      submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    }

    setTimeout(() => {
      submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
      submitBtn.style.background = '';
      submitBtn.disabled = false;
    }, 4000);
  });

  function shakeButton() {
    submitBtn.style.animation = 'shake 0.5s ease';
    setTimeout(() => {
      submitBtn.style.animation = '';
    }, 500);
  }

  // ─── Smooth scroll for all anchor links ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});

// Shake animation (added via JS since it's a one-off)
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
    20%, 40%, 60%, 80% { transform: translateX(4px); }
  }
`;
document.head.appendChild(style);
