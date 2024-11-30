function page1Animation() {
        var tl = gsap.timeline()

    tl.from("nav h1, nav h4, nav button", {
        y: -15,
        opacity: 0,
        delay: 0.5,
        duration: 0.7,
        stagger:0.15
    })

    tl.from(".center-part1 h1", {
        x: -200,
        opacity:0,
        duration:0.4
    })
    tl.from(".center-part1 p", {
        x: -100,
        opacity:0,
        duration:0.3
    })
    tl.from(".center-part1 button", {
        opacity:0,
        duration:0.2
    })
    tl.from(".center-part2 img", {
        opacity:0,
        duration: 0.5,
        x:200
    }, "-=0.5")
    tl.from(".section1-bottom img", {
        opacity:0,
        y:-30,
        stagger:0.15,
        duration:0.6
    })
}

page1Animation()

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger:".section2",
        scroller: "body",
        start:"top 50%",
        end: "top 0",
        scrub: 2,
    }
})

tl2.from(".services", {
    y:30,
    duration:0.5,
    opacity:0
})
tl2.from(".elem.line1.left", {
    x:-300,
    opacity:0,
    duration:1,
    delay:0.5
})
tl2.from(".elem.line1.right", {
    x:300,
    opacity:0,
    duration:1
}, "-=1")
tl2.from(".elem.line2.left", {
    x:-300,
    opacity:0,
    duration:1
})
tl2.from(".elem.line2.right", {
    x:300,
    opacity:0,
    duration:1
}, "-=1")

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger:".section3",
        scroller: "body",
        start:"top 50%",
        end: "top 0",
        markers:false,
        scrub: 2,
    }
})
tl3.from(".box", {
    y:30,
    opacity:0,
    duration:0.4
})
tl3.from(".box .part-1 h1", {
    x:-100,
    opacity:0,
    duration:0.4
})
tl3.from(".box .part-1 p", {
    x:-100,
    opacity:0,
    duration:0.4
})
tl3.from(".box .part-1 button", {
    x:-100,
    opacity:0,
    duration:0.4
})
tl3.from(".box .part-2 , .ri-contacts-line", {
    x:200,
    opacity:0,
    duration:0.4
},"-=0.7")
tl3.from(".cases h1", {
    x:-200,
    opacity:0,
    duration:0.2
})
tl3.from(".cases p", {
    x:200,
    opacity:0,
    duration:0.2
},"-=0.2")
