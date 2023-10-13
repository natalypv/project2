document.addEventListener("DOMContentLoaded", init);

//preparing page
function init() {
    //shorcut vars
    const frame = document.querySelector(".frame");
    const slides = document.querySelectorAll(".slide");
    const currentSlide = document.querySelector(".current")
    const container = document.querySelector(".container");

    //slide controls
    const controls = document.createElement("div");
    controls.className = "controls";
    controls.innerHTML = 
    '<a href="#" class="back-btn">Back</a><a href="#" class="next-btn">Next</a>';
    //add controls to page
    container.appendChild(controls);

    const backBtn = controls.querySelector(".back-btn");
    const nextBtn = controls.querySelector(".next-btn");

    //add interactivity to controls
    backBtn.addEventListener("click", showNewSlide);
    nextBtn.addEventListener("click", showNewSlide);

    //hide slides except first slide
    slides.forEach((image) => {
        image.classList.add("hide");
        slides[0].classList.remove("hide");
    });
}

function showNewSlide(e) {

    const frame = document.querySelector(".frame");
    const slides = document.querySelectorAll(".slide");
    const currentSlide = document.querySelector(".current");
    const container = document.querySelector('.container');
    const myButton = e.target;
    let nextUp = "";
//check to see which button was clicked
    if(myButton.classList.contains('back-btn')){
        nextUp = currentSlide.previousElementSibling;
    } else{
        nextUp = currentSlide.nextElementSibling;
    }
//back button logic
    if(nextUp === null) {
        let index = slides.length - 1;
        nextUp = slides[index];
    }
// next button logic 
if(nextUp.nodeName !== "IMG"){
    nextUp = slides[0];
}

//decommission the current visible slide
    currentSlide.classList.toggle('hide');
    currentSlide.classList.toggle('current');
//show new slide
    nextUp.classList.toggle("hide");
    nextUp.classList.toggle("current");
//change caption to match slide
const txt = currentSlide.alt;
const caption = frame.querySelector("figcaption");
caption.textContent = txt;

}