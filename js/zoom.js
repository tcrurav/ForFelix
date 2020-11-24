window.onload = initialize;

function initialize(){
    var controller = document.getElementById('my-little-box');
    controller.addEventListener('mouseenter', showSomething);
}

function showSomething(){
    console.log("hola Félix");
}