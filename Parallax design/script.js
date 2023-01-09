let sky = document.getElementById("sky");
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let beach = document.getElementById("beach");
let guy = document.getElementById("guy");
let backTree = document.getElementById("backTree");
let frontTree = document.getElementById("frontTree");

window.addEventListener("scroll", move);
 function move() {
    let value = scrollY;
    stars.style.left = value * ".5" + "px";
    moon.style.top = value * "1.5" + "px";
    moon.style.left = value * "-.2" + "px";
    backTree.style.top = value * "-.35" + "px";
    frontTree.style.top = value * "-.33" + "px";
    guy.style.top = value * ".2" + "px";
      let moonSide = window.matchMedia("(min-width: 1901px)");
      if (moonSide.matches){ 
      document.getElementById("moon").style.left = value * "-2" + "px";
      console.log("e");
 } else {
 }
}
 move();
