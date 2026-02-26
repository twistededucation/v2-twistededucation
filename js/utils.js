// ➕ CHANGE THIS NUMBER WHEN YOU WANT TO GIVE EVERYONE +1

const BOOKMARKS = [
  { name: "games", icon: "https://global.freetls.fastly.net/stuff/icons/calc.svg", url: "/math/math.html" },
  { name: "Chat", icon: "https://cdn.jsdelivr.net/gh/nevapaid/twisted-assets/chat3.png", url: "/public/chat.html" },
  { name: "Settings", icon: "https://global.freetls.fastly.net/stuff/icons/settings.png", url: "/public/settings.html" },
  { name: "Suggestions", icon: "https://frogiesarcade.win/stuff/icons/plus-solid.svg", url: "/public/suggestion.html" },
  { name: "Search", icon: "https://i.ibb.co/GzpSvz9/433-4333068-website-icon-png-white-internet-transparent-png-removebg-preview.png", url: "/js/calculas.html" },
  { name: "Privacy", icon: "https://cdn.jsdelivr.net/gh/nevapaid/twisted-assets/mainpri.png", url: "/dmca/privacy.html" },
  { name: "Terms", icon: "https://cdn.jsdelivr.net/gh/nevapaid/twisted-assets/termsservice.png", url: "/dmca/tos.html" },
  { name: "Discord", icon: "https://cdn.jsdelivr.net/gh/nevapaid/twisted-assets/discordmain.png", url: "https://discord.gg/rKuch4azCU" },
];

const USERNAME_BONUS_VERSION = 2;
const DEFAULT_USERNAME_CHANGES = 4;

const TAKEN_USERNAMES = [
  'sunibuni', 'mcthug', 'normi', 'enzo',
  'asthma', 'yoshi', 'zoinkers1',
  'vortexfx', 'sigmatuffmangos101', 'viper'
];

// 🔥 Run once on every page load
applyUsernameBonus();
enforceUsername();

function applyUsernameBonus() {
  const lastBonus = localStorage.getItem('usernameBonusVersion');

  if (lastBonus !== String(USERNAME_BONUS_VERSION)) {
    let changes = parseInt(localStorage.getItem('usernameChanges'), 10);

    if (isNaN(changes)) {
      changes = DEFAULT_USERNAME_CHANGES;
    }

    localStorage.setItem('usernameChanges', String(changes + 1));
    localStorage.setItem('usernameBonusVersion', String(USERNAME_BONUS_VERSION));
  }
}

// 🚫 FORCE USER TO SETTINGS ONLY IF ON CHAT PAGE
function enforceUsername() {
  const username = localStorage.getItem('username');

  // Only run this logic if we are on chat.html
  if (window.location.pathname.includes("/public/chat.html")) {

    if (!username || username.toLowerCase() === 'guest') {
      window.location.href = "/public/settings.html";
    }

  }
}


// ✅ ONLY ALLOW CHANGING USERNAME FROM SETTINGS PAGE
function saveUsernameFromSettings() {
  const input = document.getElementById('usernameInput');
  const error = document.getElementById('usernameError');

  if (!input) return;

  const username = input.value.trim();
  let remainingChanges = parseInt(localStorage.getItem('usernameChanges'), 10);

  if (isNaN(remainingChanges)) {
    remainingChanges = DEFAULT_USERNAME_CHANGES;
  }

  if (remainingChanges <= 0) {
    error.textContent = "No username changes remaining";
    return;
  }

  if (!username) {
    error.textContent = "Please enter a username";
    return;
  }

  if (username.length < 3) {
    error.textContent = "Username must be at least 3 characters";
    return;
  }

  if (username.toLowerCase() === 'guest') {
    error.textContent = "You must choose a real username";
    return;
  }

  if (TAKEN_USERNAMES.includes(username.toLowerCase())) {
    error.textContent = "Username is taken";
    return;
  }

  localStorage.setItem('username', username);
  localStorage.setItem('usernameChanges', String(remainingChanges - 1));

  alert("Username updated successfully!");
  window.location.href = "index.html"; // go back home
}

// Globals
window.TAKEN_USERNAMES = TAKEN_USERNAMES;
window.saveUsernameFromSettings = saveUsernameFromSettings;
