document.addEventListener('DOMContentLoaded', function() {
    // Initialize Locomotive Scroll if #main exists
    if (document.querySelector('#main')) {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('#main'),
            smooth: true
        });
    }

    // Execute initial page animations
    firstPageAnim();

    // Activate mouse follower effect
    circleChaptakaro();

    // Image opacity and visibility animation for .elem on mouse events
    document.querySelectorAll('.elem').forEach(function(elem) {
        elem.addEventListener('mousemove', function(details) {
            var diff = details.clientY - elem.getBoundingClientRect().top;
            
            
            
            const img = elem.querySelector("img");
            gsap.to(img, {
                opacity: 1,
                ease: "power1.out",
                top:diff,
                left:details.clientX,
            });
            img.style.display = "block"; // Make the image visible
        });

        elem.addEventListener('mouseleave', function() {
            const img = elem.querySelector("img");
            gsap.to(img, {
                opacity: 0,
                duration: 0.5,
                ease: "power1.out",
                onComplete: () => {
                    img.style.display = "none"; // Hide the image again
                }
            });
        });
    });
});

function firstPageAnim() {
    // GSAP timeline for animations, assuming GSAP library is available
    if (typeof gsap !== 'undefined') {
        let tl = gsap.timeline();
        tl.from("#nav", {
            y: '-10',
            opacity: 0,
            duration: 2,
            ease: "expo.out",
        })
        .to(".boundingelem", {
            y: 0,
            duration: 2,
            ease: "expo.out",
            delay: -1,
            stagger: 0.3,
        })
        .from("#herofooter", {
            y: '-10',
            opacity: 0,
            duration: 2,
            ease: "expo.out",
            delay: -1,
        });
    }
}

function circleChaptakaro() {
    // Mouse follower effect
    const minicircle = document.querySelector("#minicircle");
    if (minicircle) {
        window.addEventListener("mousemove", function(e) {
            minicircle.style.transform = `translate(${e.clientX - minicircle.offsetWidth / 2}px, ${e.clientY - minicircle.offsetHeight / 2}px)`;
        });
    }
}


