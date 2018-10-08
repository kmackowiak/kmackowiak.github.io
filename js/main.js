// document.addEventListener("DOMContentLoaded", function(){
//      mobileMenu()
//  });


const hamburgerOpen = document.getElementsByClassName("hamburger__icon--open")[0];
//     const hamburgerClose = document.getElementsByClassName("hamburger__icon--close")[0];
//     const logo = document.getElementsByClassName("logo")[0];
//     const navbarMobileList = document.getElementsByClassName("navbar__mobile-list--hidden")[0];




const mobileMenuButton = document.getElementsByClassName("mobile-menu-button")[0];
const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
const logoTextFirst = document.getElementsByClassName("logo-text--first")[0];
// const logoTextOther = document.getElementsByClassName("logo-text--other")[0];


mobileMenuButton.addEventListener("click", function () {
    mobileMenuButton.classList.toggle("mobile-menu-button-open");
    mobileMenu.classList.toggle("mobile-menu-open");

    logoTextFirst.classList.toggle("logo-text--first--reverse");
    // logoTextOther.classList.toggle("logo-text--other--reverse");


});



// var projectBtnSvgMore = document.getElementsByClassName("project__btn-svg--more");
var projectDescription = document.getElementsByClassName("project__description");

const items = document.querySelectorAll(".project__btn--more");


function toggleAccordion(){
    // this.classList.toggle('active');
    // this.nextElementSibling.classList.toggle('active');
    // var lol = this.parentNode.parentNode.parentNode.childNodes[7];
    var lol = this.parentNode.parentNode.childNodes[7];
    lol.classList.toggle('project__description--show');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


//
//
// for (i = 0; i < projectBtnSvgMore.length; i++) {
//     console.log(projectDescription[i]);
//
//     projectBtnSvgMore[i].addEventListener("click", function (el) {
//         var zzzz = el.currentTarget.name;
//         console.log(zzzz, i);
//         console.log(zzzz.previousSibling);
//         // console.log(projectDescription[i]);
//
//         //el.currentTarget.classList.toggle("project__description--hidden");
//     })
// };

