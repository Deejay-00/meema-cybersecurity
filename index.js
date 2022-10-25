let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let index = 0;
let images = document.querySelectorAll('.image');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}


function changeImg(){
    image[index].classList.remove('active');
    index = (index + 1) % image.length;
    image[index].classList.add('active');
    
    setInterval('changeImg()', 2000);

}

window.onload = changeImg();


