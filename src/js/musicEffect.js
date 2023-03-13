let time = 0;

let randomNumber1;
let auxiliaryEffect1;
let auxiliaryEffectNextNumber1 = 0;
let auxiliaryEffectPreviousNumber1 = 0;

const rowMusicEffect1 = document.getElementById("rowMusicEffect1");
const waveEffect1 = rowMusicEffect1.getElementsByTagName("span");

let randomNumber2;
let auxiliaryEffect2;
let auxiliaryEffectNextNumber2 = 0;
let auxiliaryEffectPreviousNumber2 = 0;

const rowMusicEffect2 = document.getElementById("rowMusicEffect2");
const waveEffect2 = rowMusicEffect2.getElementsByTagName("span");

let randomNumber3;
let auxiliaryEffect3;
let auxiliaryEffectNextNumber3 = 0;
let auxiliaryEffectPreviousNumber3 = 0;

const rowMusicEffect3 = document.getElementById("rowMusicEffect3");
const waveEffect3 = rowMusicEffect3.getElementsByTagName("span");

let randomNumber4;
let auxiliaryEffect4;
let auxiliaryEffectNextNumber4 = 0;
let auxiliaryEffectPreviousNumber4 = 0;

const rowMusicEffect4 = document.getElementById("rowMusicEffect4");
const waveEffect4 = rowMusicEffect4.getElementsByTagName("span");

setInterval(function run() {

    if (time != 1) {} else {

        randomNumber1 = parseInt(Math.random() * (8 - 1) + 1);
        auxiliaryEffectNextNumber1 = randomNumber1;
        if (auxiliaryEffectPreviousNumber1 <= auxiliaryEffectNextNumber1) {
            auxiliaryEffect1 = 6;
            for (let index = 0; index < auxiliaryEffectNextNumber1; index++) {
                waveEffect1[auxiliaryEffect1].classList.add("active");
                auxiliaryEffect1 = auxiliaryEffect1 - 1;
            }
            auxiliaryEffectPreviousNumber1 = auxiliaryEffectNextNumber1;
        } else {
            auxiliaryEffect1 = auxiliaryEffectNextNumber1;
            for (let index = 0; index < auxiliaryEffectNextNumber1; index++) {
                auxiliaryEffect1 = auxiliaryEffect1 + 1;
                waveEffect1[index].classList.remove("active");
            }
            auxiliaryEffectPreviousNumber1 = auxiliaryEffectNextNumber1;
        }
        if (auxiliaryEffectPreviousNumber1 == auxiliaryEffectNextNumber1) {
            if (auxiliaryEffectNextNumber1 % 2 == 0) {
                auxiliaryEffect1 = 6;
                for (let index = 0; index < (auxiliaryEffectNextNumber1 + 1); index++) {
                    waveEffect1[auxiliaryEffect1].classList.add("active");
                    auxiliaryEffect1 = auxiliaryEffect1 - 1;
                }
                auxiliaryEffectPreviousNumber1 = auxiliaryEffectNextNumber1;
            } else {
                auxiliaryEffect1 = auxiliaryEffectNextNumber1 - 1;
                for (let index = 0; index < auxiliaryEffectNextNumber1; index++) {
                    auxiliaryEffect1 = auxiliaryEffect1 + 1;
                    waveEffect1[index].classList.remove("active");
                }
                auxiliaryEffectPreviousNumber1 = auxiliaryEffectNextNumber1;
            }
        }

        randomNumber2 = parseInt(Math.random() * (8 - 1) + 1);
        auxiliaryEffectNextNumber2 = randomNumber2;
        if (auxiliaryEffectPreviousNumber2 <= auxiliaryEffectNextNumber2) {
            auxiliaryEffect2 = 6;
            for (let index = 0; index < auxiliaryEffectNextNumber2; index++) {
                waveEffect2[auxiliaryEffect2].classList.add("active");
                auxiliaryEffect2 = auxiliaryEffect2 - 1;
            }
            auxiliaryEffectPreviousNumber2 = auxiliaryEffectNextNumber2;
        } else {
            auxiliaryEffect2 = auxiliaryEffectNextNumber2;
            for (let index = 0; index < auxiliaryEffectNextNumber2; index++) {
                auxiliaryEffect2 = auxiliaryEffect2 + 1;
                waveEffect2[index].classList.remove("active");
            }
            auxiliaryEffectPreviousNumber2 = auxiliaryEffectNextNumber2;
        }
        if (auxiliaryEffectPreviousNumber2 == auxiliaryEffectNextNumber2) {
            if (auxiliaryEffectNextNumber2 % 2 == 0) {
                auxiliaryEffect2 = 6;
                for (let index = 0; index < (auxiliaryEffectNextNumber2 + 1); index++) {
                    waveEffect2[auxiliaryEffect2].classList.add("active");
                    auxiliaryEffect2 = auxiliaryEffect2 - 1;
                }
                auxiliaryEffectPreviousNumber2 = auxiliaryEffectNextNumber2;
            } else {
                auxiliaryEffect2 = auxiliaryEffectNextNumber2 - 1;
                for (let index = 0; index < auxiliaryEffectNextNumber2; index++) {
                    auxiliaryEffect2 = auxiliaryEffect2 + 1;
                    waveEffect2[index].classList.remove("active");
                }
                auxiliaryEffectPreviousNumber2 = auxiliaryEffectNextNumber2;
            }
        }

        randomNumber3 = parseInt(Math.random() * (8 - 1) + 1);
        auxiliaryEffectNextNumber3 = randomNumber3;
        if (auxiliaryEffectPreviousNumber3 <= auxiliaryEffectNextNumber3) {
            auxiliaryEffect3 = 6;
            for (let index = 0; index < auxiliaryEffectNextNumber3; index++) {
                waveEffect3[auxiliaryEffect3].classList.add("active");
                auxiliaryEffect3 = auxiliaryEffect3 - 1;
            }
            auxiliaryEffectPreviousNumber3 = auxiliaryEffectNextNumber3;
        } else {
            auxiliaryEffect3 = auxiliaryEffectNextNumber3;
            for (let index = 0; index < auxiliaryEffectNextNumber3; index++) {
                auxiliaryEffect3 = auxiliaryEffect3 + 1;
                waveEffect3[index].classList.remove("active");
            }
            auxiliaryEffectPreviousNumber3 = auxiliaryEffectNextNumber3;
        }
        if (auxiliaryEffectPreviousNumber3 == auxiliaryEffectNextNumber3) {
            if (auxiliaryEffectNextNumber3 % 2 == 0) {
                auxiliaryEffect3 = 6;
                for (let index = 0; index < (auxiliaryEffectNextNumber3 + 1); index++) {
                    waveEffect3[auxiliaryEffect3].classList.add("active");
                    auxiliaryEffect3 = auxiliaryEffect3 - 1;
                }
                auxiliaryEffectPreviousNumber3 = auxiliaryEffectNextNumber3;
            } else {
                auxiliaryEffect3 = auxiliaryEffectNextNumber3 - 1;
                for (let index = 0; index < auxiliaryEffectNextNumber3; index++) {
                    auxiliaryEffect3 = auxiliaryEffect3 + 1;
                    waveEffect3[index].classList.remove("active");
                }
                auxiliaryEffectPreviousNumber3 = auxiliaryEffectNextNumber3;
            }
        }

        randomNumber4 = parseInt(Math.random() * (8 - 1) + 1);
        auxiliaryEffectNextNumber4 = randomNumber4;
        if (auxiliaryEffectPreviousNumber4 <= auxiliaryEffectNextNumber4) {
            auxiliaryEffect4 = 6;
            for (let index = 0; index < auxiliaryEffectNextNumber4; index++) {
                waveEffect4[auxiliaryEffect4].classList.add("active");
                auxiliaryEffect4 = auxiliaryEffect4 - 1;
            }
            auxiliaryEffectPreviousNumber4 = auxiliaryEffectNextNumber4;
        } else {
            auxiliaryEffect4 = auxiliaryEffectNextNumber4;
            for (let index = 0; index < auxiliaryEffectNextNumber4; index++) {
                auxiliaryEffect4 = auxiliaryEffect4 + 1;
                waveEffect4[index].classList.remove("active");
            }
            auxiliaryEffectPreviousNumber4 = auxiliaryEffectNextNumber4;
        }
        if (auxiliaryEffectPreviousNumber4 == auxiliaryEffectNextNumber4) {
            if (auxiliaryEffectNextNumber4 % 2 == 0) {
                auxiliaryEffect4 = 6;
                for (let index = 0; index < (auxiliaryEffectNextNumber4 + 1); index++) {
                    waveEffect4[auxiliaryEffect4].classList.add("active");
                    auxiliaryEffect4 = auxiliaryEffect4 - 1;
                }
                auxiliaryEffectPreviousNumber4 = auxiliaryEffectNextNumber4;
            } else {
                auxiliaryEffect4 = auxiliaryEffectNextNumber4 - 1;
                for (let index = 0; index < auxiliaryEffectNextNumber4; index++) {
                    auxiliaryEffect4 = auxiliaryEffect4 + 1;
                    waveEffect4[index].classList.remove("active");
                }
                auxiliaryEffectPreviousNumber4 = auxiliaryEffectNextNumber4;
            }
        }
        time = 0;
        auxiliaryEffectPreviousNumber1 = auxiliaryEffectNextNumber1;
        auxiliaryEffectPreviousNumber2 = auxiliaryEffectNextNumber2;
        auxiliaryEffectPreviousNumber3 = auxiliaryEffectNextNumber3;
        auxiliaryEffectPreviousNumber4 = auxiliaryEffectNextNumber4;
    }
    time++;
}, 100);