     
//segundo
function toggleGreenDiv() {
    var greenDivs = document.getElementsByClassName("green-div");

    for (var i = 0; i < greenDivs.length; i++) {
        var currentDisplay = window.getComputedStyle(greenDivs[i]).getPropertyValue("display");

        if (currentDisplay === "none" || currentDisplay === "") {
            greenDivs[i].style.display = "block";
        } else {
            greenDivs[i].style.display = "none";
        }
    }
}
//tercero
function toggleRedDiv() {
    var redDivs = document.getElementsByClassName("red-div");

    for (var i = 0; i < redDivs.length; i++) {
        var currentDisplay = window.getComputedStyle(redDivs[i]).getPropertyValue("display");

        if (currentDisplay === "none" || currentDisplay === "") {
            redDivs[i].style.display = "block";
        } else {
            redDivs[i].style.display = "none";
        }
    }
}


function Primera(){
   return new Promise(function(resolve, reject){
        setTimeout(()=> {
            var currentDisplay = window.getComputedStyle(blueDiv).getPropertyValue("display");
    
            if (currentDisplay === "none" || currentDisplay === "") {
                blueDiv.style.display = "block";
            } else {
                blueDiv.style.display = "none";
            }
            resolve();
    
        }, 5000);
    })
} 



function Segunda(){
    return new Promise(function(resolve, reject){
        setTimeout(()=> {
            var redDiv = document.querySelector(".red-div");
    
            if (redDiv) {
                redDiv.click();
            }
            resolve();
    
        }, 3000);
    })
 } 

 function Tercera(){
    return new Promise(function(resolve, reject){
        setTimeout(()=> {
            toggleGreenDiv;
            resolve();
        }, 2000);
    })
 } 



//primer
function toggleBlueDivAfterDelay() {
    var blueDiv = document.querySelector(".blue-div");    
    if (blueDiv) {
        /*
            Primera().then(Segunda()).then(Tercera());
        */
        resultado()
    }
}


//cuarto
document.addEventListener("DOMContentLoaded", function () {
    var redDiv = document.querySelector(".red-div");
    
    if (redDiv) {
        redDiv.addEventListener("click", toggleRedDiv);
    }
});


async function resultado(){
    await Primera();
    await Segunda();
    await Tercera();
}

