// JS for animated beams, navigation effects and scroll reveal

document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Setup IntersectionObserver for reveal animations
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  // Elements to reveal
  const revealEls = document.querySelectorAll(
    '.card, .section h2, .startup-desc, .contact-buttons, .hero-content'
  );
  revealEls.forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
  });

  // Canvas beams animation
  const canvas = document.getElementById('beams');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let beams = [];

    const initBeams = () => {
      const dpr = window.devicePixelRatio || 1;
      // Reset transform before resizing
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      beams = [];
      const count = Math.floor(window.innerWidth / 50) + 10;
      for (let i = 0; i < count; i++) {
        beams.push({
          x: Math.random() * window.innerWidth,
          width: Math.random() * 3 + 1,
          height:
            Math.random() * window.innerHeight * 0.5 + window.innerHeight * 0.3,
          y: Math.random() * window.innerHeight - window.innerHeight,
          speed: Math.random() * 0.5 + 0.2,
          opacity: Math.random() * 0.4 + 0.3,
        });
      }
    };

    const animateBeams = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      beams.forEach((b) => {
        const grad = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.height);
        grad.addColorStop(0, 'rgba(127,90,240,0)');
        grad.addColorStop(0.5, `rgba(127,90,240,${b.opacity})`);
        grad.addColorStop(1, 'rgba(127,90,240,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(b.x, b.y, b.width, b.height);
        b.y += b.speed;
        if (b.y > window.innerHeight) {
          b.y = -b.height;
          b.x = Math.random() * window.innerWidth;
        }
      });
      requestAnimationFrame(animateBeams);
    };

    // Initialize and start animation
    initBeams();
    animateBeams();
    window.addEventListener('resize', initBeams);
  }
});