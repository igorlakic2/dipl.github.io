let slide = document.querySelectorAll(".slide");
let dot = document.querySelectorAll(".dot");
let br = 0;

function slider(){

    for(let i=0; i<slide.length; i++){
        slide[i].style.display = "none";
    }
    for(let i=0; i<dot.length; i++){
        dot[i].className = dot[i].className.replace(" activeDot", "");
    }

    br++;

    if(br > slide.length){ br = 1;}
    slide[br-1].style.display = "block";
    dot[br-1].classList.add("activeDot");

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


let about1 = document.querySelector(".about1");
let about2 = document.querySelector(".about2");
let home = document.querySelector("#home");
let x = document.getElementsByClassName("a2div");
let t = document.querySelectorAll(".ttt");
let counter = 0;

let toTop = document.querySelector("#toTop");

toTop.onclick = function() {
    document.documentElement.scrollTop = 0;
}

window.onscroll = function(){
    let fromTop = window.pageYOffset + window.innerHeight;
    let a1 = about1.offsetTop;
    let a2 = about2.offsetTop;

    if(counter == 0){
        if(fromTop > a1){
            animateValue("s1", 0, 30, 3000);
            animateValue("s2", 0, 10, 2000);
            animateValue("s3", 0, 100, 4000);
            counter++;
        }
    }

    if(fromTop > a2){
        for(let i=0; i<t.length; i++){
            t[i].style.opacity = '1';           
        }
    }

    if((fromTop-window.innerHeight) > home.offsetTop){
        //toTop.style.opacity = '1';
        //toTop.style.display = "block";
        toTop.style.right = '15px';
    }else{
        toTop.style.right = '-50px';
        
    }
}


let tabs = document.querySelectorAll(".tabs");
let content = document.querySelectorAll(".tabCon");


function services(x, y) {
    for(let i=0; i<tabs.length; i++){
        tabs[i].className = tabs[i].className.replace(" activeTab", "");
    }
    for(let i=0; i<content.length; i++){
        content[i].style.display = "none";
    }

    document.getElementById(y).style.display = "block";
    x.currentTarget.className += " activeTab";

}

document.getElementById("clicked").click();