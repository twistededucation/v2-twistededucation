const container = document.getElementById('container');
const zoneViewer = document.getElementById('zoneViewer');
let zoneFrame = document.getElementById('zoneFrame');
const searchBar = document.getElementById('searchBar');
const sortOptions = document.getElementById('sortOptions');
const filterOptions = document.getElementById('filterOptions');

const zonesurls = [
    "https://cdn.jsdelivr.net/gh/gn-math/assets@main/zones.json",
    "https://cdn.jsdelivr.net/gh/gn-math/assets@latest/zones.json",
    "https://cdn.jsdelivr.net/gh/gn-math/assets@master/zones.json",
    "https://cdn.jsdelivr.net/gh/gn-math/assets/zones.json"
];
let zonesURL = zonesurls[Math.floor(Math.random() * zonesurls.length)];
const coverURL = "https://cdn.jsdelivr.net/gh/gn-math/covers@main";
const htmlURL = "https://cdn.jsdelivr.net/gh/gn-math/html@main";
let zones = [];
let popularityData = {};
const featuredContainer = document.getElementById('featuredZones');

function toTitleCase(str) {
    return str.replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase());
}

async function listZones() {
    try {
        let sharesponse;
        let shajson;
        let sha;
        try {
            sharesponse = await fetch("https://api.github.com/repos/gn-math/assets/commits?t=" + Date.now());
        } catch (error) {}
        
        if (sharesponse && sharesponse.status === 200) {
            try {
                shajson = await sharesponse.json();
                sha = shajson[0]['sha'];
                if (sha) {
                    zonesURL = `https://cdn.jsdelivr.net/gh/gn-math/assets@${sha}/zones.json`;
                }
            } catch (error) {
                try {
                    let secondarysharesponse = await fetch("https://raw.githubusercontent.com/gn-math/xml/refs/heads/main/sha.txt?t=" + Date.now());
                    if (secondarysharesponse && secondarysharesponse.status === 200) {
                        sha = (await secondarysharesponse.text()).trim();
                        if (sha) {
                            zonesURL = `https://cdn.jsdelivr.net/gh/gn-math/assets@${sha}/zones.json`;
                        }
                    }
                } catch (error) {}
            }
        }
        
        const response = await fetch(zonesURL + "?t=" + Date.now());
        const json = await response.json();
        zones = json;
        zones[0].featured = true;
        
        await Promise.all([
            fetchPopularity("year"),
            fetchPopularity("month"),
            fetchPopularity("week"),
            fetchPopularity("day")
        ]);
        
        sortZones();
        
        // Handle URL params
        try {
            const search = new URLSearchParams(window.location.search);
            const id = search.get('id');
            const embed = window.location.hash.includes("embed");
            if (id) {
                const zone = zones.find(zone => zone.id + '' == id + '');
                if (zone) {
                    if (embed) {
                        if (zone.url.startsWith("http")) {
                            window.open(zone.url, "_blank");
                        } else {
                            const url = zone.url.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
                            fetch(url + "?t=" + Date.now())
                                .then(response => response.text())
                                .then(html => {
                                    document.documentElement.innerHTML = html;
                                })
                                .catch(() => {});
                        }
                    } else {
                        openZone(zone);
                    }
                }
            }
        } catch (error) {}
        
        // Populate filter options
        let alltags = [];
        for (const obj of json) {
            if (Array.isArray(obj.special)) {
                alltags.push(...obj.special);
            }
        }
        alltags = [...new Set(alltags)];
        
        while (filterOptions.children.length > 1) {
            filterOptions.removeChild(filterOptions.lastElementChild);
        }
        
        for (const tag of alltags) {
            const opt = document.createElement("option");
            opt.value = tag;
            opt.textContent = toTitleCase(tag);
            filterOptions.appendChild(opt);
        }
    } catch (error) {
        console.error(error);
        container.innerHTML = `Error loading games: ${error.message}`;
    }
}

async function fetchPopularity(duration) {
    try {
        if (!popularityData[duration]) {
            popularityData[duration] = {};
        }
        const response = await fetch(
            "https://data.jsdelivr.com/v1/stats/packages/gh/gn-math/html@main/files?period=" + duration
        );
        const data = await response.json();
        data.forEach(file => {
            const idMatch = file.name.match(/\/(\d+)\.html$/);
            if (idMatch) {
                const id = parseInt(idMatch[1]);
                popularityData[duration][id] = file.hits?.total ?? 0;
            }
        });
    } catch (error) {
        if (!popularityData[duration]) {
            popularityData[duration] = {};
        }
        popularityData[duration][0] = 0;
    }
}

function sortZones() {
    const sortBy = sortOptions.value;
    if (sortBy === 'name') {
        zones.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'id') {
        zones.sort((a, b) => b.id - a.id);
    } else if (sortBy === 'popular') {
        zones.sort((a, b) => ((popularityData['year']?.[b.id]) ?? 0) - ((popularityData['year']?.[a.id]) ?? 0));
    } else if (sortBy === 'trendingMonth') {
        zones.sort((a, b) => ((popularityData['month']?.[b.id]) ?? 0) - ((popularityData['month']?.[a.id]) ?? 0));
    } else if (sortBy === 'trendingWeek') {
        zones.sort((a, b) => ((popularityData['week']?.[b.id]) ?? 0) - ((popularityData['week']?.[a.id]) ?? 0));
    } else if (sortBy === 'trendingDay') {
        zones.sort((a, b) => ((popularityData['day']?.[b.id]) ?? 0) - ((popularityData['day']?.[a.id]) ?? 0));
    }
    
    zones.sort((a, b) => (a.id === -1 ? -1 : b.id === -1 ? 1 : 0));
    
    if (featuredContainer.innerHTML === "") {
        const featured = zones.filter(z => z.featured);
        displayFeaturedZones(featured);
    }
    displayZones(zones);
}

function displayFeaturedZones(featuredZones) {
    featuredContainer.innerHTML = "";
    featuredZones.forEach((file) => {
        const zoneItem = createZoneItem(file);
        featuredContainer.appendChild(zoneItem);
    });
    
    if (featuredContainer.innerHTML === "") {
        featuredContainer.innerHTML = "No featured games found.";
    } else {
        document.getElementById("featuredZonesWrapper").querySelector("summary").textContent = 
            `Featured Games (${featuredZones.length})`;
    }
}

function displayZones(zones) {
    container.innerHTML = "";
    zones.forEach((file) => {
        const zoneItem = createZoneItem(file);
        container.appendChild(zoneItem);
    });
    
    if (container.innerHTML === "") {
        container.innerHTML = "No games found.";
    } else {
        document.getElementById("allSummary").textContent = `All Games (${zones.length})`;
    }
}

function createZoneItem(file) {
    const zoneItem = document.createElement("div");
    zoneItem.className = "zone-item";
    zoneItem.onclick = () => openZone(file);
    
    const img = document.createElement("img");
    img.dataset.src = file.cover.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
    img.alt = file.name;
    img.loading = "lazy";
    img.className = "lazy-zone-img";
    zoneItem.appendChild(img);
    
    const button = document.createElement("button");
    button.textContent = file.name;
    button.onclick = (event) => {
        event.stopPropagation();
        openZone(file);
    };
    zoneItem.appendChild(button);
    
    return zoneItem;
}

// Initialize lazy loading after DOM updates
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img.lazy-zone-img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy-zone-img");
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: "100px",
        threshold: 0.1
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Call after displaying zones
const originalDisplayZones = displayZones;
displayZones = function(zones) {
    originalDisplayZones(zones);
    initLazyLoading();
};

const originalDisplayFeatured = displayFeaturedZones;
displayFeaturedZones = function(zones) {
    originalDisplayFeatured(zones);
    initLazyLoading();
};

function filterZones2() {
    const query = filterOptions.value;
    if (query === "none") {
        displayZones(zones);
    } else {
        const filteredZones = zones.filter(zone => zone.special?.includes(query));
        document.getElementById("featuredZonesWrapper").removeAttribute("open");
        displayZones(filteredZones);
    }
}

function filterZones() {
    const query = searchBar.value.toLowerCase();
    const filteredZones = zones.filter(zone => zone.name.toLowerCase().includes(query));
    document.getElementById("featuredZonesWrapper").removeAttribute("open");
    displayZones(filteredZones);
}

function openZone(file) {
    if (file.url.startsWith("http")) {
        window.open(file.url, "_blank");
    } else {
        const url = file.url.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
        fetch(url + "?t=" + Date.now())
            .then(response => response.text())
            .then(html => {
                if (!zoneFrame || !zoneFrame.contentDocument) {
                    zoneFrame = document.createElement("iframe");
                    zoneFrame.id = "zoneFrame";
                    document.getElementById('zoneViewer').appendChild(zoneFrame);
                }
                zoneFrame.contentDocument.open();
                zoneFrame.contentDocument.write(html);
                zoneFrame.contentDocument.close();
                
                document.getElementById('zoneName').textContent = file.name;
                document.getElementById('zoneId').textContent = file.id;
                document.getElementById('zoneAuthor').textContent = "by " + (file.author || "Unknown");
                if (file.authorLink) {
                    document.getElementById('zoneAuthor').href = file.authorLink;
                }
                
                zoneViewer.style.display = "flex";
                
                try {
                    const url = new URL(window.location);
                    url.searchParams.set('id', file.id);
                    history.pushState(null, '', url.toString());
                } catch (error) {}
            })
            .catch(error => alert("Failed to load game: " + error));
    }
}

function aboutBlank() {
    const newWindow = window.open("about:blank", "_blank");
    const zone = zones.find(zone => zone.id + '' === document.getElementById('zoneId').textContent);
    const url = zone.url.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
    
    fetch(url + "?t=" + Date.now())
        .then(response => response.text())
        .then(html => {
            if (newWindow) {
                newWindow.document.open();
                newWindow.document.write(html);
                newWindow.document.close();
            }
        });
}

function closeZone() {
    zoneViewer.style.display = "none";
    if (zoneFrame && zoneFrame.parentNode) {
        zoneFrame.parentNode.removeChild(zoneFrame);
        zoneFrame = document.createElement("iframe");
        zoneFrame.id = "zoneFrame";
    }
    try {
        const url = new URL(window.location);
        url.searchParams.delete('id');
        history.pushState(null, '', url.toString());
    } catch (error) {}
}

function downloadZone() {
    const zone = zones.find(zone => zone.id + '' === document.getElementById('zoneId').textContent);
    fetch(zone.url.replace("{HTML_URL}", htmlURL) + "?t=" + Date.now())
        .then(res => res.text())
        .then(text => {
            const blob = new Blob([text], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = zone.name + ".html";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
}

function fullscreenZone() {
    if (zoneFrame.requestFullscreen) {
        zoneFrame.requestFullscreen();
    } else if (zoneFrame.mozRequestFullScreen) {
        zoneFrame.mozRequestFullScreen();
    } else if (zoneFrame.webkitRequestFullscreen) {
        zoneFrame.webkitRequestFullscreen();
    } else if (zoneFrame.msRequestFullscreen) {
        zoneFrame.msRequestFullscreen();
    }
}

// Settings
const settings = document.getElementById('settings');
if (settings) {
    settings.addEventListener('click', () => {
        document.getElementById('popupTitle').textContent = "Settings";
        const popupBody = document.getElementById('popupBody');
        popupBody.innerHTML = `
            <button class="settings-button" onclick="tabCloak()">Tab Cloak</button>
            <button class="settings-button" onclick="window.location.href='/settings.html'">Full Settings</button>
            <p style="margin-top: 16px; color: #666;">More features coming soon...</p>
        `;
        popupBody.contentEditable = false;
        document.getElementById('popupOverlay').style.display = "flex";
    });
}

function tabCloak() {
    closePopup();
    document.getElementById('popupTitle').textContent = "Tab Cloak";
    const popupBody = document.getElementById('popupBody');
    popupBody.innerHTML = `
        <label style="display: block; margin-bottom: 8px; font-weight: 600;">Tab Title:</label>
        <input type="text" id="tab-cloak-textbox" placeholder="Enter new tab name..." oninput="cloakName(this.value)">
        <br><br>
        <label style="display: block; margin-bottom: 8px; font-weight: 600;">Tab Icon URL:</label>
        <input type="text" id="tab-cloak-textbox" placeholder="Enter icon URL..." oninput="cloakIcon(this.value)">
        <br><br>
        <button class="settings-button" onclick="resetCloak()">Reset to Default</button>
    `;
    popupBody.contentEditable = false;
    document.getElementById('popupOverlay').style.display = "flex";
}

function cloakIcon(url) {
    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.rel = "icon";
    link.href = url.trim() || "https://cdn.jsdelivr.net/gh/nevapaid/twisted-assets/favicon.png";
    document.head.appendChild(link);
}

function cloakName(string) {
    document.title = string.trim() || "twisted | games";
}

function resetCloak() {
    cloakIcon("");
    cloakName("");
    closePopup();
}

function showContact() {
    document.getElementById('popupTitle').textContent = "Contact";
    const popupBody = document.getElementById('popupBody');
    popupBody.innerHTML = `
        <p>Discord: <a href="https://discord.gg/rKuch4azCU" target="_blank" style="color: white;">.gg/rKuch4azCU</a></p>
        <p>Email: contact@twisted.games</p>
    `;
    popupBody.contentEditable = false;
    document.getElementById('popupOverlay').style.display = "flex";
}

function loadPrivacy() {
    document.getElementById('popupTitle').textContent = "Privacy Policy";
    const popupBody = document.getElementById('popupBody');
    popupBody.innerHTML = `
        <div style="max-height: 60vh; overflow-y: auto;">
            <h2>Privacy Policy</h2>
            <p>Last updated: ${new Date().toLocaleDateString()}</p>
            <p>We respect your privacy. No personal data is collected.</p>
            <h3>Contact</h3>
            <p>For concerns, join our Discord.</p>
        </div>
    `;
    popupBody.contentEditable = false;
    document.getElementById('popupOverlay').style.display = "flex";
}

function loadDMCA() {
    document.getElementById('popupTitle').textContent = "DMCA";
    const popupBody = document.getElementById('popupBody');
    popupBody.innerHTML = `
        <div>
            <p>To request game removal:</p>
            <ol style="margin-top: 12px; padding-left: 20px;">
                <li>Join <a href="https://discord.gg/rKuch4azCU" target="_blank" style="color: white;">Discord</a></li>
                <li>Email proof to: dmca@twisted.games</li>
            </ol>
        </div>
    `;
    popupBody.contentEditable = false;
    document.getElementById('popupOverlay').style.display = "flex";
}

function showZoneInfo() {
    const id = Number(document.getElementById('zoneId').textContent);
    document.getElementById('popupTitle').textContent = "Loading...";
    const popupBody = document.getElementById('popupBody');
    popupBody.innerHTML = `<p>Loading game info...</p>`;
    document.getElementById('popupOverlay').style.display = "flex";
    
    fetch(`https://api.github.com/repos/gn-math/html/commits?path=${id}.html`)
        .then(res => res.json())
        .then(async json => {
            const stats = await getStats(id);
            const zone = zones.find(a => a.id === id);
            
            document.getElementById('popupTitle').textContent = zone.name;
            
            const date = new Date(json.at(-1).commit.author.date);
            const formattedDate = new Intl.DateTimeFormat("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
            }).format(date);
            
            popupBody.innerHTML = `
                <p><strong>Name:</strong> ${zone.name}</p>
                ${zone.author ? `<p><strong>Developer:</strong> ${zone.author}</p>` : ''}
                ${zone.special ? `<p><strong>Tags:</strong> ${zone.special.join(', ')}</p>` : ''}
                <p><strong>Added:</strong> ${formattedDate}</p>
                <p><strong>Plays:</strong> ${Number(stats).toLocaleString()}</p>
            `;
        })
        .catch(() => {
            popupBody.innerHTML = `<p>Failed to load game info.</p>`;
        });
}

async function getAllStats() {
    const BASE_URL = "https://data.jsdelivr.com/v1/stats/packages/gh/gn-math/html@main/files";
    const PERIOD = "year";
    const PAGE_BATCH = 5;
    
    let page = 1;
    let done = false;
    const combinedMap = {};
    
    while (!done) {
        const pages = Array.from({ length: PAGE_BATCH }, (_, i) => page + i);
        const responses = await Promise.all(
            pages.map(p => fetch(`${BASE_URL}?period=${PERIOD}&page=${p}&limit=100`).then(r => r.ok ? r.json() : []))
        );
        
        for (const data of responses) {
            if (!Array.isArray(data) || data.length === 0) {
                done = true;
                break;
            }
            for (const item of data) {
                if (!item?.name) continue;
                const match = item.name.match(/^\/(\d+)([.-])/);
                if (!match) continue;
                const id = match[1];
                if (!combinedMap[id]) {
                    combinedMap[id] = { hits: 0 };
                }
                combinedMap[id].hits += item.hits?.total ?? 0;
            }
        }
        page += PAGE_BATCH;
    }
    return combinedMap;
}

async function getStats(id) {
    const allStats = await getAllStats();
    return allStats[id]?.hits ?? 0;
}

function closePopup() {
    document.getElementById('popupOverlay').style.display = "none";
}

// Export/Import
async function saveData() {
    const result = {
        cookies: document.cookie,
        localStorage: { ...localStorage },
        sessionStorage: { ...sessionStorage }
    };
    
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([JSON.stringify(result)], { type: "application/json" }));
    link.download = `twisted-backup-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

async function loadData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data.cookies) {
                data.cookies.split(';').forEach(cookie => {
                    document.cookie = cookie.trim();
                });
            }
            if (data.localStorage) {
                Object.keys(data.localStorage).forEach(key => {
                    localStorage.setItem(key, data.localStorage[key]);
                });
            }
            if (data.sessionStorage) {
                Object.keys(data.sessionStorage).forEach(key => {
                    sessionStorage.setItem(key, data.sessionStorage[key]);
                });
            }
            alert("Data loaded!");
        } catch (error) {
            alert("Failed to load data");
        }
    };
    reader.readAsText(file);
}

// Initialize
listZones();