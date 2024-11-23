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

function validateForm() {
    if (document.forms[0].bookName.value == "") {
        alert("Title field cannot be empty.");
        return false;
    }
    if (document.forms[0].bookAuthor.value == "") {
        alert("author field cannot be empty.");
        return false;
    }
    if (document.forms[0].review.value == "") {
        alert("Review field cannot be empty.");
        return false;
    }
}

