// ================= GLOBAL THEME LOADER =================

(function () {

  const themeMap = {
    Default: "",
    "The 3rd Baka": "theme-3rdbaka",
    "Miku Beam": "theme-mikubeam",
    "Teto's Territory": "theme-teto",
    MexiMath: "theme-meximath",
    Truffled: "theme-truffled",
    "Purple Twilight": "theme-purpletwilight",
    Sakura: "theme-sakura",
    "Firey Frenzy": "theme-fireyfrenzy",
  };

  function applyTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) return;

    const cls = themeMap[savedTheme];
    if (!cls) return;

    // Remove existing theme classes safely
    document.body.className = document.body.className
      .replace(/theme-\S+/g, "")
      .trim();

    document.body.classList.add(cls);
  }

  // Run as soon as page loads
  document.addEventListener("DOMContentLoaded", applyTheme);

})();
