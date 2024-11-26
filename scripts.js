const santaImage = document.getElementById('santa-image');

// Change the Santa image glow effect dynamically
setInterval(() => {
    santaImage.style.boxShadow = `0 0 30px ${getRandomColor()}`;
}, 1000);

function getRandomColor() {
    const colors = ['#e74c3c', '#f1c40f', '#1abc9c', '#8e44ad'];
    return colors[Math.floor(Math.random() * colors.length)];
}
