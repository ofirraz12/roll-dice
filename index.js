var button = document.querySelector(".shffle-button button");
var cube1 = document.getElementById("cube1");
var cube2 = document.getElementById("cube2");

button.addEventListener('click', e => { 
    let random_n1 = Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] / (0xFFFFFFFF + 1) * 6) + 1;
    let random_n2 = Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] / (0xFFFFFFFF + 1) * 6) + 1;
    

    cube1.setAttribute("src", "./images/dice"+random_n1+".png");
    cube2.setAttribute("src", "./images/dice"+random_n2+".png");
});


document.getElementById("copyLink").addEventListener("click", function(e) {
    e.preventDefault();
    
    var tempInput = document.createElement("input");
    tempInput.value = "https://ofirraz12.github.io/roll-dice/";
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  
    var successMessage = document.getElementById("copySuccessMessage");
    successMessage.style.display = "inline";
    
    setTimeout(function() {
      successMessage.style.display = "none";
    }, 3000);
  });
  