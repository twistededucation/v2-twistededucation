const navbar = document.getElementById('floating-navbar');
const toggleBtn = document.getElementById('navbar-toggle');

let mouseNearTop = false;

document.addEventListener('mousemove', (e) => {
  if (e.clientY < 40) { // hover near top
    mouseNearTop = true;
    navbar.classList.add('active');        // fade in + slide down
    toggleBtn.classList.add('hidden');     // fade out
  } else if (mouseNearTop) {
    mouseNearTop = false;
    navbar.classList.remove('active');     // fade out + slide up
    toggleBtn.classList.remove('hidden');  // fade in
  }
});
