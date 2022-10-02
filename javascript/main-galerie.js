
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

// -------------- galerie 1 -----------------

const slider = document.querySelector('.contenedor-poze');
let poza = document.querySelectorAll('.poza');
let pozaLast = poza[poza.length - 1];

const btnStanga = document.getElementById('btn-stanga');
const btnDreapta = document.getElementById('btn-dreapta');

slider.insertAdjacentElement("afterbegin", pozaLast);

btnDreapta.addEventListener('click', next)

function next(){
    let pozaFirst = document.querySelectorAll('.poza')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';

    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', pozaFirst);
        slider.style.marginLeft = '-100%';
    },500);
}

btnStanga.addEventListener('click', before);


function before(){
    let poza = document.querySelectorAll('.poza');
    let pozaLast = poza[poza.length - 1];
    slider.style.marginLeft = '0%';
    slider.style.transition = 'all 0.5s';

    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', pozaLast);
        slider.style.marginLeft = '-100%';
    },500);
}

// setInterval(function(){
//     next()
// }, 5000);

// --------------- final galerie 1 --------------------

// ------------- miscare buton ------------------------

let butonMobil = document.getElementById('btn-cont3');
let btn1 = document.getElementById('btn-move1');
let btn2 = document.getElementById('btn-move2');

function move(){
    butonMobil.style.transform = 'scale(1.03)';
    butonMobil.style.transition = 'all .1s';

    btn1.style.transform = 'scale(1.03)';
    btn1.style.transition = 'all .1s';

    btn2.style.transform = 'scale(1.03)';
    btn2.style.transition = 'all .1s';

    setTimeout(function(){
        butonMobil.style.transform = 'scale(1)';
        butonMobil.style.transition = 'all .1s';

        btn1.style.transform = 'scale(1)';
        btn1.style.transition = 'all .1s';
       
       btn2.style.transform = 'scale(1)';
       btn2.style.transition = 'all .1s';
    },200)
}

setInterval(function(){
    move();
},6000)

// ---------------- final miscare buton ---------------------


// -------------------- galerie 2 ----------------------------

const slider2 = document.querySelector('.slider');
let imagine = document.querySelectorAll('.slider-poza');
let imagineLast = imagine[imagine.length - 1];

const btnStanga2 = document.getElementById('btn-stanga2');
const btnDreapta2 = document.getElementById('btn-dreapta2');

slider2.insertAdjacentElement('afterbegin', imagineLast);

btnDreapta2.addEventListener('click', urmatoare);

function urmatoare(){
    let imagineFirst = document.querySelectorAll('.slider-poza')[0];
    slider2.style.marginLeft = '-200%';
    slider2.style.transition = 'all .5s';

    setTimeout(function(){
        slider2.style.transition = 'none';
        slider2.insertAdjacentElement('beforeend', imagineFirst);
        slider2.style.marginLeft = '-100%';
    },500);
}


btnStanga2.addEventListener('click', anterioara);

function anterioara(){
    let imagine = document.querySelectorAll('.slider-poza');
    let imagineLast = imagine[imagine.length - 1];
    slider2.style.marginLeft = '0%';
    slider2.style.transition = 'all .3s';

    setTimeout(function(){
        slider2.style.marginLeft = '-100%';
        slider2.style.transition = 'none';
        slider2.insertAdjacentElement('afterbegin', imagineLast);
    },500)
}

setInterval(function(){
    urmatoare()
},10000)

// -------------------- final galeria 2 -------------------------

// ------------------ galeria 3 --------------------------

const slider3 = document.querySelector('.slider2');
let imagine2 = document.querySelectorAll('.slider-poza2');
let imagine2Last = imagine2[imagine2.length - 1];

slider3.insertAdjacentElement('afterbegin', imagine2Last);

const btnStanga3 = document.getElementById('btn-stanga3');
const btnDreapta3 = document.getElementById('btn-dreapta3');

btnDreapta3.addEventListener('click', urmatoare2);

function urmatoare2(){
    let imagine2First = document.querySelectorAll('.slider-poza2')[0];
    slider3.style.marginLeft = '-200%';
    slider3.style.transition = 'all .5s';

    setTimeout(function(){
        slider3.style.marginLeft = '-100%';
        slider3.style.transition = 'none';
        slider3.insertAdjacentElement('beforeend', imagine2First);
    },500);

}

btnStanga3.addEventListener('click', anterioara2);

function anterioara2(){
    let imagine2 = document.querySelectorAll('.slider-poza2');
    let imagine2Last = imagine2[imagine2.length - 1];
    slider3.style.marginLeft = '0%';
    slider3.style.transition = 'all .5s';

    setTimeout(function(){
        slider3.style.marginLeft = '-100%';
        slider3.style.transition = 'none';
        slider3.insertAdjacentElement('afterbegin', imagine2Last);
    },500)
}

// --------------- final galerie 3 -------------------------

// --------- miscare butoane galerie 3 --------------



