const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Handle the "Yes" button click
yesBtn.addEventListener('click', () => {
    alert("Happy Birthday to the most amazing big sister!! 🎉 Your kindness,, laughter,, and love make every day brighter. Wishing you a day as wonderful and special as you are! 💕🎂");
});

// Move the "No" button when hovered over
function moveNoButton() {
    const container = document.querySelector('.container');

    // Get container dimensions
    const maxWidth = container.offsetWidth - noBtn.offsetWidth;
    const maxHeight = container.offsetHeight - noBtn.offsetHeight;

    // Generate random positions
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Attach event listener to move the button on hover
noBtn.addEventListener('mouseenter', moveNoButton);