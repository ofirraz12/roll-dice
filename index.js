var button = document.querySelector(".shffle-button button");
var cube1 = document.getElementById("cube1");
var cube2 = document.getElementById("cube2");

button.addEventListener('click', e => { 
    let random_n1 = Math.floor(Math.random() * 6) + 1; 
    let random_n2 = Math.floor(Math.random() * 6) + 1;

    cube1.setAttribute("src", "./images/dice"+random_n1+".png");
    cube2.setAttribute("src", "./images/dice"+random_n2+".png");
});
