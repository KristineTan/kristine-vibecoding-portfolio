// Interactive Portfolio Script
document.addEventListener('DOMContentLoaded', function() {
    const hotspots = document.querySelectorAll('.hotspot');
    const infoPanel = document.getElementById('infoPanel');
    const infoContent = document.getElementById('infoContent');
    const closeBtn = document.getElementById('closeBtn');
    const infoData = document.getElementById('infoData');

    // Hotspot click handlers
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', function() {
            const infoType = this.getAttribute('data-info');
            showInfo(infoType);
        });

        // Add hover effect sound (optional)
        hotspot.addEventListener('mouseenter', function() {
            this.querySelector('.pulse').style.animationDuration = '1s';
        });

        hotspot.addEventListener('mouseleave', function() {
            this.querySelector('.pulse').style.animationDuration = '2s';
        });
    });

    // Close button handler
    closeBtn.addEventListener('click', closeInfoPanel);

    // Close on overlay click
    document.body.addEventListener('click', function(e) {
        if (e.target === document.body && document.body.classList.contains('modal-open')) {
            closeInfoPanel();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && infoPanel.classList.contains('active')) {
            closeInfoPanel();
        }
    });

    function showInfo(type) {
        const dataSection = infoData.querySelector(`[data-section="${type}"]`);

        if (dataSection) {
            infoContent.innerHTML = dataSection.innerHTML;
            infoPanel.classList.add('active');
            document.body.classList.add('modal-open');

            // Add entrance animation to content
            setTimeout(() => {
                infoContent.style.animation = 'fadeIn 0.5s ease-out';
            }, 100);

            // Add event listeners for internal navigation links
            attachLinkListeners();
        }
    }

    function attachLinkListeners() {
        const paradoxLinks = infoContent.querySelectorAll('[data-link]');
        paradoxLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetSection = this.getAttribute('data-link');
                showInfo(targetSection);
            });
        });
    }

    // Content navigation handlers
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(navItem => {
        navItem.addEventListener('click', function(e) {
            e.preventDefault();
            const infoType = this.getAttribute('data-info');
            showInfo(infoType);
        });
    });

    function closeInfoPanel() {
        infoPanel.classList.remove('active');
        document.body.classList.remove('modal-open');
        infoContent.style.animation = '';
    }

    // Particle effect on click (optional enhancement)
    function createParticles(x, y) {
        const colors = ['#00ffc8', '#667eea', '#764ba2', '#ff6b9d'];

        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.width = '8px';
            particle.style.height = '8px';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';

            document.body.appendChild(particle);

            const angle = (Math.PI * 2 * i) / 15;
            const velocity = 2 + Math.random() * 3;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;

            animateParticle(particle, vx, vy);
        }
    }

    function animateParticle(particle, vx, vy) {
        let x = parseFloat(particle.style.left);
        let y = parseFloat(particle.style.top);
        let opacity = 1;

        function update() {
            x += vx;
            y += vy;
            opacity -= 0.02;

            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.opacity = opacity;

            if (opacity > 0) {
                requestAnimationFrame(update);
            } else {
                particle.remove();
            }
        }

        requestAnimationFrame(update);
    }

    // Add particle effect to hotspot clicks
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            createParticles(x, y);
        });
    });

    // Add subtle parallax effect to the main image
    const mainImage = document.getElementById('mainImage');

    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;

        if (mainImage) {
            mainImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });

    // Smooth scroll reveal animation for hotspots
    setTimeout(() => {
        hotspots.forEach((hotspot, index) => {
            setTimeout(() => {
                hotspot.style.animation = 'fadeIn 0.5s ease-out forwards';
            }, index * 100);
        });
    }, 500);

    console.log('🧪 Vibe Coding Lab Interactive Portfolio Loaded!');
    console.log('Click on the glowing hotspots to explore!');
});
