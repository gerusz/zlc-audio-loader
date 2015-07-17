// ==UserScript==
// @name         ZombieLink classic audio fixer
// @namespace    https://github.com/gerusz/zlc-audio-loader
// @version      0.0.1
// @description  Should probably fix audio players on ZombieLink classic.
// @author       gerusz
// @match        https://classic.zombiesrungame.com/*
// @grant    GM_addStyle
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

waitForKeyElements("audio", setSourceAndReload);

function setSourceAndReload(audioElement) {
    audioElement.find("source").attr("src", audioElement.find("source").attr("src").replace("www", "classic"));
    audioElement.load();
}
