const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Récupère les éléments HTML correspondant aux flèches de gauche et de droite
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Ajoute un event listener pour le clic de souris sur la flèche de gauche
arrowLeft.addEventListener("click", () => {
  // Affiche un message dans la console lorsque la flèche de gauche est cliquée
  console.log("Clic sur la flèche de gauche");
});

// Ajoute un event listener pour le clic de souris sur la flèche de droite
arrowRight.addEventListener("click", () => {
  // Affiche un message dans la console lorsque la flèche de droite est cliquée
  console.log("Clic sur la flèche de droite");
});

let position = 0;

function checkPosition() {
  if (position >= slides.length) {
    position = 0;
  } else if (position < 0) {
    position = slides.length - 1;
  }
}

// Création des points
const bullet = document.querySelector(".dots");
for (let i = 0; i < slides.length; i++) {
  const point = document.createElement("div");
  bullet.appendChild(point);
  point.classList.add("dot");
}

// Sélection du point en fonction de la position du slider
let bulletselect = positionBullet();
bulletselect.classList.add("dot_selected");

function positionBullet() {
  return document.querySelector(`.dots .dot:nth-child(${position + 1})`);
}

// Changement de point lors du changement de slide
function changeBullet() {
  bulletselect.classList.remove("dot_selected");
  bulletselect = positionBullet();
  bulletselect.classList.add("dot_selected");
}

// Affichage de l'image et de la tagline.
function imageTagline() {
  document.querySelector(".banner-img").src =
    "./assets/images/slideshow/" + slides[position].image;
  document.querySelector("#banner p").innerHTML = slides[position].tagLine;
}

// Événements des flèches boutons gauche et droit
const buttonArrowLeft = document.querySelector(".arrow_left");
buttonArrowLeft.addEventListener("click", function () {
  changementSlides(-1);
  console.log(position);
});

const buttonArrowRight = document.querySelector(".arrow_right");
buttonArrowRight.addEventListener("click", function () {
  changementSlides(+1);
  console.log(position);
});

// Changement de slide
function changementSlides(direction) {
  position += direction;
  checkPosition();
  imageTagline();
  changeBullet();
}

// Defilemment automatique du slide bonus
setInterval("changementSlides(1)", 4000);
