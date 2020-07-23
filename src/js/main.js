// let menu = document.querySelector('nav');
// let scrollLimit = window.pageYOffset; //retient la dernière valeur affectée/retenue

// window.addEventListener('scroll',function(){
//     let theScroll = window.pageYOffset; //variable grâce à l'évènement dans lequel elle se trouve

//     // console.log(theScroll,'position');
//     console.log(scrollLimit,'limite du scroll');
    

//     if( scrollLimit > theScroll){
//         menu.style.top = "0px";    
//     } else{
//         menu.style.top ="-500px";
//     }
//      scrollLimit = theScroll;
    
// });


var compteur = document.getElementById('injection');

function scrollay() {

    var scrolled = window.pageYOffset;

    compteur.innerHTML = scrolled;

}



scrollay();


window.addEventListener('scroll',function() {

    scrollay();

    var scrolled = window.pageYOffset;

    compteur.style.fontSize= (scrolled/50)+"px"



})

