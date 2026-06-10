# AniPresence

<p align="center">
  <img src="https://img.shields.io/github/license/xShive/AniPrescense?style=flat-square" alt="License">
  <img src="https://img.shields.io/github/v/release/xShive/AniPrescense?style=flat-square" alt="Version">
  <img src="https://img.shields.io/github/downloads/xShive/AniPrescense/total?style=flat-square" alt="Downloads">
</p>

Automatically streams whatever anime you're watching directly onto your Discord profile as a Rich Presence Card (RPC), complete with a time-remaining tracker, paused states, anime-title detection, and episode-title detection.

<div align="center">
  <a href="https://imgur.com/ry3eCfV">
    <img src="assets/demo-thumbnail.png" alt="Watch Video" width="500">
  </a>
  <br>
  <p><b>↑ Click to view demo ↑</b></p>
</div>

## Installation & Setup

### Part 1: Install the Tracker
1. Download the latest `AnimeTracker_Setup.exe` from the [Releases Page](https://github.com/xShive/AniPresence/releases).
2. Run the installer and follow the on-screen instructions.
3. Once the installation finishes, an **installation folder** will automatically open on your screen. Copy its location, using the navigation bar at the top.
  
### Part 2: Loading the Browser Extension
1. Open your browser's extension manager:
   - Chrome/Brave/Edge: Type `chrome://extensions` in your address bar.
   - Opera GX: Type `opera://extensions` in your address bar.
2. In the top-right corner, toggle **Developer Mode to ON.**
3. Click the **Load Unpacked** button that appears on the top-left.
4. Navigate to the extension folder by pasting it at the top. Open the extension folder (it'll appear as empty).

The extension is now active! Simply watch an anime on a supported site, and your Discord status will update automatically.

## Supported Websites

The tracker natively supports the following domains:
- `crunchyroll.com`
- `miruro.tv`, `miruro.bz`, `miruro.to`, `miruro.ru`
- `animepahe.pw`

## FAQ

### Q: Why does Windows display a "This PC is protected" or Firewall warning?
A: This is a standard Windows security feature for any custom application that has not been digitally signed by a paid developer certificate. Because this is an open-source project managed locally, Windows does not recognize the publisher. You can safely click "More info" and then "Run anyway" to proceed.

### Q: How do I ensure this tool is safe to use?
A: The source code of this project is publicly available, which you can use to verify its safety. The tracker runs entirely locally on your machine and only interacts with website data to scrape the current video status. It does not log anything else related to your browser.
