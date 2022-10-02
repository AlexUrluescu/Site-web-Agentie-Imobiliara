
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



let contenedor_casute = document.getElementById('cont_casute');

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', miscare);

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', miscare);

let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', miscare);

let btn4 = document.getElementById('btn4');
btn4.addEventListener('click', miscare);


function miscare(e){
    if(e.target == btn2){
        contenedor_casute.classList.add('miscare-casute');
    }

    else if(e.target == btn1){
        contenedor_casute.classList.remove('miscare-casute');

    }

    else if(e.target == btn3){
        contenedor_casute.classList.add('miscare-casute2');

        btn3.style.display = 'none';
        btn4.style.display = 'flex';
    }
   
    else if(e.target == btn4){
        contenedor_casute.classList.remove('miscare-casute2');

        btn4.style.display = 'none';
        btn3.style.display = 'flex';
    }

}

window.addEventListener('resize', function(){
    if(this.window.innerWidth > 845){
        btn3.style.display = 'none';
        btn4.style.display = 'none';
    }

    else if(this.window.innerWidth < 845){
        btn3.style.display = 'flex';
    }
})





