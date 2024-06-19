document.addEventListener('DOMContentLoaded', function() {
    // Check if the user has closed the sticky component before
    const stickyClosed = localStorage.getItem('stickyClosed');
    
    if (!stickyClosed) {
        createStickyComponent();
    }

    function createStickyComponent() {
        const stickyContainer = document.createElement('div');
        stickyContainer.className = 'sticky-container';
        
        const message = document.createElement('span');
        message.textContent = 'Download Aplikasi Kami';

        const googleButton = document.createElement('button');
        googleButton.textContent = 'Google Play Store';
        googleButton.onclick = function() {
            window.location.href = 'https://play.google.com/';
        };

        const appleButton = document.createElement('button');
        appleButton.textContent = 'Apple App Store';
        appleButton.onclick = function() {
            window.location.href = 'https://www.apple.com/id/app-store/';
        };

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.className = 'close-btn';
        closeButton.onclick = function() {
            document.body.removeChild(stickyContainer);
            localStorage.setItem('stickyClosed', 'true');
        };

        stickyContainer.appendChild(message);
        stickyContainer.appendChild(googleButton);
        stickyContainer.appendChild(appleButton);
        stickyContainer.appendChild(closeButton);

        document.body.appendChild(stickyContainer);
    }

    // Light/Dark mode toggle
    const modeToggle = document.createElement('button');
    modeToggle.textContent = 'Toggle Dark Mode';
    modeToggle.style.position = 'fixed';
    modeToggle.style.bottom = '20px';
    modeToggle.style.right = '20px';
    modeToggle.style.padding = '10px';
    modeToggle.style.zIndex = '1000';
    modeToggle.onclick = function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    };
    document.body.appendChild(modeToggle);

    // Check for saved mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});

    
