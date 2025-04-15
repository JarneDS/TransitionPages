"use strict";

/* Exercice 1 */
/*var link = document.querySelector(".pageTransition");
link.addEventListener("click", pageTransition);

function pageTransition(e){

    var linkHref = this.href;

    document.body.classList.add("pageAnimation");
    document.body.addEventListener("animationend", function(){
        window.location = linkHref;
        // window.location = URL de la page;
    });
    e.preventDefault();
}*/

/* Exercice 2 */
/*var button = document.querySelector(".cta");
button.addEventListener("click", animation);

function animation(e) {
    var transition = document.querySelector(".transition");
    transition.classList.add("anim-trans");
    transition.addEventListener("animationend", function(){
        transition.classList.remove("anim-trans");
    });
    e.preventDefault();
}*/

/*Exercice 3*/
var link = document.querySelector(".pageTransition");
link.addEventListener("click", pageTransition);

var bloc2 = document.querySelector(".bloc2");

function pageTransition(e){
    var linkHref = this.href;

    document.body.classList.add("pageAnimation");
    bloc2.addEventListener("animationend", function(){
        window.location = linkHref;
    });

    e.preventDefault();
}