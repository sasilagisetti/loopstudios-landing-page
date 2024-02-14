const hamburgerMenu = document.querySelector(".hamburger-menu img");
// const closeButton = document.querySelector("#close-button");
const navLinks = document.querySelector(".nav-links");
const creationDiv = document.querySelectorAll(".creations-div");

let windowWidth = window.innerWidth;

window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
    showImages();
});

function showImages(){
    let text;
    if(window.innerWidth<=450){
        text = "mobile"
    }
    else{
        text = "desktop"
    }
    const myarr = [
        `images/${text}/image-deep-earth.jpg`,
        `images/${text}/image-night-arcade.jpg`,
        `images/${text}/image-soccer-team.jpg`,
        `images/${text}/image-grid.jpg`,
        `images/${text}/image-from-above.jpg`,
        `images/${text}/image-pocket-borealis.jpg`,
        `images/${text}/image-curiosity.jpg`,
        `images/${text}/image-fisheye.jpg`];
    // console.log(myarr);
    for(let i = 0;i<creationDiv.length;i++){
        for(let j = 0;j<myarr.length;j++){
            if(i===j){
                creationDiv[i].style.background = `url(${myarr[j]})`
                creationDiv[i].style.backgroundPosition = "center";
                creationDiv[i].style.backgroundSize="cover";
                creationDiv[i].style.backgroundRepeat = "no-repeat";
                creationDiv[i].style.filter = "brightness(90%)";
            }
        }
    }
}
showImages();

let counter = 0;
hamburgerMenu.addEventListener("click", function(){
    console.log(hamburgerMenu.src);
    if(counter === 0) {
        hamburgerMenu.src =  "images/icon-close.svg"
        counter = counter+1;
        navLinks.style.left = "0";  
        document.body.style.overflow = "hidden";

    }
    else{
        hamburgerMenu.src =  "images/icon-hamburger.svg"
        counter = counter-1;
        navLinks.style.left = "-100%";
        document.body.style.overflow = "auto";

    }
});
