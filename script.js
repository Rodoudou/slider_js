const slide = new Array("./assets/img/capture.png", "./assets/img/redouuu.jpeg");
let numero = 0;


const ChangeSlide = (sens)=>{
    numero = numero + sens;
    (numero <0)?(numero = slide.length - 1): null;
    (numero > slide.length - 1)? (numero = 0): null;
    
    document.getElementById("slide").src = slide[numero];
}

// setInterval("ChangeSlide(1)", 4000);