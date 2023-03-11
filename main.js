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

//sidebar part
const sidebtn = document.getElementById('sidebtn');
var sidebar = document.getElementById('sidebar');
const contbtn = document.getElementById('contbtn');
var contSidebar = document.getElementById('contSidebar');
var main = document.getElementById('main');

sidebtn.addEventListener('click', () => {
    sidebar.classList.add('sidebarHidden');
    contSidebar.classList.add('contSidebar');
    main.classList.add('mainAll');
    setTimeout(() => {
        contbtn.classList.remove('contbtnHidden');
    }, 800)
    
});

contbtn.addEventListener('click', () => {
    contbtn.classList.add('contbtnHidden');
    sidebar.classList.remove('sidebarHidden');
    main.classList.remove('mainAll');
    setTimeout(() => {
        contSidebar.classList.remove('contSidebar');
    } , 800)
    
});

