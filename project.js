document.querySelectorAll(".bookSum").forEach(function(element) {    
    element.addEventListener("click", function() {
        var sound = document.getElementById("turn");
        sound.play();
    });
});


document.querySelectorAll(".publish").forEach(function(element) {    
    element.addEventListener("click", function() {
        var sound = document.getElementById("error");
        sound.play();
    });
});