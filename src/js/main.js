// navigation 

window.addEventListener('scroll',function() {

    var dejaScrollay = window.pageYOffset;

    var maNav = document.getElementById('nav');

    var monHeader = document.getElementById('header');

    console.log(dejaScrollay);


    if (dejaScrollay >= 100) {

        


        monHeader.classList.add("nav-js");

    } else {


        monHeader.classList.remove("nav-js");

        
    }

})

// burger

var monBurger = document.getElementById('burger');

var mesLinks = document.querySelector('.links');

var maCroix = document.querySelector('#closed');



// console.log(monBurger);



function ajoutClasse() { 

    // monBurger.classList.add('active');

    mesLinks.classList.add('active');

    maCroix.classList.add('closed');

}

function retireClasse() {
    maCroix.classList.remove('closed');
    mesLinks.classList.remove('active');
}

monBurger.addEventListener("click", ajoutClasse);

maCroix.addEventListener("click",retireClasse);