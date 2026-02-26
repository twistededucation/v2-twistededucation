(function() {
  document.addEventListener("DOMContentLoaded", () => {

    const loadingScreen = document.getElementById("loading-screen");
    const progressBar = document.getElementById("loading-bar-fill");
    const loadingText = document.getElementById("loading-text");
    const skipBtn = document.getElementById("skip-loading");
    const img = document.getElementById("loading-image");
    const clickCounter = document.getElementById("click-counter");

    if (!loadingScreen || !progressBar || !loadingText || !img || !clickCounter) return;

    let finished = false;
    let isBouncing = false;
    let lastClick = 0;
    const cooldown = 1000; // 1 second cooldown
    let totalClicks = 0;

    const BIN_ID = "699106b4d0ea881f40bb02c1";
    const ACCESS_KEY = "$2a$10$tBSJ6kzhMGvFwpU5kAHipOf2kUPaEfzDXblKVGtpifKxaMIU0ahci";

    /* -------------------------
       LOADING MESSAGES
    -------------------------- */
    const messages = [
      ".gg/rKuch4azCU",
      "there should be a skip button.",
      "if u want a message put it in suggestions!",
      "thank you guys for 3k members",
      "freakycai is lwk the goat",
      "freakycai made da besh game",
      "techy is lwk NOT the goat ✌️",
      "one handed techy",
      "pull up cai",
      "I'm not adding ads just for u guys (:",
      "i added like hella games ",
      "clicker can be buggy!",
      "if some port's don't work dm me :)"
    ];

    let msgIndex = Math.floor(Math.random() * messages.length);
    loadingText.textContent = messages[msgIndex];

    const msgInterval = setInterval(() => {
      loadingText.style.opacity = 0;
      setTimeout(() => {
        msgIndex = (msgIndex + 1) % messages.length;
        loadingText.textContent = messages[msgIndex];
        loadingText.style.opacity = 1;
      }, 200);
    }, 1800);

    /* -------------------------
       SKIP BUTTON
    -------------------------- */
    if (skipBtn) {
      setTimeout(() => skipBtn.classList.add("show"), 1500);
      skipBtn.addEventListener("click", finishLoading);
    }

    /* -------------------------
       GLOBAL CLICK COUNTER
    -------------------------- */
    async function fetchClicks() {
      try {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
          headers: { "X-Access-Key": ACCESS_KEY }
        });
        const data = await res.json();
        totalClicks = data.record.clicks || 0;
        clickCounter.textContent = `Clicks Today: ${totalClicks}`;
      } catch (err) {
        console.error("Failed to fetch global clicks:", err);
      }
    }

    async function updateClicks(newCount) {
      try {
        await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-Access-Key": ACCESS_KEY
          },
          body: JSON.stringify({ clicks: newCount })
        });
      } catch (err) {
        console.error("Failed to update global clicks:", err);
      }
    }

    fetchClicks(); // load current global clicks

    /* -------------------------
       IMAGE CLICK: BOUNCE + +1 + GLOBAL CLICK
    -------------------------- */
    img.setAttribute("draggable", "false");
    img.style.userSelect = "none";
    img.style.webkitUserDrag = "none";

    img.addEventListener("click", async () => {
      const now = Date.now();
      if (now - lastClick < cooldown) return;
      lastClick = now;

      // Bounce
      if (!isBouncing) {
        isBouncing = true;
        img.style.transition = "transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)";
        img.style.transform = "scale(1.15)";
        setTimeout(() => {
          img.style.transform = "scale(1)";
          isBouncing = false;
        }, 150);
      }

      // Spawn +1
      spawnPlusOne();

      // Increment global click
      totalClicks++;
      clickCounter.textContent = `Clicks Today: ${totalClicks}`;
      await updateClicks(totalClicks);
    });

    function spawnPlusOne() {
      const plusOne = document.createElement("div");
      plusOne.className = "plus-one";
      plusOne.textContent = "+1";

      plusOne.style.left = Math.random() * (window.innerWidth - 40) + "px";
      plusOne.style.top = Math.random() * (window.innerHeight - 40) + "px";

      document.body.appendChild(plusOne);

      setTimeout(() => plusOne.remove(), 900);
    }

    /* -------------------------
       SMOOTH PROGRESS BAR
    -------------------------- */
    const duration = 5700;
    const start = performance.now();

    function animate(now) {
      if (finished) return;
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      progressBar.style.width = (eased * 100) + "%";

      if (progress < 1) requestAnimationFrame(animate);
      else finishLoading();
    }

    /* -------------------------
       FINISH LOADING
    -------------------------- */
    function finishLoading() {
      if (finished) return;
      finished = true;
      clearInterval(msgInterval);
      loadingScreen.style.opacity = "0";
      setTimeout(() => loadingScreen.style.display = "none", 600);
    }

    requestAnimationFrame(animate);

  });
})();
