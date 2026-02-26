// ================== FIREBASE CONFIG ==================
const firebaseConfig = {
  apiKey: "AIzaSyBRh5F4faUoqx3PRtZnIuq0KneNjS3JujM",
  authDomain: "twisted-c49d0.firebaseapp.com",
  databaseURL: "https://twisted-c49d0-default-rtdb.firebaseio.com",
  projectId: "twisted-c49d0",
  storageBucket: "twisted-c49d0.appspot.com",
  messagingSenderId: "119811030454",
  appId: "1:119811030454:web:95c106bf758620bc3c9517"
};

// ================== INIT FIREBASE ==================
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const sessionId = `user_${Date.now()}_${Math.random().toString(36).slice(2)}`;

// Make database globally available
window.database = database;

// ================== PRESENCE ==================
function initPresence() {
  const ref = database.ref(`presence/${sessionId}`);
  ref.set({ online: true, lastSeen: Date.now() });
  ref.onDisconnect().remove();

  setInterval(() => ref.set({ online: true, lastSeen: Date.now() }), 30000);
}

// ================== ONLINE COUNTER ==================
function initOnlineCounter() {
  database.ref('presence').on('value', snap => {
    const count = snap.exists() ? Object.keys(snap.val()).length : 0;
    const el1 = document.getElementById('onlineCount');
    const el2 = document.getElementById('chatOnlineCount');
    if (el1) el1.textContent = count;
    if (el2) el2.textContent = count;
  });
}

// ================== CONFIG ==================
function initConfig() {
  database.ref('config').on('value', snap => {
    window.config = snap.val() || {};

    // 🔴 REDIRECT TO SHUTDOWN.HTML
    if (window.config.shutdown === true) {
      if (!window.location.pathname.endsWith('/shutdown.html')) {
        window.location.href = '/public/shutdown.html';
      }
    }
  });
}

// ================== ANNOUNCEMENT ==================
function initAnnouncement() {
  const announcementDiv = document.getElementById('live-announcement');
  if (!announcementDiv) return;

  database.ref('announcement').on('value', snapshot => {
    const message = snapshot.val();
    if (message && message.trim() !== "") {
      announcementDiv.style.display = 'block';
      announcementDiv.innerHTML = `
        <div class="announcement-header">
          <span><div class="live-dot"></div> LIVE</span>
          <span>${message}</span>
        </div>
      `;
    } else {
      announcementDiv.style.display = 'none';
      announcementDiv.innerHTML = '';
    }
  });
}

// ================== INIT ==================
document.addEventListener('DOMContentLoaded', () => {
  initPresence();
  initOnlineCounter();
  initConfig();
  initAnnouncement();
});