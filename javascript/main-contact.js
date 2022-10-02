var btn_apare_menu = document.getElementById('btn-menu');
var btn_inchide_menu = document.getElementById('btn-inchide');

btn_apare_menu.addEventListener('click', schimbare_btn);
btn_inchide_menu.addEventListener('click', schimbare_btn2);

var contenedor_menu = document.querySelector('.contenedor-menu');
var header = document.querySelector('.header');

function schimbare_btn(){
    btn_apare_menu.style.display = 'none';
    btn_inchide_menu.style.display = 'flex';

    contenedor_menu.style.height = '260px';

    // header.style.borderBottom = '2px solid white';
    
}

function schimbare_btn2(){
    btn_apare_menu.style.display = 'flex';
    btn_inchide_menu.style.display = 'none';

    contenedor_menu.style.height = '0px';
    // header.style.borderBottom = 'none';
}


// ----------------------------------------------

const instagram = document.getElementById('instagram');
const facebook = document.getElementById('facebook');
const tiktok = document.getElementById('tiktok');
const wapp = document.getElementById('wapp');


function move(){
    instagram.style.transform = 'scale(1.2)';
    instagram.style.transition = 'all .3s';

    setTimeout(function(){
        instagram.style.transform = 'scale(1)';
        instagram.style.transition = 'all .3s';

    },300)
}

function move2(){
    facebook.style.transform = 'scale(1.2)';
    facebook.style.transition = 'all .3s';

    setTimeout(function(){

        facebook.style.transform = 'scale(1)';
        facebook.style.transition = 'all .3s';
    },300)
}

function move3(){

    tiktok.style.transform = 'scale(1.2)';
    tiktok.style.transition = 'all .3s';

    setTimeout(function(){
        tiktok.style.transform = 'scale(1)';
        tiktok.style.transition = 'all .3s';

    },300)
}

function move4(){

    wapp.style.transform = 'scale(1.2)';
    wapp.style.transition = 'all .3s';

    setTimeout(function(){
        wapp.style.transform = 'scale(1)';
        wapp.style.transition = 'all .3s';

    },300)
}

setInterval(function(){
    move()
},5000);

setInterval(function(){
    move2();
},6000);

setInterval(function(){
    move3();
},7000);

setInterval(function(){
    move4();
},8000);