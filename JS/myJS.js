// put js here

function reveal() {

    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 10;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function checkHeight() {
    let checkHeight = document.getElementById('body');

    if (checkHeight.offsetHeight > window.innerHeight) {
        window.addEventListener("scroll", reveal);
    } else {
        reveal();
    }
}

