const bullet = document.getElementsByClassName("dot");
const selected = bullet.length;
const suivant = document.querySelector(".arrow_right");
const precedent = document.querySelector(".arrow_left");
const slides = [
	{
		"image" : "slide1.jpg",
		"tagLine" :"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image" : "slide2.jpg",
		"tagLine" : "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image" : "slide3.jpg",
		"tagLine" : "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image" : "slide4.png",
		"tagLine" : "Autocollants <span>avec découpe laser sur mesure</span>",
	
	}
]

let count =0;

function dotSuivant(){
    bullet[count].classList.remove("dot_selected");

    if(count < selected - 1){
        count++;
    } else {
        count = 0;
    }

    bullet[count].classList.add("dot_selected")
    document.getElementsByClassName("banner-img")[0].src = "./assets/images/slideshow/" + slides[count].image;
	document.getElementsByClassName("banner-text")[0].innerHTML = slides[count].tagLine;
    console.log(count);
}
suivant.addEventListener('click', dotSuivant)



function dotPrecedent(){
    bullet[count].classList.remove("dot_selected");

    if(count > 0){
        count--;
    } else {
        count = selected - 1;
    }

    bullet[count].classList.add("dot_selected")
    document.getElementsByClassName("banner-img")[0].src = "./assets/images/slideshow/" + slides[count].image;
	document.getElementsByClassName("banner-text")[0].innerHTML = slides[count].tagLine;
    console.log(count);
    
}
precedent.addEventListener('click', dotPrecedent)