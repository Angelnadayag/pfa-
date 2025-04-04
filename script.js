let image = document.getElementById('birdie');
let currentPositionX = 50;
let currentPositionY = 50;

image.style.position = 'absolute'; 

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        currentPositionX -= 2;
    } else if (e.key === 'ArrowRight') {
        currentPositionX += 2;
    } else if (e.key === 'ArrowUp') {
        currentPositionY -= 2;
    } else if (e.key === 'ArrowDown') {
        currentPositionY += 2;
    }

    currentPositionX = Math.max(0, Math.min(100, currentPositionX));
    currentPositionY = Math.max(0, Math.min(100, currentPositionY));

    image.style.left = currentPositionX + 'vw';
    image.style.top = currentPositionY + 'vh';
});
