"use strict";

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

var button = document.querySelector(".cta");
button.addEventListener("click", animation);

function animation(e) {
    var transition = document.querySelector(".transition");
    transition.classList.add("anim-trans");
    transition.addEventListener("animationend", function(){
        transition.classList.remove("anim-trans");
    });
    e.preventDefault();
}
