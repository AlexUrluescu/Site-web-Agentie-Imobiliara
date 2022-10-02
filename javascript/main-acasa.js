
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


var butoane = document.querySelectorAll('.contenedor-btn ul li');

for(var i=0; i<butoane.length; i++){
    butoane[i].addEventListener('click', miscare_poze);
}

function miscare_poze(e){
    var zona;
    var sursa;

    if(e.target == btn1){
        zona = '.contenedor-poza1 img';
        sursa = 'poze/casa4.jpg';

        butoane[0].style.border = '1px solid white';
        butoane[1].style.border = 'none';
        butoane[2].style.border = 'none';
        butoane[3].style.border = 'none';
    }

    else if(e.target == btn2){
        zona = '.contenedor-poza1 img';
        sursa = 'poze/casa7.jpg';

        butoane[1].style.border = '1px solid white';
        butoane[0].style.border = 'none';
        butoane[2].style.border = 'none';
        butoane[3].style.border = 'none';
    }

    else if(e.target == btn3){
        zona = '.contenedor-poza1 img';
        sursa = 'poze/casa6.webp';

        butoane[2].style.border = '1px solid white';
        butoane[0].style.border = 'none';
        butoane[1].style.border = 'none';
        butoane[3].style.border = 'none';
    }

    else if(e.target == btn4){
        zona = '.contenedor-poza1 img';
        sursa = 'poze/casa1.jpg';

        butoane[3].style.border = '1px solid white';
        butoane[1].style.border = 'none';
        butoane[2].style.border = 'none';
        butoane[0].style.border = 'none';
    }

    $(zona).attr('src', sursa);
}

