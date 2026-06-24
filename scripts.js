document.addEventListener('DOMContentLoaded', () => {

    // --- INFINITE KINETIC SCROLL ENGINE ---
    const marqueeStrip = document.querySelector('.strip-left');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (marqueeStrip) {
            // Smoothly tracks translation delta values without stuttering frames
            marqueeStrip.style.transform = `translateX(${scrollPosition * -0.4}px)`;
        }
    });

    // --- SKILLS OBSERVER MATRIX ENGINE ---
    const skillCells = document.querySelectorAll('.skill-cell');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    };

    const cellsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                // Creates clean cascading staggered animation delays on viewport entry
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, idx * 60);
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    skillCells.forEach(cell => cellsObserver.observe(cell));

    // --- LERP POWERED MAGNETIC OVERLAY MOUSE TRACKING ---
    const cursorFrame = document.getElementById('cursor');
    let targetX = 0, targetY = 0;
    let computedX = 0, computedY = 0;

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    const runRenderLoop = () => {
        // Linear interpolation math step calculates tracking drag vectors smoothly
        computedX += (targetX - computedX) * 0.12;
        computedY += (targetY - computedY) * 0.12;

        if (cursorFrame) {
            cursorFrame.style.transform = `translate3d(${computedX}px, ${computedY}px, 0)`;
        }
        requestAnimationFrame(runRenderLoop);
    };

    // Initialize pipeline loop execution
    runRenderLoop();
});