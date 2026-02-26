// =================== CONFIG ===================
const CURRENT_VERSION = '1.0.0';
const STORAGE_KEY = 'updatelog_seen_version';

const updates = [
  { title: 'You can now search by GAME NAME!!', description: 'You dont have to search by the id now by the name!' },
  { title: 'ADDED 257+ GAMES', description: 'Added games like five nights at epsteins and way more!' },
  { title: 'Changed our ENTIRE style!', description: 'We have revamped our whole website!' },
  { title: 'UI Improvements', description: 'Refreshed design with modern gray gradient and rounded corners.' },
  { title: 'Fixed ALOT of bugs!', description: 'Our team has been looking for bugs and it seems like we have caught them, have fun!' }
];

// =================== CREATE UPDATE LOG ===================
function createUpdateLog() {
  const seenVersion = localStorage.getItem(STORAGE_KEY);
  if (seenVersion === CURRENT_VERSION) return; // Already seen

  // Overlay
  const overlay = document.createElement('div');
  overlay.className = 'update-overlay';

  // Modal
  const modal = document.createElement('div');
  modal.className = 'update-modal';

  // Header
  modal.innerHTML = `
    <div class="update-header">
      <div class="update-title-section">
        <h2 class="update-title">What's New</h2>
        <span class="update-version">v${CURRENT_VERSION}</span>
      </div>
    </div>
    <div class="update-divider"></div>
    <div class="update-list"></div>
    <button class="update-button">Got it, thanks!</button>
  `;

  // Add updates
  const list = modal.querySelector('.update-list');
  updates.forEach((u, i) => {
    const item = document.createElement('div');
    item.className = 'update-item';
    item.style.animationDelay = `${i * 0.1 + 0.2}s`;
    item.innerHTML = `
      <div class="update-item-content">
        <h3 class="update-item-title">${u.title}</h3>
        <p class="update-item-description">${u.description}</p>
      </div>
    `;
    list.appendChild(item);
  });

  // Button action
  modal.querySelector('.update-button').addEventListener('click', () => {
    overlay.classList.add('closing');
    modal.classList.add('closing');
    setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, CURRENT_VERSION);
      document.body.removeChild(overlay);
    }, 400);
  });

  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}

// Run after page loads
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(createUpdateLog, 300); // small delay for smooth appearance
});
