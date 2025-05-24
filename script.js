// Update current time
function updateTime() {
    const timeElement = document.getElementById('currentTime');
    const now = new Date();
    timeElement.textContent = `Current time: ${now.toLocaleTimeString()}`;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call

// Add click event for the CTA button
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Open the chat bubble when the button is clicked
            const chatBubble = document.querySelector('df-messenger-chat-bubble');
            if (chatBubble) {
                chatBubble.click();
            }
        });
    }
});