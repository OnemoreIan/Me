//jquerry
$(function () {
    //selectores igual a los de js . # p
    $('#ejemplo').css({"display": "none"});

    $('#btnE').click(() => {
        alert('exito');
        console.log('Boton funcinal');
    })
})

//normal js
const sidebtn = document.getElementById('sidebtn');
var sidebar = document.getElementById('sidebar');
const contbtn = document.getElementById('contbtn');
var contSidebar = document.getElementById('contSidebar');
var main = document.getElementById('main');

sidebtn.addEventListener('click', () => {
    sidebar.classList.add('sidebarHidden');
    contSidebar.classList.add('contSidebar');
    main.classList.add('mainAll');
    contbtn.classList.remove('contbtnHidden');
});

contbtn.addEventListener('click', () => {
    contbtn.classList.add('contbtnHidden');
    sidebar.classList.remove('sidebarHidden');
    main.classList.remove('mainAll');
    setTimeout(() => {
        contSidebar.classList.remove('contSidebar');
    } , 800)
    
});

const lista = () => {
    let dato = [];
    for (let i = 1; i <= 1000; i++) {
        dato.push(i);
    }
    console.log(dato.length);
    console.log(typeof dato);
    console.log(dato);
}


function agregarNumeros() {
    let lista = [];
    for (let i = 1; i <= 1000; i++) {
        lista.push(i);
    }
    console.log(lista);
}
agregarNumeros();
lista();

const listaGrande = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];