//jquerry
$(function () {
    //selectores igual a los de js . # p
    $('#ejemplo').css({
        "display": "none"
    });

    $('#btnE').click(() => {
        alert('exito');
        console.log('Boton funcinal');
    })
})

//normal js

//botones de cierre y apertura
const sidebtn = document.getElementById('sidebtn');
const contbtn = document.getElementById('contbtn');

//contenido
var sidebar = document.getElementById('sidebar');
var main = document.getElementById('main');

sidebtn.addEventListener('click', () => {
    sidebar.classList.add('sidebarHidden');
    main.classList.add('mainAll');
    setTimeout(() => {
        contbtn.classList.remove('contbtnHidden');
    }, 800)

});

contbtn.addEventListener('click', () => {
    contbtn.classList.add('contbtnHidden');
    sidebar.classList.remove('sidebarHidden');
    main.classList.remove('mainAll');

});

//botones sidebar
const quiensoybtn = document.getElementById('quiensoybtn');
const sobremibtn = document.getElementById('sobremibtn');
const portafoliobtn = document.getElementById('portafoliobtn');
const habilidadesbtn = document.getElementById('habilidadesbtn');
const contactobtn = document.getElementById('contactobtn');
const proyectosActivosbtn = document.getElementById('proyectosActivosbtn');
const galeriabtn = document.getElementById('galeriabtn');

//contenido
var quiensoy = document.getElementById('quiensoy');
var ejemplodeentrada = document.getElementById('ejemplodeentrada');
var sobreMi = document.getElementById('sobreMi');
var portafolio = document.getElementById('portafolio');
var habilidades = document.getElementById('habilidades');
var contacto = document.getElementById('contacto');
var proyectosActivos = document.getElementById('proyectosActivos');
var galeria = document.getElementById('galeria');


function cerrarTodos() {
    if (!quiensoy.classList.contains('novisto')) {
        quiensoy.classList.add('salidaSeccion');
        setTimeout(() => {
            quiensoy.classList.add('novisto');
            quiensoy.classList.remove('salidaSeccion');
        }, 1500);
    }
    if (!sobreMi.classList.contains('novisto')) {
        sobreMi.classList.add('novisto');
    }
    if (!portafolio.classList.contains('novisto')) {
        portafolio.classList.add('novisto');
    }
    if (!habilidades.classList.contains('novisto')) {
        habilidades.classList.add('novisto');
    }
    if (!contacto.classList.contains('novisto')) {
        contacto.classList.add('novisto');
    }
    if (!proyectosActivos.classList.contains('novisto')) {
        proyectosActivos.classList.add('novisto');
    }
    if (!galeria.classList.contains('novisto')) {
        galeria.classList.add('novisto');
    }

}

function abrirUno(opcion) { //todas las opciones hechas
    switch (opcion) {
        case 1:
            //abrir quien soy
            quiensoy.classList.remove('novisto');
            quiensoy.classList.add('entradaSeccion');
            setTimeout(() => {
                quiensoy.classList.remove('entradaSeccion');
            }, 1500)
            break;
        case 2:
            //abrir sobre mi
            sobreMi.classList.add('entradaSeccion');
            portafolio.classList.remove('novisto');
            setTimeout(() => {
                sobreMi.classList.remove('entradaSeccion');
            }, 1500)
            break;
        case 3:
            //abrir portafolio
            
            portafolio.classList.add('entradaSeccion');
            portafolio.classList.remove('novisto');
            setTimeout(() => {
                portafolio.classList.remove('entradaSeccion');
            }, 1500)
            break;
        case 4:
            //abrir habilidades
            break;
        case 5:
            //abrir contacto
            break;
        case 6:
            //abrir proyectos activos
            break;
        case 7:
            //abrir galeria
            break
        default:
            break;
    }
}

function opcionesComprimidas(quien) {
    quien.classList.remove('novisto');
    quien.classList.add('entradaSeccion');
    setTimeout(() => {
        quien.classList.remove('entradaSeccion');
    }, 1500)
}

quiensoybtn.addEventListener('click', () => {
    //cierre de todos
    ejemplodeentrada.classList.remove('novisto');
    ejemplodeentrada.classList.add('entradaSeccion');
    quiensoy.classList.add('salidaSeccion');
    setTimeout(() => {
        quiensoy.classList.add('novisto')
        quiensoy.classList.remove('salidaSeccion');
        ejemplodeentrada.classList.remove('entradaSeccion');
    }, 1500);
});

sobremibtn.addEventListener('click', () => {
    cerrarTodos();
    //abrirUno(2);
    opcionesComprimidas(sobreMi)
    console.log('funcionando sobre mi');
});

portafoliobtn.addEventListener('click',() => {
    cerrarTodos();
    abrirUno(3);
    //opcionesComprimidas(portafolio)
    console.log('funcionando portafolio')
});

/* 
habilidadesbtn.addEventListener('click',() => {
    console.log('funcionando habilidades')
});
contactobtn.addEventListener('click',() => {
    console.log('funcionando contacto')
});
proyectosActivosbtn.addEventListener('click',() => {
    console.log('funcionando proyectos activos')
});
galeriabtn.addEventListener('click',() => {
    console.log('funcionando galeria')
}); */