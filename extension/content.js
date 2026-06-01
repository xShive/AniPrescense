// ========== State ==========
let isWatching = false;

// ========== Functions ==========
function scrapeData() {
    if (!window.location.href.includes("/watch")) return null;

    let animeTitleElement = document.querySelector(".anime-title");
    let titleElement = document.querySelector(".ep-title");
    let numberElement = document.querySelector(".ep-number");
    let timestampElements = document.getElementsByClassName("vds-time"); 
    let imageElement = document.querySelector("img[style*='view-transition-name: poster']");
    let videoElement = document.querySelector("video");

    if (!titleElement || !timestampElements || timestampElements.length < 2 || !imageElement || !videoElement) {
        return null;
    }

    let raw_title = titleElement.textContent.includes("· ") 
        ? titleElement.textContent.split("· ")[1].trim() 
        : titleElement.textContent.trim();
    
    return {
        anime_title: animeTitleElement ? animeTitleElement.textContent.trim() : "",
        episode_title: raw_title,
        episode: numberElement ? numberElement.textContent.trim() : "",
        current_time: timestampElements[0].textContent,
        duration: timestampElements[1].textContent,
        cover: imageElement ? imageElement.src : "",
        paused: videoElement.paused
    };
}

async function sendData(data) {
    try {
        await fetch(`${LOCAL_URL}/watching`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
    } catch (error) {}
}

function sendStop() {
    fetch(`${LOCAL_URL}/stopped`, { method: "POST" });
}

// ========== Main Loop ==========
setInterval(function() {
    let data = scrapeData();
    
    if (data) {
        sendData(data);
        isWatching = true;
    } else if (isWatching) {
        sendStop();
        isWatching = false;
    }
}, 15000);