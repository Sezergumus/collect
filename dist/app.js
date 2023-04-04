// Variables
var activeIndex;
var prevIndex = 1;
const trTl = new TimelineMax({delay: 0.5});
const enTl = new TimelineMax({delay: 0.5}); 
const menuTl = new TimelineMax({delay: 0.5});
const contactTl = new TimelineMax({delay: 0.5});
const gif=document.getElementById('logo');
var delay = 2000; //milliseconds
var animationIsFinished = false;
video = document.getElementById('openingVideo')
var w = screen.width;

if(w < 751){
  restartHeaderGIF()
  gsap.to('.s1', {display:'none'})
  gsap.to('.s3', {display:'none'})
  gsap.to('.s10', {display:'none'})
  gsap.to('.s11', {display:'none'})
  gsap.to('.degrade', {opacity:'1'})
  gsap.to('.logo', {opacity:'1'})
  // stopVideo()
}

window.onresize = function() {
  w = screen.width;
  // refresh page if width is larger than 750px
  if(w > 750){
    location.reload();
  }
};

// Restart Gif
function restartHeaderGIF(){
  gif.src=gif.getAttribute('src');
}

const introGIF = document.getElementsByClassName('intro-gif')[0];
const sprayGIFS = document.getElementsByClassName('sprayGIF') // List

function restartSprayGIFS(){
  introGIF.src=introGIF.getAttribute('src');
  Array.from(sprayGIFS).forEach(element => {
    element.src=element.getAttribute('src')
  })
}

// Enable Scrolling
function enableScroll(){
  fullpage_api.setAllowScrolling(true);
  console.log('scroll enabled')
}

// Disable Scrolling
function disableScroll(){
  fullpage_api.setAllowScrolling(false);
  console.log('scroll disabled')
}

// Fullpage
new fullpage('#fullPage', {
    autoScrolling: true,
    // navigation: true,
    // navigationTooltips: ['', 'heaven', 'stardust', 'wisdom', 'sagrado', 'pieta', 'horizon'],
    controlArrows: true,
    fixedElements: '.degrade',
    afterResize: () => {
        fullpage_api.reBuild();
        console.log('resized')
    },
    afterRender: () => {
      // Set first animations
      if(w<750){

      }
    },
    // Animations
    onLeave: (origin, destination, direction, trigger) =>{
        // Creating timeline to adjust the durations and delay
            prevIndex = origin.index; 
            activeIndex = destination.index;
            console.log(prevIndex, activeIndex)

            console.log(`The previous index is: ${prevIndex}\nAnd the active index is: ${activeIndex}`)
            disableScroll()
            if(w>750){
              switch(destination.index){
                case 0:
                    gsap.to('.logo', 0.5, {opacity:"0"})
                    video.load()
                    video.play()
                    setTimeout(enableScroll, 1800);
                    break;
                case 1: 
                  gsap.from('.sec2-upper-text', {y:"-33%", opacity:"0", duration: "1.2", delay: "0.5"})
                  gsap.from('.sec2-bottom-text', {y:"50%", opacity:"0", duration: "0.6", delay:"1.7"})
                  gsap.to('.logo', {opacity:"1", duration: "0.5"})
                  restartHeaderGIF()
                  setTimeout(enableScroll, 1800);
                  break;
                case 2:
                  gsap.from('.drl-muhur', {y:"120%", opacity:"0", duration:"1", delay:"0.5"})
                  trTl.fromTo('.stt1', {y:"120%", opacity:"0"}, {y:"0%", opacity:"1", duration: "1"})
                  .fromTo('.stt2', {y:"120%", opacity:"0"}, {y:"0%", opacity:"1", duration: "0.8"})
                  .fromTo('.stt3', {y:"100%", opacity:"0"}, {y:"0%", opacity:"1", duration: "0.8"})
                  .fromTo('.stt4', {y:"100%", opacity:"0"}, {y:"0%", opacity:"1", duration: "0.8"})
                  .fromTo('.stt5', {y:"100%", opacity:"0"}, {y:"0%", opacity:"1", duration: "0.8"})
                  .from('.s3-horizon', {x:"-50%", duration: "1", ease: "power3.out"}, "-=1")
                  enTl.fromTo('.set1', {y:"120%", opacity:"0"}, {y:"0%", opacity:"1", duration: "1.2"})
                  .fromTo('.set2', {y:"120%", opacity:"0"}, {y:"0%", opacity:"1", duration: "1"})
                  .fromTo('.set3', {y:"100%", opacity:"0"}, {y:"0%", opacity:"1", duration: "1"})
                  .fromTo('.set4', {y:"100%", opacity:"0"}, {y:"0%", opacity:"1", duration: "1"})
                  .fromTo('.s3-stardust', {x:"100%"} ,{x:"0%", duration: "1", ease: "power3.out"}, "-=1")
                  gsap.to('.s3-left-degrade', 0.5, {opacity:"1"})
                  gsap.to('.s3-right-degrade', 0.5, {opacity:"1"})
                  gsap.to('.degrade', 0.5, {opacity:"0"})
                  setTimeout(enableScroll, 1800);
                  break;
                case 3:
                    gsap.fromTo('.heaven', {y:"120%", opacity:"0"}, {y:"50%", opacity:"1", duration:"1.2", delay:"0.5"})
                    gsap.fromTo('.heavenText', {y:"-33%", opacity:"0"}, {y:"0%", opacity:"1", duration:"0.6", delay:"1.7"})
                    gsap.to('.degrade', 0.5, {opacity:"1"})
                    setTimeout(enableScroll, 1800);
                    break;
                case 4:
                    gsap.fromTo('.stardust', {y:"120%", opacity:"0"}, {y:"50%", opacity:"1", duration:"1.2", delay:"0.5"})
                    gsap.fromTo('.stardustText', {y:"-33%", opacity:"0"}, {y:"0%", opacity:"1", duration:"0.6", delay:"1.7"})
                    setTimeout(enableScroll, 1800);
                    break;
                case 5:
                    gsap.fromTo('.wisdom', {y:"120%", opacity:"0"}, {y:"50%", opacity:"1", duration:"1.2", delay:"0.5"})
                    gsap.fromTo('.wisdomText', {y:"-33%", opacity:"0"}, {y:"0%", opacity:"1", duration:"0.6", delay:"1.7"})
                    setTimeout(enableScroll, 1800);
                    break;
                case 6:
                    gsap.fromTo('.sagrado', {y:"120%", opacity:"0"}, {y:"50%", opacity:"1", duration:"1.2", delay:"0.5"})
                    gsap.fromTo('.sagradoText', {y:"-33%", opacity:"0"}, {y:"0%", opacity:"1", duration:"0.6", delay:"1.7"})
                    setTimeout(enableScroll, 1800);
                    break;
                case 7:
                    gsap.fromTo('.pieta', {y:"120%", opacity:"0"}, {y:"50%", opacity:"1", duration:"1.2", delay:"0.5"})
                    gsap.fromTo('.pietaText', {y:"-33%", opacity:"0"}, {y:"0%", opacity:"1", duration:"0.6", delay:"1.7"})
                    setTimeout(enableScroll, 1800);
                    break;
                case 8:
                    gsap.fromTo('.horizon', {y:"120%", opacity:"0"}, {y:"50%", opacity:"1", duration:"1.2", delay:"0.5"})
                    gsap.fromTo('.horizonText', {y:"-33%", opacity:"0"}, {y:"0%", opacity:"1", duration:"0.6", delay:"1.7"})
                    setTimeout(enableScroll, 1800);
                    break;
                case 9: 
                    gsap.fromTo('.horizon-big', {y:"-100%", opacity:"0"}, {y:"0%", opacity: "100%", duration:"1.5", delay:"0.5"})
                    gsap.fromTo('.light-source', {opacity:"0"}, {opacity: "1", duration:"0.1", delay:"2"})
                    gsap.fromTo('.degrade', {opacity:"1"}, {opacity:"0", duration:"0.1", delay:"2.1"})
                    setTimeout(enableScroll, 1800);
                    break;
                case 10: 
                    gsap.to('.degrade', {opacity: "0"})
                    restartSprayGIFS();
                    setTimeout(enableScroll, 1800);
                    break;
              }
              if((prevIndex === 2)){
                trTl.clear();
                enTl.clear();
                gsap.to('.stt1', {opacity: "0", duration: "0.5"});
                gsap.to('.stt2', {opacity: "0", duration: "0.5"});
                gsap.to('.stt3', {opacity: "0", duration: "0.5"});
                gsap.to('.stt4', {opacity: "0", duration: "0.5"});
                gsap.to('.stt5', {opacity: "0", duration: "0.5"});
                gsap.to('.set1', {opacity: "0", duration: "0.5"});
                gsap.to('.set2', {opacity: "0", duration: "0.5"});
                gsap.to('.set3', {opacity: "0", duration: "0.5"});
                gsap.to('.set4', {opacity: "0", duration: "0.5"});
                gsap.to('.s3-left-degrade', 0.5, {opacity:"0"})
                gsap.to('.s3-right-degrade', 0.5, {opacity:"0"})
              }
              if((prevIndex === 9) && (activeIndex === 8)){
                console.log("works")
                gsap.to('.degrade', 0.5, {opacity:"0", opacity:"1"})
              }
            } else if(w < 750){
              switch(destination.index){
                case 0:
                  gsap.fromTo('.sec2-upper-text', {y:"-33%", opacity:"0"}, {y:"0%", opacity: "100%", duration:"1.2", delay:"0.5"})
                  gsap.fromTo('.sec2-bottom-text', {y:"50%", opacity:"0"}, {y:"0%", opacity: "100%", duration:"0.6", delay:"1.7"})
                    setTimeout(enableScroll, 1800);
                    break;
                case 1:
                    gsap.fromTo('.heaven', {y:"120%", opacity:"0"}, {y:"50%", opacity: "100%", duration: "1.2", delay:"0.5"})
                    gsap.fromTo('.heavenText', {y:"-33%", opacity:"0"}, {y:"0%", opacity: "100%", duration:"0.6", delay:"1.7"})
                    gsap.to('.degrade', {opacity:"0", opacity:"1", duration:"0.5"})
                    setTimeout(enableScroll, 1800);
                    break;
                case 2:
                    gsap.fromTo('.stardust', {y:"120%", opacity:"0"}, {y:"50%", opacity: "100%", duration: "1.2", delay:"0.5"})
                    gsap.fromTo('.stardustText', {y:"-33%", opacity:"0"}, {y:"0%", opacity: "100%", duration:"0.6", delay:"1.7"})
                    setTimeout(enableScroll, 1800);
                    break;
                case 3:
                    gsap.fromTo('.wisdom', {y:"120%", opacity:"0"}, {y:"50%", opacity: "100%", duration: "1.2", delay:"0.5"})
                    gsap.fromTo('.wisdomText', {y:"-33%", opacity:"0"}, {y:"0%", opacity: "100%", duration:"0.6", delay:"1.7"})
                    setTimeout(enableScroll, 1800);
                    break;
                case 4:
                    gsap.fromTo('.sagrado', {y:"120%", opacity:"0"}, {y:"50%", opacity: "100%", duration: "1.2", delay:"0.5"})
                    gsap.fromTo('.sagradoText', {y:"-33%", opacity:"0"}, {y:"0%", opacity: "100%", duration:"0.6", delay:"1.7"})
                    setTimeout(enableScroll, 1800);
                    break;
                case 5:
                    gsap.fromTo('.pieta', {y:"120%", opacity:"0"}, {y:"50%", opacity: "100%", duration: "1.2", delay:"0.5"})
                    gsap.fromTo('.pietaText', {y:"-33%", opacity:"0"}, {y:"0%", opacity: "100%", duration:"0.6", delay:"1.7"})
                    setTimeout(enableScroll, 1800);
                    break;
                case 6:
                    gsap.fromTo('.horizon', {y:"120%", opacity:"0"}, {y:"50%", opacity: "100%", duration: "1.2", delay:"0.5"})
                    gsap.fromTo('.horizonText', {y:"-33%", opacity:"0"}, {y:"0%", opacity: "100%", duration:"0.6", delay:"1.7"})
                    setTimeout(enableScroll, 1800);
                    break;
              }
              if((prevIndex === 6) && (activeIndex === 5)){
                console.log("works")
                gsap.to('.degrade', 0.5, {opacity:"0", opacity:"1"})
              }
  
              if((prevIndex === 5) && (activeIndex === 6)){
                console.log("works")
                gsap.to('.degrade', {duration: 0.5, delay:1.6, opacity: 0})
              }
              
              if((prevIndex === 6) && (activeIndex === 7)){
                console.log("works")
                gsap.to('.degrade', {display: "none"})
              }
  
              if((prevIndex === 7) && (activeIndex === 6)){
                console.log("works")
                gsap.to('.degrade', {display: "block"})
              }  
            }
    }
})

// Burger Menu
const fullPageTween = gsap.to(".social-menu", {duration: 1, visibility: "visible", reversed: true});;

sendIt = () => {
  fullpage_api.silentMoveTo(2)
  gsap.to("#fullPage", {duration: 1, left: "-100vw"});
  gsap.to(".container", {duration: 0.2, opacity: "0"});
  gsap.to('.degrade', {duration: 1, left:'-100vw'})
  gsap.to(".menu-container", {duration: 0.5, right: "-100%"});
  gsap.fromTo(".splide", {opacity: "0", x:"-100%"} ,{x:"0", opacity: "1", duration:1, delay:".75", onComplete(){
    Autoplay.play();
  }});
  menuTl.fromTo('.menu-list-contact li:nth-child(1)', {opacity: "0", y:"100%"}, {y:"0", opacity: "1", duration:0.75, delay:"1"})
  .fromTo('.menu-list-contact li:nth-child(2)', {opacity: "0", y:"100%"}, {y:"0", opacity: "1", duration:0.75})
  .fromTo('.menu-list-contact li:nth-child(3)', {opacity: "0", y:"100%"}, {y:"0", opacity: "1", duration:0.75})
  contactTl.fromTo('.menu-list li:nth-child(1)', {opacity: "0", y:"100%"}, {y:"0", opacity: "1", duration:0.75, delay:"1"})
  .fromTo('.menu-list li:nth-child(2)', {opacity: "0", y:"100%"}, {y:"0", opacity: "1", duration:0.75})
  .fromTo('.menu-list li:nth-child(3)', {opacity: "0", y:"100%"}, {y:"0", opacity: "1", duration:0.75})
  .fromTo('.menu-list li:nth-child(4)', {opacity: "0", y:"100%"}, {y:"0", opacity: "1", duration:0.75})
  .fromTo('.menu-list li:nth-child(5)', {opacity: "0", y:"100%"}, {y:"0", opacity: "1", duration:0.75})
  .fromTo('.menu-list li:nth-child(6)', {opacity: "0", y:"100%"}, {y:"0", opacity: "1", duration:0.75})
  gsap.fromTo('.menu-footer', {opacity: "0", y:"100%"}, {y:"0", opacity: "1", duration:1, delay:"1"});
  gsap.to(".fa-bars", {duration: 0.5, display: "none", onComplete(){
    gsap.to(".fa-xmark", {duration: 0.5, display: "block"})
  }});
  gsap.to('.header', {duration: 0.5, opacity: "0", onComplete(){
    if(w>750){
      gsap.to(".header_inner", {duration: 0.1, width: "70vw",onComplete(){
        gsap.to('.header', {duration: 0.5, opacity: "1"})
        gsap.to(".social-menu", {duration: 0.5, opacity: "1"});
        restartHeaderGIF()
      }});
    }else if(w<751){
      gsap.to(".header_inner", {duration: 0.1, width: "100vw",onComplete(){
        gsap.to('.header', {duration: 0.5, opacity: "1"})
        gsap.to(".social-menu", {duration: 0.5, opacity: "1"});
        restartHeaderGIF()
      }});
    }
  }})
}

callIt = () => {
  Autoplay.pause()
  gsap.to('.degrade', {duration: 1, delay: 0.5, left:'0'})
  gsap.to(".menulinks", {duration: 0.5, opacity: "0"});
  gsap.to(".menulinks", {opacity: "1", delay: 1.5});
  gsap.to('.header', {duration: 0.5, opacity: "0", onComplete(){
    gsap.to("#fullPage", {duration: 1, left: "0", onComplete(){
      gsap.to('.container', {duration: 0.1, opacity: "1"});
        switch(activeIndex){
          case 2:
              gsap.to('.heaven', 1.2, {y:"120%", opacity:"0"}, {y:"50%", opacity: "100%"})
              gsap.to('.heavenText', 0.6, {y:"-33%", opacity:"0"}, {y:"0%", opacity: "100%"})
              break;
          case 3:
              gsap.to('.stardust', 1.2, {y:"120%", opacity:"0"}, {y:"50%", opacity: "100%"})
              gsap.to('.stardustText', 0.6, {y:"-33%", opacity:"0"}, {y:"0%", opacity: "100%"})
              break;
          case 4:
              gsap.to('.wisdom', 1.2, {y:"120%", opacity:"0"}, {y:"50%", opacity: "100%"})
              gsap.to('.wisdomText', 0.6, {y:"-33%", opacity:"0"}, {y:"0%", opacity: "100%"})
              break;
          case 5:
              gsap.to('.sagrado', 1.5, {y:"120%", opacity:"0"}, {y:"50%", opacity: "100%"})
              gsap.to('.sagradoText', 0.6, {y:"-33%", opacity:"0"}, {y:"0%", opacity: "100%"})
              break;
          case 6:
              gsap.to('.pieta', 1.2, {y:"120%", opacity:"0"}, {y:"50%", opacity: "100%"})
              gsap.to('.pietaText', 0.6, {y:"-33%", opacity:"0"}, {y:"0%", opacity: "100%"})
              break;
          case 7:
              gsap.to('.horizon', 1.5, {y:"120%", opacity:"0"}, {y:"50%", opacity: "100%"})
              gsap.to('.horizonText', 0.6, {y:"-33%", opacity:"0"}, {y:"0%", opacity: "100%"})
              break;
        }
        fullpage_api.setAllowScrolling(true);
    }});
    gsap.to(".header_inner", {duration: 0.1, width: "100vw", onComplete(){
      gsap.to('header', {duration: 0.5, opacity: "1"})
        restartHeaderGIF()
      }});
    }})
  gsap.to(".menu-container", {duration: 1, right: "-100vw"});
  gsap.to(".fa-xmark", {duration: 0.5, display: "none", onComplete(){
    gsap.to(".fa-bars", {duration: 0.5, display: "block"})
  }});
  gsap.to(".social-menu", {duration: 0.5, opacity: "0", onComplete(){
    gsap.to(".social-menu", {duration: 0.1, visibility: "hidden"});
  }});
}

let menuVisible = false;

changeMenu = () => {
  if(!fullPageTween.isActive()) {
    if(menuVisible === false){
      sendIt();
      disableScroll();
      menuVisible = true;
    } else {
        callIt()
        menuTl.clear();
        gsap.to('.menu-list li:nth-child(1)', {y:"0", opacity: "0"})
        gsap.to('.menu-list li:nth-child(2)', {y:"0", opacity: "0"})
        gsap.to('.menu-list li:nth-child(3)', {y:"0", opacity: "0"})
        gsap.to('.menu-list li:nth-child(4)', {y:"0", opacity: "0"})
        gsap.to('.menu-list li:nth-child(5)', {y:"0", opacity: "0"})
        gsap.to('.menu-list li:nth-child(6)', {y:"0", opacity: "0"})
        enableScroll();
        menuVisible = false;
    }
    fullPageTween.reversed() ? fullPageTween.play() : fullPageTween.reverse();
  }  
}

closePopUp = () => {
  stopVideo();
  gsap.to('.popup', {display: "none"})
  video.play()
}

// Slider
var splide = new Splide( '.splide', {
  direction: 'ttb',
  height   : '10rem',
  autoplay: 'pause',
  arrows: false,
  pagination: false,
  width: "50vw",
  pauseOnHover: true,
  lazyLoad: true,
  interval: 3000,
  wheel: false,
  speed: 400,
  type: 'loop'
} );

splide.mount();
const { Autoplay } = splide.Components;

video.onended = () => {
  fullpage_api.moveTo(2)
  console.log('video ended')
};
