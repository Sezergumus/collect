const tl = new TimelineMax({ delay: 0.5 });
const menuTl = new TimelineMax({delay: 0.5});
const dataTl = new TimelineMax({ delay: 0 });
const contactTl = new TimelineMax({delay: 0.5});
const productEl = document.getElementsByClassName('productPagePhoto');
const activePage = productEl[0].classList[1];
const gif=document.getElementById('logo');
let data;
let dataLineCount = document.getElementsByClassName('data-line').length;
let activeProductSlide = 'table';
let textCount;
let currentTextEn;
let currentTextTr;
let w = screen.width;

// Restart Gif
function restartHeaderGIF(){
  gif.src=gif.getAttribute('src');
  console.log('gif restart')
}


fetch('./dist/data.json')
  .then((response) => response.json())
  .then((json) => data = json[activePage])
  .then((data) => { data = JSON.stringify(data); data = JSON.parse(data); })
  .then(() => { textCount = Object.keys(data[activeProductSlide]).length; })

// Enable Scrolling
function enableScroll() {
  fullpage_api.setAllowScrolling(true);
  console.log('scroll enabled')
}

// Disable Scrolling
function disableScroll() {
  fullpage_api.setAllowScrolling(false);
  console.log('scroll disabled')
}

// Fullpage
new fullpage('#productFullPage', {
  autoScrolling: true,
  scrollHorizontally: true,
  onLeave: (origin, destination, direction) => {
    disableScroll()
    switch (destination.index) {
      case 0:
        gsap.fromTo('.productPagePhoto', { y: "50%", opacity: "0" }, { y: "0%", opacity: "0.8", duration: 1.8, delay: 0.5 })
        gsap.fromTo('.productMainText', { y: "-33%", opacity: "0" }, { y: "0", opacity: "1", duration: 1.2, delay: 2.3 })
        gsap.to('.header', { duration: 0.5, display: 'block' })
        setTimeout(enableScroll, 1800);
        break;
      case 1:
        tl.fromTo('.bottomContainerHeader', 0.75, { y: "100%", opacity: "0" }, { y: "0%", opacity: "1" })
          .fromTo('.line1', 0.75, { y: "100%", opacity: "0" }, { y: "0%", opacity: ".5" })
          .fromTo('.line2', 0.75, { y: "100%", opacity: "0" }, { y: "0%", opacity: ".5" })
          .fromTo('.line3', 0.75, { y: "100%", opacity: "0" }, { y: "0%", opacity: ".5" })
          .fromTo('.line4', 0.75, { y: "100%", opacity: "0" }, { y: "0%", opacity: ".5" })
          .fromTo('.line5', 0.75, { y: "100%", opacity: "0" }, { y: "0%", opacity: ".5" })
          .fromTo('.line6', 0.75, { y: "100%", opacity: "0" }, { y: "0%", opacity: ".5" })
          .fromTo('.line7', 0.75, { y: "100%", opacity: "0" }, { y: "0%", opacity: ".5" })
          .fromTo('.line8', 0.75, { y: "100%", opacity: "0" }, { y: "0%", opacity: ".5" })
        gsap.to('.header', { duration: 0.5, display: 'none' })
        setTimeout(enableScroll, 1800);
        break
      case 2:
        gsap.fromTo('.technicalHeader', { opacity: 0, y: "50%" }, { opacity: 1, y: 0, duration: 0.75, delay: 0.5 })
        gsap.fromTo('.technicalContent', { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 })
        gsap.fromTo('.threed', { y: 100 }, { y: 0, duration: 1, delay: 0.5 })
        gsap.fromTo('.twod', { y: 100 }, { y: 0, duration: 1, delay: 0.75 })
        gsap.fromTo('.datasheet', { y: 100 }, { y: 0, duration: 1, delay: 1 })
        gsap.fromTo('.high-quality', { y: 100 }, { y: 0, duration: 1, delay: 1.25 })
        gsap.fromTo('.technical-drawing', { y: 100 }, { y: 0, duration: 1, delay: 1.5 })
        gsap.fromTo('.catalog', { y: 100 }, { y: 0, duration: 1, delay: 1.75 })
        setTimeout(enableScroll, 1800);
        break;
    }
    if (origin.index === 1) {
      tl.clear();
    }
  }
});

window.onload = function () {
  gsap.fromTo('.productPagePhoto', { y: "50%", opacity: "0" }, { y: "0%", opacity: "0.8", duration: 1.8, delay: 0.5 })
  gsap.fromTo('.productMainText', { y: "-33%", opacity: "0" }, { y: "0", opacity: "1", duration: 1.2, delay: 2.3 })
}

// Slider
var technicalSplide = new Splide('#technical', {
  width: '35vw',
  // autoWidth: true,
  autoplay: 'pause',
  arrows: true,
  pagination: true,
  pauseOnHover: true,
  lazyLoad: true,
  interval: 3000,
  wheel: false,
  speed: 400,
  type: 'loop',
  arrowPath: 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z.',
}).mount();

technicalSplide.on('moved', function (newIndex) {
  dataLineCount = document.getElementsByClassName('data-line').length;
  activeProductSlide = Object.keys(data)[newIndex]
  textCount = Object.keys(data[activeProductSlide]).length;
  changeSlider()
});

function checkSlider() {
  // Check if there are enough data lines
  if (Object.keys(data[activeProductSlide]).length > dataLineCount) {
    // Add new data line
    for (let i = 1; i <= Object.keys(data[activeProductSlide]).length - dataLineCount; i++) {
      let dataLine = document.createElement('div');
      dataLine.classList.add('data-line');
      dataLine.innerHTML = `
        <p class="data-line-text-eng"></p>
        <br>
        <p class="data-line-text-tr"></p>
        `
      document.getElementsByClassName('data')[0].appendChild(dataLine)
    }
  } else if (Object.keys(data[activeProductSlide]).length < dataLineCount) {
    // Remove data line
    for (let i = 1; i <= dataLineCount - Object.keys(data[activeProductSlide]).length; i++) {
      document.getElementsByClassName('data')[0].removeChild(document.getElementsByClassName('data')[0].lastChild)
    }
  }
}

function changeSlider() {
  checkSlider();
  for (let i = 1; i <= textCount; i++) {
    currentTextEn = document.getElementsByClassName('data-line-text-eng')[i - 1];
    currentTextTr = document.getElementsByClassName('data-line-text-tr')[i - 1];
    currentTextEn.innerHTML = data[activeProductSlide][i].en;
    currentTextTr.innerHTML = data[activeProductSlide][i].tr;
    // animation
    gsap.fromTo('.data-line:nth-child(' + i + ') .data-line-text-eng', { y: "500%", opacity: "0" }, { y: "0%", opacity: "1", duration: 1 })
    gsap.fromTo('.data-line:nth-child(' + i + ') .data-line-text-tr', { y: "500%", opacity: "0" }, { y: "0%", opacity: "1", duration: 1 })
  }
}

var splide = new Splide('#menu', {
  direction: 'ttb',
  height: '10rem',
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
}).mount();

const { Autoplay } = splide.Components;

var img1 = document.getElementsByClassName("imageBox1")[0];
var img2 = document.getElementsByClassName("imageBox2")[0];
var img3 = document.getElementsByClassName("imageBox3")[0];
var imgSrc1 = document.getElementById("image1").src;
var imgSrc2 = document.getElementById("image2").src;
var imgSrc3 = document.getElementById("image3").src;
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

window.onresize = function () {
  w = screen.width;
};

img1.onclick = function () {
  if (w > 750) {
    modal.style.display = "block";
    modalImg.src = `${imgSrc1}`
    disableScroll()
  }
}

img2.onclick = function () {
  if (w > 750) {
    modal.style.display = "block";
    modalImg.src = `${imgSrc2}`
    disableScroll()
  }
}

img3.onclick = function () {
  if (w > 750) {
    modal.style.display = "block";
    modalImg.src = `${imgSrc3}`
    disableScroll()
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  enableScroll()
}

// Burger Menu
const fullPageTween = gsap.to(".social-menu", {duration: 1, visibility: "visible", reversed: true});;

sendIt = () => {
  fullpage_api.silentMoveTo(1)
  gsap.to(".container", {duration: 0.2, opacity: "0"});
  gsap.to(".menu-container", {duration: 0.5, right: "0"});
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
  gsap.to(".menulinks", {duration: 0.5, opacity: "0"});
  gsap.to(".menulinks", {opacity: "1", delay: 1.5});
  gsap.to('.header', {duration: 0.5, opacity: "0", onComplete(){
      gsap.to('.container', {duration: 0.1, opacity: "1"});
      gsap.fromTo('.productPagePhoto', { y: "50%", opacity: "0" }, { y: "0", opacity: "0.8", duration: 1.8, delay: 0.5 })
      gsap.fromTo('.productMainText', { y: "-33%", opacity: "0" }, { y: "0", opacity: "1", duration: 1.2, delay: 2.3 })
      fullpage_api.setAllowScrolling(true);
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