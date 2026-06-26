/**
 * Alpha Assistant v3
 * content.js
 * Bootstrap entry point
 */

(async () => {
    console.log('[Alpha Assistant] Content script loaded');

    window.AlphaAssistant = {
        version: '3.0.0',
        initialized: true,
        startedAt: Date.now()
    };

    chrome.runtime.sendMessage({ type: 'PING' }, (response) => {
        if (chrome.runtime.lastError) {
            console.warn('[Alpha Assistant]', chrome.runtime.lastError.message);
            return;
        }
        console.log('[Alpha Assistant] Background connected', response);
    });
})();