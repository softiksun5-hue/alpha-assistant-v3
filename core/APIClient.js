/**
 * Alpha Assistant v3
 * core/APIClient.js
 */

export default class APIClient {
    constructor(baseURL = `${location.origin}/api`) {
        this.baseURL = baseURL;
    }

    async request(path, options = {}) {
        const response = await fetch(`${this.baseURL}${path}`, {
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...(options.headers || {})
            },
            ...options
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        return response.json();
    }

    post(path, body) {
        return this.request(path, {
            method: 'POST',
            body: JSON.stringify(body)
        });
    }

    getChatList(payload) {
        return this.post('/chatList/chatListByUserID', payload);
    }

    getChatHistory(payload) {
        return this.post('/chatList/chatHistory', payload);
    }

    getChatInfo(payload) {
        return this.post('/chatList/chatInfoByChatUID', payload);
    }

    sendMessage(payload) {
        return this.post('/chat/message', payload);
    }
}
