/* chatbot.js - AI Assistant Integration */

document.addEventListener('DOMContentLoaded', () => {
    initChatbot();
});

function initChatbot() {
    // Create Chatbot Elements
    const chatWidget = document.createElement('div');
    chatWidget.id = 'keith-ai-chatbot';
    chatWidget.className = 'chatbot-widget';

    chatWidget.innerHTML = `
        <div class="chat-launcher glass">
            <span class="online-indicator"></span>
            <img src="images/agent/headshot-small.jpg" alt="Keith" class="launcher-avatar">
            <span class="launcher-text">Chat with Keith's AI</span>
        </div>
        <div class="chat-window glass">
            <div class="chat-header">
                <div class="agent-info">
                    <img src="images/agent/headshot-small.jpg" alt="Keith" class="window-avatar">
                    <div class="agent-name-status">
                        <span class="agent-name">Keith's Assistant</span>
                        <span class="status">Online | Fast Response</span>
                    </div>
                </div>
                <button class="close-chat">&times;</button>
            </div>
            <div class="chat-body" id="chat-messages">
                <div class="message system">
                    <p>Hi! I'm Keith's AI assistant. I'm here to answer your questions about wealth protection and life insurance. How can I help you today?</p>
                </div>
            </div>
            <div class="chat-footer">
                <input type="text" placeholder="Type your question..." id="chat-input">
                <button id="send-chat">Send</button>
            </div>
        </div>
    `;

    document.body.appendChild(chatWidget);

    // Styling for the chatbot (could also be in main.css)
    const style = document.createElement('style');
    style.textContent = `
        .chatbot-widget {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 9999;
            font-family: inherit;
        }
        .chat-launcher {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 20px;
            border-radius: 50px;
            cursor: pointer;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            background: white;
            transition: all 0.3s ease;
        }
        .chat-launcher:hover { transform: translateY(-3px); }
        .launcher-avatar { width: 35px; height: 35px; border-radius: 50%; object-fit: cover; }
        .online-indicator { width: 10px; height: 10px; background: #4ADE80; border-radius: 50%; border: 2px solid white; position: absolute; left: 45px; bottom: 10px; }
        .launcher-text { font-weight: 600; font-size: 0.9rem; color: #1A2B3C; }
        
        .chat-window {
            display: none;
            position: absolute;
            bottom: 70px;
            right: 0;
            width: 350px;
            height: 450px;
            background: white;
            border-radius: 15px;
            flex-direction: column;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        .chat-window.active { display: flex; }
        .chat-header { background: #1A2B3C; color: white; padding: 15px; display: flex; justify-content: space-between; align-items: center; }
        .agent-info { display: flex; align-items: center; gap: 10px; }
        .window-avatar { width: 40px; height: 40px; border-radius: 50%; }
        .agent-name-status { display: flex; flex-direction: column; }
        .agent-name-status .agent-name { font-weight: 700; font-size: 0.9rem; }
        .agent-name-status .status { font-size: 0.7rem; opacity: 0.8; }
        .close-chat { background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; }
        
        .chat-body { flex: 1; padding: 15px; overflow-y: auto; background: #F9FAFB; }
        .message { margin-bottom: 12px; max-width: 85%; padding: 10px 15px; border-radius: 15px; font-size: 0.9rem; line-height: 1.4; }
        .message.system { background: white; border: 1px solid #E5E7EB; color: #374151; align-self: flex-start; }
        .message.user { background: #C5A059; color: white; align-self: flex-end; margin-left: auto; }
        
        .chat-footer { padding: 15px; border-top: 1px solid #E5E7EB; display: flex; gap: 10px; }
        .chat-footer input { flex: 1; border: 1px solid #D1D5DB; padding: 8px 12px; border-radius: 20px; font-size: 0.9rem; }
        .chat-footer button { background: #1A2B3C; color: white; border: none; padding: 8px 15px; border-radius: 20px; cursor: pointer; font-weight: 600; }
    `;
    document.head.appendChild(style);

    // Interactivity
    const launcher = chatWidget.querySelector('.chat-launcher');
    const window = chatWidget.querySelector('.chat-window');
    const closeBtn = chatWidget.querySelector('.close-chat');
    const input = chatWidget.querySelector('#chat-input');
    const sendBtn = chatWidget.querySelector('#send-chat');
    const chatBody = chatWidget.querySelector('#chat-messages');

    launcher.addEventListener('click', () => window.classList.add('active'));
    closeBtn.addEventListener('click', () => window.classList.remove('active'));

    const sendMessage = () => {
        const text = input.value.trim();
        if (!text) return;

        // Add user message
        const userMsg = document.createElement('div');
        userMsg.className = 'message user';
        userMsg.innerHTML = `<p>${text}</p>`;
        chatBody.appendChild(userMsg);
        input.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;

        // Simulated AI response
        setTimeout(() => {
            const aiMsg = document.createElement('div');
            aiMsg.className = 'message system';
            aiMsg.innerHTML = `<p>Thanks for your question! Keith is an expert in ${text.includes('IUL') ? 'Indexed Universal Life' : 'custom insurance strategies'}. Would you like to schedule a quick 15-minute call to discuss this further?</p>`;
            chatBody.appendChild(aiMsg);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    };

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
}
