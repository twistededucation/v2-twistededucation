/* ================================
   SETTINGS.JS (Clean Rebuild)
================================ */

/* ========= USERNAME SYSTEM ========= */

let usernameChangesLeft = 4;

const RESERVED_USERNAMES = [
  "sunibun","enzo","admin","owner","moderator",
  "mcthug","trusty","asthma","yoshi","zoinkers1",
  "vortexfx","sigmatuffmangos101","viper"
];

function initUsernameSystem() {
  const input = document.getElementById("settingsUsername");
  const btn = document.getElementById("usernameChangeBtn");
  const changesEl = document.getElementById("changesRemaining");

  if (!input || !btn || !changesEl) return;

  // Load saved username
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) input.value = savedUsername;

  // Load remaining changes
  const savedChanges = localStorage.getItem("usernameChanges");
  if (savedChanges !== null) {
    usernameChangesLeft = parseInt(savedChanges, 10);
  } else {
    localStorage.setItem("usernameChanges", usernameChangesLeft);
  }

  changesEl.textContent = usernameChangesLeft;
  updateUsernameButton();

  input.addEventListener("keypress", e => {
    if (e.key === "Enter") changeUsername();
  });

  btn.addEventListener("click", changeUsername);
}

function updateUsernameButton() {
  const btn = document.getElementById("usernameChangeBtn");
  if (!btn) return;

  btn.disabled = usernameChangesLeft <= 0;
  btn.style.opacity = usernameChangesLeft <= 0 ? "0.6" : "1";
  btn.style.cursor = usernameChangesLeft <= 0 ? "not-allowed" : "pointer";
}

function changeUsername() {
  const input = document.getElementById("settingsUsername");
  const btn = document.getElementById("usernameChangeBtn");
  const changesEl = document.getElementById("changesRemaining");

  if (!input || !btn || !changesEl) return;

  const newUsername = input.value.trim();
  const lower = newUsername.toLowerCase();

  if (!newUsername) return alert("Enter a username.");
  if (newUsername.length < 3) return alert("Minimum 3 characters.");
  if (newUsername.length > 20) return alert("Maximum 20 characters.");
  if (lower === "guest") return alert("Choose a real username.");
  if (RESERVED_USERNAMES.includes(lower)) return alert("That username is reserved.");
  if (usernameChangesLeft <= 0) return alert("No username changes remaining.");

  localStorage.setItem("username", newUsername);

  usernameChangesLeft--;
  localStorage.setItem("usernameChanges", usernameChangesLeft);
  changesEl.textContent = usernameChangesLeft;

  updateUsernameButton();

  btn.textContent = "Saved!";
  setTimeout(() => btn.textContent = "Save", 2000);
}

/* ========= TAB CLOAK ========= */

const cloakPresets = {
  Google: { title: "Google", favicon: "https://www.google.com/favicon.ico" },
  "Google Drive": { title: "Google Drive", favicon: "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png" },
  Classroom: { title: "Google Classroom", favicon: "https://ssl.gstatic.com/classroom/favicon.png" },
  Canvas: { title: "Canvas", favicon: "https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico" },
  Clever: { title: "Clever | Portal", favicon: "https://assets.clever.com/resource/icon/favicon-32.png" },
  Khan: { title: "Khan Academy", favicon: "https://cdn.kastatic.org/images/favicon.ico" }
};

function setFavicon(url) {
  let link = document.querySelector("link[rel='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = url;
}

function removeFavicon() {
  const link = document.querySelector("link[rel='icon']");
  if (link) link.remove();
}

function setCloak() {
  const select = document.getElementById("cloak-select");
  if (!select) return;

  const preset = cloakPresets[select.value];
  if (!preset) return;

  document.title = preset.title;
  setFavicon(preset.favicon);
  localStorage.setItem("cloak", JSON.stringify(preset));
}

function resetCloak() {
  document.title = "settings";
  removeFavicon();
  localStorage.removeItem("cloak");
}

function setCustomCloak() {
  const title = document.getElementById("custom-title")?.value;
  const favicon = document.getElementById("custom-favicon")?.value;

  if (title) document.title = title;
  if (favicon) setFavicon(favicon);

  if (title || favicon) {
    localStorage.setItem("cloak", JSON.stringify({
      title: title || document.title,
      favicon
    }));
  }
}

/* ========= THEMES ========= */

const themeMap = {
  Default: "",
  "The 3rd Baka": "theme-3rdbaka",
  "Miku Beam": "theme-mikubeam",
  "Teto's Territory": "theme-teto",
  MexiMath: "theme-meximath",
  Truffled: "theme-truffled",
  "Purple Twilight": "theme-purpletwilight",
  Sakura: "theme-sakura",
  "Firey Frenzy": "theme-fireyfrenzy"
};

function removeAllThemes() {
  Object.values(themeMap).forEach(cls => {
    if (cls) document.body.classList.remove(cls);
  });
}

function changeTheme() {
  const select = document.getElementById("theme-select");
  if (!select) return;

  const value = select.value;

  removeAllThemes();

  const cls = themeMap[value];
  if (cls) document.body.classList.add(cls);

  if (localStorage.getItem("mobile") === "true") {
    document.body.classList.add("mobile-mode");
  }

  localStorage.setItem("theme", value);

  if (window.startStars && localStorage.getItem("particles") === "true") {
    window.stopStars?.();
    window.startStars();
  }
}

/* ========= PARTICLES ========= */

function enableParticles() {
  localStorage.setItem("particles", "true");
  window.startStars?.();
}

function disableParticles() {
  localStorage.setItem("particles", "false");
  window.stopStars?.();
}

/* ========= MOBILE MODE ========= */

function enableMobile() {
  document.body.classList.add("mobile-mode");
  localStorage.setItem("mobile", "true");
}

function disableMobile() {
  document.body.classList.remove("mobile-mode");
  localStorage.setItem("mobile", "false");
}

/* ========= DEBUG ========= */

function enterDebug() {
  const w = window.open("about:blank", "_blank");
  const iframe = w.document.createElement("iframe");
  iframe.src = window.location.href;
  iframe.style.cssText = "width:100%;height:100%;border:none;position:fixed;top:0;left:0;";
  w.document.body.style.margin = "0";
  w.document.body.appendChild(iframe);
  const saved = localStorage.getItem("cloak");
  if (saved) {
    const c = JSON.parse(saved);
    w.document.title = c.title || "New Tab";
    if (c.favicon) {
      const link = w.document.createElement("link");
      link.rel = "icon"; link.href = c.favicon;
      w.document.head.appendChild(link);
    }
  }
}


/* ========= PANIC KEY ========= */

document.addEventListener("keydown", e => {
  if (e.key === "`" || e.key === "~") {
    window.location.href = "https://classroom.google.com";
  }
});

/* ========= INIT ========= */

window.addEventListener("DOMContentLoaded", () => {

  initUsernameSystem();

  // Restore cloak
  const savedCloak = localStorage.getItem("cloak");
  if (savedCloak) {
    const c = JSON.parse(savedCloak);
    if (c.title) document.title = c.title;
    if (c.favicon) setFavicon(c.favicon);
  }

  // Restore theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && themeMap[savedTheme]) {
    document.getElementById("theme-select") &&
      (document.getElementById("theme-select").value = savedTheme);

    const cls = themeMap[savedTheme];
    if (cls) document.body.classList.add(cls);
  }

  // Restore mobile
  if (localStorage.getItem("mobile") === "true") {
    document.body.classList.add("mobile-mode");
  }

});
