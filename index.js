let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// let index = 0;
let images = document.querySelectorAll(".image-s");
let sendBtn = document.getElementById("send-btn");
let dismissBtn = document.getElementById("dismiss-pop-up-btn");


menu.onclick = () => {
	menu.classList.toggle("bx-x");
	navbar.classList.toggle("open");
};

function changeImg() {
	console.log("Images tag");

	for (let index = 0; index < images.length; index++) {
		setInterval(() => {
			images[index].classList.remove("active");
			index = (index + 1) % images.length;
			images[index].classList.add("active");
		}, 3000);
	}
	// images.forEach((image) => {
	// 	console.log(image);
	// 	image[index].classList.remove("active");
	// 	index = (index + 1) % image.length;
	// 	image[index].classList.add("active");
	// });

	// setInterval(changeImg(), 2000);
}

window.onload = changeImg();



// 	THANK YOU-POP UP
sendBtn.addEventListener("click", function(){
	document.querySelector(".popup").style.display = "block";
});

dismissBtn.addEventListener("click", function(){
	document.querySelector(".popup").style.display = "none";
});

// window.onload = document.querySelector(".popup").style.display = "none";




// document.getElementById("dismiss-btn").addEventListener("click", function(){
// 	document.getElementsByClassName("popup")[0].classList.remove("active").style.display = "none";	
// });
