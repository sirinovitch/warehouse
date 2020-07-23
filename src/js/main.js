// navigation 

window.addEventListener('scroll',function() {

    var dejaScrollay = window.pageYOffset;

    var maNav = document.getElementById('nav');

    var monHeader = document.getElementById('header');

    console.log(dejaScrollay);


    if (dejaScrollay >= 100) {

        console.log("j'ai dépassé les 100 pixels");

        monHeader.classList.add("nav-js");

    } else {

        // console.log("je suis sous les 100 pixels");

        monHeader.classList.remove("nav-js");

        
    }

})