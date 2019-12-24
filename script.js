let slide = document.querySelectorAll(".slide");
let dot = document.querySelectorAll(".dot");
let br = 0;

function slider(){

    for(let i=0; i<slide.length; i++){
        slide[i].style.display = "none";
    }
    for(let i=0; i<dot.length; i++){
        dot[i].className = dot[i].className.replace(" active", "");
    }

    br++;

    if(br > slide.length){ br = 1;}
    slide[br-1].style.display = "block";
    dot[br-1].classList.add("active");

    setTimeout(slider, 2000);
}

slider();


let s1 = document.querySelector("#s1");
let s2 = document.querySelector("#s2");
let s3 = document.querySelector("#s3");

function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}


let a1 = document.querySelector(".about1");
let counter = 0;

window.onscroll = function(){
    let a = window.pageYOffset + window.innerHeight;
    let b = a1.offsetTop;

    if(counter == 0){
        if(a > b){
            animateValue("s1", 0, 30, 3000);
            animateValue("s2", 0, 10, 2000);
            animateValue("s3", 0, 100, 4000);
            counter++;
        }
        
    }

    
}