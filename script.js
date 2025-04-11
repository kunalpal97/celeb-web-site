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
        balloon.style.animationDuration = `${5 + Math.random() * 3}s`;
        balloon.style.setProperty('--direction', Math.random() > 0.5 ? 1 : -1);
        balloonsContainer.appendChild(balloon);
        setTimeout(() => balloon.remove(), 9000);
    }

    setInterval(createBalloon, 400); // Even more balloons!

    // Confetti effect
    function createConfetti() {
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.background = ['#ffeb3b', '#ff4081', '#4caf50', '#2196f3', '#e91e63'][Math.floor(Math.random() * 5)];
            confetti.style.animationDuration = `${3 + Math.random() * 3}s`;
            confetti.style.setProperty('--direction', Math.random() > 0.5 ? 1 : -1);
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 6000);
        }
    }

    // Firework effect (bump foot!)
    function createFirework() {
        for (let i = 0; i < 30; i++) {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            firework.style.left = `${Math.random() * 100}vw`;
            firework.style.top = `${Math.random() * 100}vh`;
            firework.style.background = `radial-gradient(circle, ${['#ffeb3b', '#ff4081', '#4caf50', '#e91e63'][Math.floor(Math.random() * 4)]}, transparent)`;
            firework.style.animationDuration = `${1 + Math.random() * 0.5}s`;
            document.body.appendChild(firework);
            setTimeout(() => firework.remove(), 2000);
        }
    }

    // Button click handler
    celebrateBtn.addEventListener('click', () => {
        messageDiv.textContent = 'Happy Birthday, Kusum ! Janmdin Mubarak! 🥳🎉';
        messageDiv.classList.add('show');
        createConfetti();
        createFirework();
        birthdaySong.play().catch(() => console.log('Audio play blocked')); // Fallback for mobile
        celebrateBtn.style.transform = 'scale(1.5)';
        celebrateBtn.textContent = 'Dhoom Machale! 🎈';
        setTimeout(() => {
            celebrateBtn.style.transform = 'scale(1)';
        }, 600);
    });
});