const ArrayImages = [
  "./assets/img/capture.png",
  './assets/img/lol.png',
  "./assets/img/redcolor.jpg",
  "./assets/img/redouuu.jpeg",
];

let position = 0;

const image = document.getElementById("image");

const suivant = document.getElementById("suivant");
const precedent = document.getElementById("precedent");

const slideChange=(sens)=>{
  position = position + sens;
  // fleche de  gauche : si ma position est inferieur à 0 alors je me positionne sur l'avant derniere img
  (position<0)?(position = ArrayImages.length -1): null;
  // fleche de  droite : si ma position est superieur à 0 alors j'avance
  (position>ArrayImages.length-1)?(position=0): null;
  // attribuer une image à la balise img
  image.src = ArrayImages[position];
  console.log("ArrayImages.length -1",ArrayImages.length -1);
  console.log("ArrayImages.length -1",ArrayImages[position] );
}

