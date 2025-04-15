"use strict";

var link = document.querySelector(".pageTransition");
link.addEventListener("click", pageTransition);

function pageTransition(e){

    var linkHref = this.href;

    document.body.classList.add("pageAnimation");
    document.body.addEventListener("animationend", function(){
        window.location = linkHref;
        // window.location = URL de la page;
    });
    e.preventDefault();
}