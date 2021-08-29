const menuBtn = document.querySelector('.menu-btn');
const hamburguer = document.querySelector('.menu-btn__burguer');
const nav = document.querySelector('.nav');
const menunav = document.querySelector('.menu-nav');
const menuitems = document.querySelectorAll('.menu-nav__item');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamburguer.classList.add('open');
        nav.classList.add('open');
        menunav.classList.add('open');
        menuitems.forEach(item => item.classList.add('open'));
        showMenu=true;
    } else {
        hamburguer.classList.remove('open');
        nav.classList.remove('open');
        menunav.classList.remove('open');
        menuitems.forEach(item => item.classList.remove('open'));
        showMenu=false;
    }

}