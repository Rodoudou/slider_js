const items = document.querySelectorAll('img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

// fonction pour l'event fleche gauche
const slidSuivante=()=>{
  items[count].classList.remove('active');
  (count < nbSlide -1)? count++ : count=0;

  items[count].classList.add('active');
}

// fonction pour l'event fleche droite
const slidPrecedente=()=>{
  items[count].classList.remove('active');
  (count > 0)? count-- : (count= nbSlide-1);

  items[count].classList.add('active');
}

// fonction pour utiliser les fleches du clavier
const keyPress =(e)=>{

  (e.keyCode == '37') ? slidPrecedente() || (e.keyCode == '39') : slidSuivante();

}

document.addEventListener('keydown', keyPress)