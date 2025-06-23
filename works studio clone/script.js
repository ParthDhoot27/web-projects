const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

function loading(){
    
const tl = gsap.timeline();

//loading page
tl.to(".yellow",{
    ease:"expo.out",
    y:-760,
    duration: .4,
    delay:.1,
})
tl.to(".black",{
    y:-760,
    ease:"expo.out",
    duration: .5,
    delay : .1
},"loaderlast")
tl.to(".loader p",{
    opacity:0 ,
    delay :.2
},"loaderlast")

tl.to(".loader",{
    display: none ,
})
}

loading();