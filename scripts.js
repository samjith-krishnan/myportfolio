const nav = document.querySelector('.tabs-container');
const offset = nav.offsetTop;

window.addEventListener('scroll', () => {
    if (window.scrollY >= offset) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});


document.addEventListener('scroll', () => {
    const scrollingText = document.querySelector('.scrolling-text');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        scrollingText.style.transform = `translateX(${scrollPosition * -0.4}px)`; // Adjust multiplier for speed
    });
});

document.addEventListener('scroll', () => {
    const scrollingText = document.querySelector('.scrolling-text1');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        scrollingText.style.transform = `translateX(${scrollPosition * -0.4}px)`; // Adjust multiplier for speed
    });
});


document.addEventListener('scroll', () => {
    const scrollingText = document.querySelector('.text-horizondal');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        scrollingText.style.transform = `translateX(${scrollPosition * 0.2}px)`; // Adjust multiplier for speed
    });
});





const skillCards = document.querySelectorAll('.skill-card');


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          
            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 200); 
        }
        else {
            
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 1, 
});

skillCards.forEach(card => observer.observe(card));


const cursor = document.getElementById('cursor');
    let mouseX = 0, mouseY = 0;

    // Update mouse coordinates
    document.addEventListener('mousemove', (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });

    // Smoothly move the custom cursor
    const followCursor = () => {
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      requestAnimationFrame(followCursor); // Smooth animation loop
    };

    // Start animation loop
    followCursor();