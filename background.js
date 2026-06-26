// Alpha Assistant v3
// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log('[Alpha Assistant] Extension installed');
});

chrome.runtime.onStartup.addListener(() => {
    console.log('[Alpha Assistant] Browser started');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.type) {
        case 'PING':
            sendResponse({ ok: true, version: chrome.runtime.getManifest().version });
            return true;

        case 'GET_MANIFEST':
            sendResponse(chrome.runtime.getManifest());
            return true;

        default:
            return false;
    }
});