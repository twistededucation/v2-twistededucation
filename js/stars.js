// stars.js - Particles.js implementation
(function () {
  const PARTICLES_SCRIPT = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
  const CONTAINER_ID = 'particles-js';

  // Initialize particles
  function initStars() {
    console.log('Initializing particles.js stars...');

    if (typeof particlesJS === 'undefined') {
      console.warn('particles.js not loaded. Loading dynamically...');
      loadScript(PARTICLES_SCRIPT, createParticles);
    } else {
      createParticles();
    }
  }

  // Dynamically load external script
  function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = callback;
    script.onerror = () => console.error(`Failed to load script: ${src}`);
    document.head.appendChild(script);
  }

  // Create the particles container if it doesn't exist
  function ensureContainer() {
    let container = document.getElementById(CONTAINER_ID);
    if (!container) {
      container = document.createElement('div');
      container.id = CONTAINER_ID;
      container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
      `;
      document.body.insertBefore(container, document.body.firstChild);
    }
    return container;
  }

  // Create particles with configuration
  function createParticles() {
    ensureContainer();

    particlesJS(CONTAINER_ID, {
      particles: {
        number: { value: 9, density: { enable: true, value_area: 1200 } },
        color: { value: '#fff' },
        shape: { type: 'circle', stroke: { width: 0, color: '#000' } },
        opacity: { value: 0.5, random: true, anim: { enable: false } },
        size: { value: 10, random: true, anim: { enable: false } },
        line_linked: { enable: false },
        move: {
          enable: true,
          speed: 6,
          direction: 'bottom',
          random: false,
          straight: false,
          out_mode: 'out',
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'bubble' },
          onclick: { enable: true, mode: 'repulse' },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 0.5 } },
          bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });

    console.log('Particles.js initialized successfully');
  }

  // Handle window resize
  function handleResize() {
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom.forEach(p => p.pJS.fn.vendors.destroypJS());
      window.pJSDom = [];
      createParticles();
    }
  }

  // Debounce resize events
  function debounce(fn, delay) {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    };
  }

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', () => setTimeout(initStars, 100));
  window.addEventListener('load', () => setTimeout(initStars, 300));
  window.addEventListener('resize', debounce(handleResize, 250));

  // Export functions for manual use
  window.initStars = initStars;
  window.createParticles = createParticles;
  window.handleResize = handleResize;
})();
