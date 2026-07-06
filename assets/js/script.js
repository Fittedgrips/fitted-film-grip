// ==========================
// STICKY NAVBAR
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if (window.scrollY > 80) {

header.style.background = "rgba(0,0,0,.92)";
header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

} else {

header.style.background = "rgba(0,0,0,.55)";
header.style.boxShadow = "none";

}

});

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ==========================
// SCROLL REVEAL
// ==========================

const revealElements = document.querySelectorAll(

".stat-box,.work-card,.service-card,.production-card,.testimonial-card,.contact-item,.about-container"

);

const reveal = () => {

const trigger = window.innerHeight * 0.85;

revealElements.forEach(el=>{

const top = el.getBoundingClientRect().top;

if(top < trigger){

el.classList.add("show");

}

});

};

window.addEventListener("scroll", reveal);

reveal();

// ==========================
// COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll(".stat-box h2");

let counted = false;

window.addEventListener("scroll",()=>{

const stats = document.querySelector(".stats");

if(!stats) return;

const top = stats.getBoundingClientRect().top;

if(top < window.innerHeight && !counted){

counted = true;

counters.forEach(counter=>{

const text = counter.innerText;

const number = parseInt(text);

const suffix = text.replace(number,"");

let start = 0;

const speed = Math.max(20,

// ==========================
// LOADER
// ==========================

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},800);

});


// ==========================
// PORTFOLIO FILTER
// ==========================

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

document.querySelector(".filter-btn.active").classList.remove("active");

button.classList.add("active");

const filter = button.dataset.filter;

portfolioItems.forEach(item=>{

if(filter==="all" || item.classList.contains(filter)){

item.style.display="block";

}else{

item.style.display="none";

}

});

});

});

// ==========================
// LIGHTBOX
// ==========================

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeLightbox = document.getElementById("close-lightbox");

document.querySelectorAll(".portfolio-item img,.work-card img").forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src = img.src;

});

});

closeLightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});
