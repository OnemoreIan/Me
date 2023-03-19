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

//elementos disponibles
const clasesUso = ['entraEpicamente' /*0*/ , 'saleEpicamente' /*1*/ , 'novisto' /*2*/ ];
const contenedores = [quiensoy,sobreMi,portafolio,habilidades,contacto,proyectosActivos,galeria];

/* function test(){
    galeria.classList.add(clasesUso[0]);
    setTimeout(() => {
        console.log('buenas voy llegando');
        galeria.classList.replace(clasesUso[0],clasesUso[1])
    },4000);
    
    setTimeout(() => {
        console.log('dezaparezco')
        galeria.classList.replace(clasesUso[1],clasesUso[2]);
    },5000);
} */


//clase
class Acciones {
    constructor(id) {
        this.yo = id;
    }

    ejecutar() {
        //this.id.classList.add(clasesUso[1]);
        console.log('ejecutando plantilla de ultron');
        this.salida();
        this.entrada();
    }

    salida() {
        //destinatario
        //busqueda del elemento activo
        console.log('ultron inicia la salida');
        let item;
        contenedores.forEach((i) => {//buscar la posicion del elemento activoactual
            if (!i.classList.contains(clasesUso[2])) {
                return item = i;
            } else {
            }

        });

        item.classList.add(clasesUso[1]);
        setTimeout(() => {
            item.classList.replace(clasesUso[1],clasesUso[2]);
            //busqueda de elemento y se añade
        }, 1000);

    }

    entrada() {
        if(this.yo.classList.contains(clasesUso[2])){
            setTimeout(() => {
                console.log('ultron inicia proceso de entrada');
                this.yo.classList.replace(clasesUso[2],clasesUso[0]);
                //this.yo.classList.add(clasesUso[0]);
                //this.yo.classList.remove(clasesUso[2]);
                setTimeout(() => {
                    this.yo.classList.remove(clasesUso[0]);
                    console.log('se quito la clase')
                }, 1700);
            },1000);
        }else {
        }
        

        
        //revisar por que se baja antes de tiempo
    }

}
var btn1 = new Acciones(quiensoy);
var btn2 = new Acciones(sobreMi);
var btn3 = new Acciones(portafolio);
var btn4 = new Acciones(habilidades);
var btn5 = new Acciones(contacto);
var btn6 = new Acciones(proyectosActivos);
var btn7 = new Acciones(galeria);



quiensoybtn.addEventListener('click', () => {
    btn1.ejecutar();
});

sobremibtn.addEventListener('click', () => {
    btn2.ejecutar();
});

portafoliobtn.addEventListener('click',() => {
    btn3.ejecutar();
});
habilidadesbtn.addEventListener('click',() => {
    console.log('funcionando habilidades')
    btn4.ejecutar();
});
contactobtn.addEventListener('click',() => {
    console.log('funcionando contacto')
    btn5.ejecutar();
});
proyectosActivosbtn.addEventListener('click',() => {
    console.log('funcionando proyectos activos')
    btn6.ejecutar();
});
galeriabtn.addEventListener('click',() => {
    console.log('funcionando galeria')
    btn7.ejecutar();
});