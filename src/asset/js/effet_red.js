gsap.registerPlugin(ScrollTrigger);

let effectSpan = document.querySelectorAll('.effet--container');
effectSpan.forEach((el)=>{    
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: el.parentNode.parentNode,
            pin: true,   // pin the trigger element while active
            start: "top top+=200px", // when the top of the trigger hits the top of the viewport
            end: "bottom +=25%", // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
    });

    tl.to(el, {"--width_effet": "100%"});

})



