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
const homebtn = document.getElementById('homebtn');
const sobremibtn = document.getElementById('sobremibtn');
const portafoliobtn = document.getElementById('portafoliobtn');
const habilidadesbtn = document.getElementById('habilidadesbtn');
const contactobtn = document.getElementById('contactobtn');
const proyectosbtn = document.getElementById('proyectosbtn');
const galeriabtn = document.getElementById('galeriabtn');

//contenido
var home = document.getElementById('home');
var ejemplodeentrada = document.getElementById('ejemplodeentrada');
var sobreMi = document.getElementById('sobreMi');
var portafolio = document.getElementById('portafolio');
var habilidades = document.getElementById('habilidades');
var contacto = document.getElementById('contacto');
var proyectos = document.getElementById('proyectos');
var galeria = document.getElementById('galeria');

//elementos disponibles
const clasesUso = [/*0*/'entraEpicamente', /*1*/'saleEpicamente', /*2*/'novisto'];
const contenedores = [home,sobreMi,portafolio,habilidades,contacto,proyectos,galeria];


//clase
class Acciones {
    constructor(id) {
        this.yo = id;
    }

    ejecutar() {
        //this.id.classList.add(clasesUso[1]);
        console.log('ejecutando plantilla de ultron');
        this.actividad();
        this.entrada();
    }

    actividad(){
        //comprobar si ya esta activo el elemento
        if (!this.yo.classList.contains('novisto')) {
            return
        }  else{
            this.salida();
        }
    }

    salida() {
        //busqueda del elemento activo
        console.log('ultron inicia la salida');
        let item;
        contenedores.forEach((i) => {//buscar la posicion del elemento activo actual
            if (!i.classList.contains(clasesUso[2])) {
                return item = i;
            } else {
            }

        });

        //animacion de salida y remplaza la animacion para desaparecer
        item.classList.add(clasesUso[1]);
        setTimeout(async () => {
            await item.classList.replace(clasesUso[1],clasesUso[2]);
            //busqueda de elemento y se añade
        }, 1000);

    }

    entrada() {
        //comprobar si el elemento activo esta con la clase desaparecer
        if(this.yo.classList.contains(clasesUso[2])){
            setTimeout(async () => {
                console.log('ultron inicia proceso de entrada');
                await this.yo.classList.replace(clasesUso[2],clasesUso[0]);
                await setTimeout(() => {    
                    this.yo.classList.remove(clasesUso[0]);
                    console.log('se quito la clase')
                }, 1600);
                //this.yo.classList.add(clasesUso[0]);
                //this.yo.classList.remove(clasesUso[2]);
                
            },1500)

        }else {
        }
        

        
    }

}
var btn1 = new Acciones(home);
var btn2 = new Acciones(sobreMi);
var btn3 = new Acciones(portafolio);
var btn4 = new Acciones(habilidades);
var btn5 = new Acciones(contacto);
var btn6 = new Acciones(proyectos);
var btn7 = new Acciones(galeria);



homebtn.addEventListener('click', () => {
    btn1.ejecutar();
});




contactobtn.addEventListener('click',() => {
    console.log('funcionando contacto')
    btn5.ejecutar();
});
proyectosbtn.addEventListener('click',() => {
    console.log('funcionando proyectos activos')
    btn6.ejecutar();
});
galeriabtn.addEventListener('click',() => {
    console.log('funcionando galeria')
    btn7.ejecutar();
});
//deshabilitados
/*
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
*/
