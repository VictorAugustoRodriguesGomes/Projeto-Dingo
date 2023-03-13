
//  bae
var audio = new Audio();

// volume controlher
let volumeAllowance;
let previousVolume = 3;
const fieldVolume = document.getElementById("fieldVolume");
const volumeSpan = fieldVolume.getElementsByTagName("span");

// velocidade control
const speedText = document.getElementById("speedText");

function volumeFunction(volumeValue) {

    if (volumeValue > previousVolume) {
        volumeAllowance = volumeValue - previousVolume;
        for (let index = 0; index < volumeAllowance; index++) {
            previousVolume = previousVolume + 1;
            volumeSpan[previousVolume].classList.add("active");
        }
    } else {
        volumeAllowance = previousVolume - volumeValue;
        for (let index = 0; index < volumeAllowance; index++) {
            volumeSpan[previousVolume].classList.remove("active");
            previousVolume = previousVolume - 1;
        }
    }

    if (volumeValue == 0) {
        this.audio.volume = 0;
    }

    if (volumeValue == 1) {
        this.audio.volume = 0.2;
    }

    if (volumeValue == 2) {
        this.audio.volume = 0.4;
    }

    if (volumeValue == 3) {
        this.audio.volume = 0.6;
    }

    if (volumeValue == 4) {
        this.audio.volume = 0.8
    }

    if (volumeValue == 5) {
        this.audio.volume = 1;
    }
}

function speedBackFunction() {
    if (speedText.innerText == "1X") {
        speedText.textContent = "0.5X";
    }

    if (speedText.innerText == "2X") {
        speedText.textContent = "1X";
    }

    if (speedText.textContent == "0.5X") {
        this.audio.playbackRate = 0.4;
    }

    if (speedText.textContent == "1X") {
        this.audio.playbackRate = 1;
    }
    if (speedText.textContent == "2X") {
        this.audio.playbackRate = 3;
    }
}

function speedForwardFunction() {
    if (speedText.innerText == "1X") {
        speedText.textContent = "2X";
    }

    if (speedText.innerText == "0.5X") {
        speedText.textContent = "1X";
    }

    if (speedText.textContent == "0.5X") {
        this.audio.playbackRate = 0.4;
    }

    if (speedText.textContent == "1X") {
        this.audio.playbackRate = 1;
    }
    if (speedText.textContent == "2X") {
        this.audio.playbackRate = 3;
    }
}







































// musica eletronica

const electronicAlbum = document.getElementById("electronicAlbum");
const div1 = electronicAlbum.getElementsByClassName("col20");

var opt1Anterior = 0;
var aopt1 = 0;

// muica Funk

const funkAlbum = document.getElementById("funkAlbum");
const div2 = funkAlbum.getElementsByClassName("col20");

var opt2Anterior = 0;
var aopt2 = 0;


// muica Rep

const rapAlbum = document.getElementById("rapAlbum");
const div3 = rapAlbum.getElementsByClassName("col20");

var opt3Anterior = 0;
var aopt3 = 0;


// muica Trap

const trapAlbum = document.getElementById("trapAlbum");
const div4 = trapAlbum.getElementsByClassName("col20");

var opt4Anterior = 0;
var aopt4 = 0;


// Trilha eletronica
function electronicMusic(opt1) {
    if (opt1 == opt1Anterior && aopt1 >= 1) {
        div1[opt1Anterior].classList.remove("active");

        audio.pause();

        this.speedText.textContent = "1X";
        aopt1 = 0;

    } else {
        this.speedText.textContent = "1X";

        if (aopt2 >= 1) {
            div2[opt2Anterior].classList.remove("active");
        }

        if (aopt3 >= 1) {
            div3[opt3Anterior].classList.remove("active");
        }

        if (aopt4 >= 1) {
            div4[opt4Anterior].classList.remove("active");
        }

        div1[opt1Anterior].classList.remove("active");
        div1[opt1].classList.toggle("active");

        opt1Anterior = opt1;
        aopt1 = 1;

        audio.pause();
        this.audio = new Audio('./msc/eletronica/E' + opt1 + '.mp3');

        audio.load();
        audio.play();
        audio.loop = true;
    }

}


// trila Funk
function funkMusic(opt2) {
    if (opt2 == opt2Anterior && aopt2 >= 1) {
        div2[opt2Anterior].classList.remove("active");

        audio.pause();

        this.speedText.textContent = "1X";
        aopt2 = 0;

    } else {
        this.speedText.textContent = "1X";


        if (aopt1 >= 1) {
            div1[opt1Anterior].classList.remove("active");
        }

        if (aopt3 >= 1) {
            div3[opt3Anterior].classList.remove("active");
        }

        if (aopt4 >= 1) {
            div4[opt4Anterior].classList.remove("active");
        }

        div2[opt2Anterior].classList.remove("active");
        div2[opt2].classList.toggle("active");

        opt2Anterior = opt2;
        aopt2 = 1;

        audio.pause();
        this.audio = new Audio('./msc/funk/F' + opt2 + '.mp3');

        audio.load();
        audio.play();
        audio.loop = true;
    }
}


// trila Rep
function rapMusic(opt3) {
    if (opt3 == opt3Anterior && aopt3 >= 1) {
        div3[opt3Anterior].classList.remove("active");

        audio.pause();

        this.speedText.textContent = "1X";
        aopt3 = 0;

    } else {
        this.speedText.textContent = "1X";


        if (aopt1 >= 1) {
            div1[opt1Anterior].classList.remove("active");
        }

        if (aopt2 >= 1) {
            div2[opt2Anterior].classList.remove("active");
        }

        if (aopt4 >= 1) {
            div4[opt4Anterior].classList.remove("active");
        }

        div3[opt3Anterior].classList.remove("active");
        div3[opt3].classList.toggle("active");

        opt3Anterior = opt3;
        aopt3 = 1;

        audio.pause();
        this.audio = new Audio('./msc/rep/R' + opt3 + '.mp3');

        audio.load();
        audio.play();
        audio.loop = true;
    }
}

// trila Rep
function trapMusic(opt4) {
    if (opt4 == opt4Anterior && aopt4 >= 1) {
        div4[opt4Anterior].classList.remove("active");

        audio.pause();

        this.speedText.textContent = "1X";
        aopt4 = 0;

    } else {
        this.speedText.textContent = "1X";


        if (aopt1 >= 1) {
            div1[opt1Anterior].classList.remove("active");
        }

        if (aopt2 >= 1) {
            div2[opt2Anterior].classList.remove("active");
        }

        if (aopt3 >= 1) {
            div3[opt3Anterior].classList.remove("active");
        }

        div4[opt4Anterior].classList.remove("active");
        div4[opt4].classList.toggle("active");

        opt4Anterior = opt4;
        aopt4 = 1;

        audio.pause();
        this.audio = new Audio('./msc/trap/T' + opt4 + '.mp3');

        audio.load();
        audio.play();
        audio.loop = true;
    }
}

document.body.addEventListener('keypress', function (event) {
    const key = event.key;
    const code = event.keyCode;
    // console.log("Key:"+ key + ", Code " + code);
    if (key == "q") {
        electronicMusic(0);
    }

    if (key == "w") {
        electronicMusic(1);
    }

    if (key == "e") {
        electronicMusic(2);
    }

    if (key == "r") {
        electronicMusic(3);
    }

    if (key == "t") {
        electronicMusic(4);
    }







    if (key == "a") {
        funkMusic(0);
    }

    if (key == "s") {
        funkMusic(1);
    }

    if (key == "d") {
        funkMusic(2);
    }

    if (key == "f") {
        funkMusic(3);
    }

    if (key == "g") {
        funkMusic(4);
    }





    if (key == "z") {
        rapMusic(0);
    }

    if (key == "x") {
        rapMusic(1);
    }

    if (key == "c") {
        rapMusic(2);
    }

    if (key == "v") {
        rapMusic(3);
    }

    if (key == "b") {
        rapMusic(4);
    }






    if (key == "h") {
        trapMusic(0);
    }

    if (key == "j") {
        trapMusic(1);
    }

    if (key == "k") {
        trapMusic(2);
    }

    if (key == "l") {
        trapMusic(3);
    }

    if (key == "m") {
        trapMusic(4);
    }
});