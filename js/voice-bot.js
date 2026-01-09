/* voice-bot.js - AI Voice Bot Integration */

document.addEventListener('DOMContentLoaded', () => {
    initVoiceBot();
});

function initVoiceBot() {
    const voiceBtns = document.querySelectorAll('.voice-bot-trigger');

    voiceBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            startVoiceSession();
        });
    });
}

function startVoiceSession() {
    // This is a placeholder for the actual AI Voice Bot integration (e.g., Vapi, Retell, or custom WebRTC)
    console.log('Initiating AI Voice Bot Session...');

    // Create a simple UI feedback for the voice session
    const statusOverlay = document.createElement('div');
    statusOverlay.className = 'voice-overlay glass flex-center';
    statusOverlay.innerHTML = `
        <div class="voice-card text-center p-4 rounded shadow">
            <div class="pulse-ring mb-2"></div>
            <h3>Connecting to Keith's AI Voice Assistant...</h3>
            <p>Please ensure your microphone is enabled.</p>
            <button class="btn btn-outline mt-2" onclick="this.parentElement.parentElement.remove()">End Call</button>
        </div>
    `;

    document.body.appendChild(statusOverlay);

    // Inline styling for the overlay
    const style = document.createElement('style');
    style.textContent = `
        .voice-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(26, 43, 60, 0.9);
            z-index: 10000;
            display: flex; align-items: center; justify-content: center;
        }
        .voice-card { background: white; max-width: 400px; width: 90%; }
        .pulse-ring {
            width: 80px; height: 80px;
            background: var(--accent);
            border-radius: 50%;
            margin: 0 auto;
            animation: pulse-animation 2s infinite;
        }
        @keyframes pulse-animation {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(197, 160, 89, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 20px rgba(197, 160, 89, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(197, 160, 89, 0); }
        }
    `;
    document.head.appendChild(style);
}
