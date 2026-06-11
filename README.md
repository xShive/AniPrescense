# AniPresence

<p align="center">
  <img src="https://img.shields.io/github/license/xShive/AniPresence?style=flat-square" alt="License">
  <img src="https://img.shields.io/github/v/release/xShive/AniPresence?style=flat-square" alt="Version">
  <img src="https://img.shields.io/github/downloads/xShive/AniPresence/total?style=flat-square" alt="Downloads">
</p>

AniPresence is a lightweight hub for all your favorite anime and manga. Track your lists, sync your progress to MyAnimeList, and show what you're watching live on your Discord profile. It pairs an easy-to-use browser extension with a small app that runs locally on your machine.

<div align="center">
  <a href="https://imgur.com/ry3eCfV">
    <img src="assets/demo-thumbnail.png" alt="Watch Video" width="500">
  </a>
  <br>
  <p><b>↑ Click to view demo ↑</b></p>
</div>

## Installation & Setup

### Part 1: Install the app
1. Download the latest `AniPresence_Setup.exe` from the [Releases Page](https://github.com/xShive/AniPresence/releases).
2. Run the installer and follow the on-screen instructions.
3. When it finishes, the installer opens the **`extension` folder** for you. Leave this window open: it's needed in Part 2.

### Part 2: Load the browser extension
1. Open your browser's extension manager:
   - Chrome / Brave / Edge: type `chrome://extensions` in the address bar.
   - Opera GX: type `opera://extensions` in the address bar.
2. Toggle **Developer Mode** to **ON** (top-right corner).
3. Click **Load unpacked** (top-left).
4. Select the **`extension` folder** that opened in Part 1. (default: `C:\Program Files (x86)\AniPresence\extension`)

## Supported Websites

- `crunchyroll.com`
- `miruro.tv`, `miruro.bz`, `miruro.to`, `miruro.ru`
- `animepahe.pw`

## FAQ

### Q: Why does Windows display a "This PC is protected" or Firewall warning?
A: This is a standard Windows security feature for any custom application that has not been digitally signed by a paid developer certificate. Because this is an open-source project managed locally, Windows does not recognize the publisher. You can safely click "More info" and then "Run anyway" to proceed.

### Q: How do I ensure this tool is safe to use?
A: The source code of this project is publicly available, which you can use to verify its safety. The tracker runs entirely locally on your machine and only interacts with website data to scrape the current video status. It does not log anything else related to your browser.

### Q: What about my MyAnimeList password?
A: You sign in through MyAnimeList's own official login page, so AniPresence never sees or stores your password. It only keeps the access token MAL hands back, saved locally on your machine.
