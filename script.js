document.addEventListener('DOMContentLoaded', () => {
    const balloonsContainer = document.querySelector('.balloons');
    const messageDiv = document.getElementById('message');
    const celebrateBtn = document.querySelector('.celebrate-btn');
    const birthdaySong = document.getElementById('birthday-song');

    // Spawn balloons
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.animationDuration = `${4 + Math.random() * 2}s`;
        balloon.style.setProperty('--direction', Math.random() > 0.5 ? 1 : -1);
        balloonsContainer.appendChild(balloon);
        setTimeout(() => balloon.remove(), 7000);
    }

    setInterval(createBalloon, 300); // Faster balloons!

    // Confetti effect
    function createConfetti() {
        for (let i = 0; i < 200; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.background = ['#ffd700', '#ff4500', '#00ff7f', '#1e90ff'][Math.floor(Math.random() * 4)];
            confetti.style.animationDuration = `${2 + Math.random() * 2}s`;
            confetti.style.setProperty('--direction', Math.random() > 0.5 ? 1 : -1);
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 5000);
        }
    }

    // Firework effect
    function createFirework() {
        for (let i = 0; i < 40; i++) {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            firework.style.left = `${Math.random() * 100}vw`;
            firework.style.top = `${Math.random() * 100}vh`;
            firework.style.background = `radial-gradient(circle, ${['#ffd700', '#ff4500', '#00ff7f', '#1e90ff'][Math.floor(Math.random() * 4)]}, transparent)`;
            firework.style.animationDuration = `${0.8 + Math.random() * 0.4}s`;
            document.body.appendChild(firework);
            setTimeout(() => firework.remove(), 1500);
        }
    }

    // Button click handler
    celebrateBtn.addEventListener('click', () => {
        messageDiv.textContent = 'Happy Birthday, XYZ RCT!';
        messageDiv.classList.add('show');
        createConfetti();
        createFirework();
        birthdaySong.play().catch(() => console.log('Audio play blocked'));
        celebrateBtn.style.transform = 'scale(1.5)';
        celebrateBtn.textContent = 'Party Time!';
        setTimeout(() => {
            celebrateBtn.style.transform = 'scale(1)';
        }, 500);
    });
});