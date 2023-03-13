var audio = new Audio();

let auxiliaryElectronic = 0;
let auxiliaryElectronicPrevious = 0;
const electronicAlbum = document.getElementById("electronicAlbum");
const electronic = electronicAlbum.getElementsByClassName("col20");

let auxiliaryFunk = 0;
let auxiliaryFunkPrevious = 0;
const funkAlbum = document.getElementById("funkAlbum");
const funk = funkAlbum.getElementsByClassName("col20");

let auxiliaryRap = 0;
let auxiliaryRapPrevious = 0;
const rapAlbum = document.getElementById("rapAlbum");
const rap = rapAlbum.getElementsByClassName("col20");

let auxiliaryTrap = 0;
let auxiliaryTrapPrevious = 0;
const trapAlbum = document.getElementById("trapAlbum");
const trap = trapAlbum.getElementsByClassName("col20");

let volumeAllowance;
let previousVolume = 3;
const fieldVolume = document.getElementById("fieldVolume");
const volumeSpan = fieldVolume.getElementsByTagName("span");

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

function electronicMusic(selectElectronicMusic) {
    if (selectElectronicMusic == auxiliaryElectronicPrevious && auxiliaryElectronic >= 1) {
        electronic[auxiliaryElectronicPrevious].classList.remove("active");
        audio.pause();
        this.speedText.textContent = "1X";
        auxiliaryElectronic = 0;

    } else {
        this.speedText.textContent = "1X";

        if (auxiliaryFunk >= 1) {
            funk[auxiliaryFunkPrevious].classList.remove("active");
        }

        if (auxiliaryRap >= 1) {
            rap[auxiliaryRapPrevious].classList.remove("active");
        }

        if (auxiliaryTrap >= 1) {
            trap[auxiliaryTrapPrevious].classList.remove("active");
        }

        electronic[auxiliaryElectronicPrevious].classList.remove("active");
        electronic[selectElectronicMusic].classList.toggle("active");
        auxiliaryElectronicPrevious = selectElectronicMusic;
        auxiliaryElectronic = 1;
        audio.pause();
        this.audio = new Audio('../src/music/eletronica/E' + selectElectronicMusic + '.mp3');
        audio.load();
        audio.play();
        audio.loop = true;
    }
}

function funkMusic(selectFunkMusic) {
    if (selectFunkMusic == auxiliaryFunkPrevious && auxiliaryFunk >= 1) {
        funk[auxiliaryFunkPrevious].classList.remove("active");
        audio.pause();
        this.speedText.textContent = "1X";
        auxiliaryFunk = 0;

    } else {
        this.speedText.textContent = "1X";

        if (auxiliaryElectronic >= 1) {
            electronic[auxiliaryElectronicPrevious].classList.remove("active");
        }

        if (auxiliaryRap >= 1) {
            rap[auxiliaryRapPrevious].classList.remove("active");
        }

        if (auxiliaryTrap >= 1) {
            trap[auxiliaryTrapPrevious].classList.remove("active");
        }

        funk[auxiliaryFunkPrevious].classList.remove("active");
        funk[selectFunkMusic].classList.toggle("active");
        auxiliaryFunkPrevious = selectFunkMusic;
        auxiliaryFunk = 1;
        audio.pause();
        this.audio = new Audio('../src/music/funk/F' + selectFunkMusic + '.mp3');
        audio.load();
        audio.play();
        audio.loop = true;
    }
}

function rapMusic(selectRapMusic) {
    if (selectRapMusic == auxiliaryRapPrevious && auxiliaryRap >= 1) {
        rap[auxiliaryRapPrevious].classList.remove("active");
        audio.pause();
        this.speedText.textContent = "1X";
        auxiliaryRap = 0;

    } else {
        this.speedText.textContent = "1X";

        if (auxiliaryElectronic >= 1) {
            electronic[auxiliaryElectronicPrevious].classList.remove("active");
        }

        if (auxiliaryFunk >= 1) {
            funk[auxiliaryFunkPrevious].classList.remove("active");
        }

        if (auxiliaryTrap >= 1) {
            trap[auxiliaryTrapPrevious].classList.remove("active");
        }

        rap[auxiliaryRapPrevious].classList.remove("active");
        rap[selectRapMusic].classList.toggle("active");
        auxiliaryRapPrevious = selectRapMusic;
        auxiliaryRap = 1;
        audio.pause();
        this.audio = new Audio('../src/music/rep/R' + selectRapMusic + '.mp3');
        audio.load();
        audio.play();
        audio.loop = true;
    }
}

function trapMusic(selectTrapMusic) {
    if (selectTrapMusic == auxiliaryTrapPrevious && auxiliaryTrap >= 1) {
        trap[auxiliaryTrapPrevious].classList.remove("active");
        audio.pause();
        this.speedText.textContent = "1X";
        auxiliaryTrap = 0;

    } else {
        this.speedText.textContent = "1X";

        if (auxiliaryElectronic >= 1) {
            electronic[auxiliaryElectronicPrevious].classList.remove("active");
        }

        if (auxiliaryFunk >= 1) {
            funk[auxiliaryFunkPrevious].classList.remove("active");
        }

        if (auxiliaryRap >= 1) {
            rap[auxiliaryRapPrevious].classList.remove("active");
        }

        trap[auxiliaryTrapPrevious].classList.remove("active");
        trap[selectTrapMusic].classList.toggle("active");
        auxiliaryTrapPrevious = selectTrapMusic;
        auxiliaryTrap = 1;
        audio.pause();
        this.audio = new Audio('../src/music/trap/T' + selectTrapMusic + '.mp3');
        audio.load();
        audio.play();
        audio.loop = true;
    }
}

document.body.addEventListener('keypress', function (event) {
    const key = event.key;
    const code = event.keyCode;
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