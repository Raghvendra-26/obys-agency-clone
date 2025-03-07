function loadingAnimation(){
    var tl = gsap.timeline();

    tl.from(".line h1",{
        y:150,
        stagger:0.25,
        duration:0.6,
        delay:0.5
    });

    tl.from("#line1-part1",{
        opacity:0,
        onStart: function(){
            var h5timer = document.querySelector("#line1-part1 h5")
            var grow = 0
            let interval = setInterval(() => {
                if(grow < 100){
                    h5timer.innerHTML = grow++;
                } else {
                    h5timer.innerHTML = grow;
                    clearInterval(interval);  // Stop the timer at 100
                }
            }, 30);
        }
    });

    tl.to('.line h2',{
        animationName: "anime",
        opacity: 1
    });

    tl.to('#loader',{
        opacity: 0,
        duration: 0.2,
        delay: 3.2
    });

    tl.from("#page1",{
        delay:0.2,
        yPercent:100,
        opacity:0,
        duration:0.4,
        ease: Power4.easeOut
    });

    tl.to("#loader",{
        display: "none"
    });

    tl.from("#nav",{
        opacity:0
    });

    tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero3 h3,#hero4 h1",{
        y:140,
        stagger: 0.1
    });
}

function cursorAnimation(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#crsr",{
            left: dets.x,
            top: dets.y,
            duration: 0.2,  // Smooth movement
            ease: "power2.out"
        });
    });

    if (typeof Shery !== "undefined" && Shery.makeMagnet) {
        Shery.makeMagnet("#nav-part2 h4");
    } else {
        console.warn("Shery library is missing!");
    }
}

loadingAnimation();
// cursorAnimation();
