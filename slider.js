let flag = 0;

function controller(x) {
    flag = flag + x;
    slideshow(flag);
}

function slideshow(num) {
    let slides = document.getElementsByClassName("slide");

    if (num == slides.length) {
        flag = 0;
        num = 0;
    }
    if (num < 0) {
        flag = slides.length - 1;
        num = slides.length - 1;
    }

    for (let y of slides) {
        y.style.display = "none";
    }

    slides[num].style.display = "block";
}

const interval = 2000;
const intervalId = setInterval(function () {
    controller(1); // Incrementing the flag to move to the next slide
}, interval);

function disable() {
    let touch = document.getElementsByTagName("span");

    for (let i = 0; i < touch.length; i++) {
        touch[i].addEventListener("click", function () {
            clearInterval(intervalId);
        });
    }
}

// Call disable to set up the click event listener
disable();
