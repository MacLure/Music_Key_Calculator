// BUTTON SETUP

const keySelector = document.querySelector("#keySelector");
const sharpFlatSelector = document.querySelector("#sharpFlatSelector");
const majorMinorSelector = document.querySelector("#majorMinorSelector");
const updateButton = document.querySelector("#updateButton");

// DISPLAY
const degree1 = document.querySelector(".degree1");
const degree2 = document.querySelector(".degree2");
const degree3 = document.querySelector(".degree3");
const degree4 = document.querySelector(".degree4");
const degree5 = document.querySelector(".degree5");
const degree6 = document.querySelector(".degree6");
const degree7 = document.querySelector(".degree7");

const relativeKey = document.querySelector(".relativeKey");
const parallelKey = document.querySelector(".parallelKey");
const subdominantKey = document.querySelector(".subdominantKey");
const dominantKey = document.querySelector(".dominantKey");
const mediantKey = document.querySelector(".mediantKey");

var selectedTonality = majorMinorSelector.options[majorMinorSelector.selectedIndex].value;
var selectedSharpFlat = sharpFlatSelector.options[sharpFlatSelector.selectedIndex].value;
var selectedKey = keySelector.options[keySelector.selectedIndex].value;

// INTERACTIVITY

function flatten(degree) {
    // To be used as a callback function.  Take a degree and either remove ♯ or add ♭ (or ♮)
}

function sharpen(degree) {
    // To be used as a callback function.  Take a degree and either remove ♭ or add ♯ (or ♮)
}

function updateKey() {

    selectedKey = keySelector.options[keySelector.selectedIndex].value;
    selectedSharpFlat = sharpFlatSelector.options[sharpFlatSelector.selectedIndex].value;
    selectedTonality = majorMinorSelector.options[majorMinorSelector.selectedIndex].value;
    
    if (selectedKey === 'C_major') {

        for (i = 0 ; i < keyC.degrees.length ; i++) {
            document.getElementsByClassName("keySignature")[i].innerHTML = keyC.degrees[i];
            if (selectedTonality === 'major') {
                document.getElementsByClassName("diatonicChords")[i].innerHTML = keyC.degrees[i] + " " + majorTonality[i];
            }
            // DOESN'T DISPLAY CORRECT ROOTS - ROOTS SHOULD BE THAT OF RELATIVE MAJOR, EG. Eb MAJOR FOR C

            // if (selectedTonality === 'minor') {
            //     document.getElementsByClassName("diatonicChords")[i].innerHTML = keyC.degrees[i] + " " + naturalMinorTonality[i];
            // }
        }

        // DOESN'T DISPLAY CORRECT ROOTS - DOESN'T HANDLE SHARPS OR FLATS

        // let fiveOfX = 5;
        // for (j = 0 ; j <= 4 ; j++) {
        //     document.getElementsByClassName("secondaryDominants")[j].innerHTML = keyC.degrees[fiveOfX] + " major";
        //     fiveOfX ++;
        //     if (fiveOfX > 6) {
        //         fiveOfX = 0;
        //     }
        // }

        // let sevenOfX = 6;
        // for (j = 5 ; j <= 9 ; j++) {
        //     document.getElementsByClassName("secondaryDominants")[j].innerHTML = keyC.degrees[sevenOfX] + " diminished";
        //     sevenOfX ++;
        //     if (sevenOfX > 6) {
        //         sevenOfX = 0;
        //     }
        // }

        document.getElementsByClassName("relativeKey")[0].innerHTML = keyC.degrees[5] + " minor";
        document.getElementsByClassName("parallelKey")[0].innerHTML = keyC.degrees[0] + " minor";
        document.getElementsByClassName("subdominantKey")[0].innerHTML = keyC.degrees[3] + " major";
        document.getElementsByClassName("dominantKey")[0].innerHTML = keyC.degrees[4] + " major";
        document.getElementsByClassName("mediantKey")[0].innerHTML = keyC.degrees[2] + " minor";
    }
    if (selectedKey === 'D_major') {
        
        for (i = 0 ; i < keyDMajor.degrees.length ; i++) {
            document.getElementsByClassName("keySignature")[i].innerHTML = keyDMajor.degrees[i];
            document.getElementsByClassName("diatonicChords")[i].innerHTML = keyDMajor.degrees[i] + " " + majorTonality[i];
        }
        document.getElementsByClassName("relativeKey")[0].innerHTML = keyDMajor.degree6 + " minor";
        document.getElementsByClassName("parallelKey")[0].innerHTML = keyDMajor.degree1 + " minor";
        document.getElementsByClassName("subdominantKey")[0].innerHTML = keyDMajor.degree4 + " major";
        document.getElementsByClassName("dominantKey")[0].innerHTML = keyDMajor.degree5 + " major";
        document.getElementsByClassName("mediantKey")[0].innerHTML = keyDMajor.degree3 + " minor";
    }
    if (selectedKey === 'E_major') {
        for (i = 0 ; i < keyEMajor.degrees.length ; i++) {
            document.getElementsByClassName("keySignature")[i].innerHTML = keyEMajor.degrees[i];
            document.getElementsByClassName("diatonicChords")[i].innerHTML = keyEMajor.degrees[i] + " " + majorTonality[i];
        }
        document.getElementsByClassName("relativeKey")[0].innerHTML = keyEMajor.degree6 + " minor";
        document.getElementsByClassName("parallelKey")[0].innerHTML = keyEMajor.degree1 + " minor";
        document.getElementsByClassName("subdominantKey")[0].innerHTML = keyEMajor.degree4 + " major";
        document.getElementsByClassName("dominantKey")[0].innerHTML = keyEMajor.degree5 + " major";
        document.getElementsByClassName("mediantKey")[0].innerHTML = keyEMajor.degree3 + " minor";
    }
    if (selectedKey === 'F_major') {
        for (i = 0 ; i < keyFMajor.degrees.length ; i++) {
            document.getElementsByClassName("keySignature")[i].innerHTML = keyFMajor.degrees[i];
            document.getElementsByClassName("diatonicChords")[i].innerHTML = keyFMajor.degrees[i] + " " + majorTonality[i];
        }
        document.getElementsByClassName("relativeKey")[0].innerHTML = keyFMajor.degree6 + " minor";
        document.getElementsByClassName("parallelKey")[0].innerHTML = keyFMajor.degree1 + " minor";
        document.getElementsByClassName("subdominantKey")[0].innerHTML = keyFMajor.degree4 + " major";
        document.getElementsByClassName("dominantKey")[0].innerHTML = keyFMajor.degree5 + " major";
        document.getElementsByClassName("mediantKey")[0].innerHTML = keyFMajor.degree3 + " minor";
    }
    if (selectedKey === 'G_major') {
        for (i = 0 ; i < keyGMajor.degrees.length ; i++) {
            document.getElementsByClassName("keySignature")[i].innerHTML = keyGMajor.degrees[i];
            document.getElementsByClassName("diatonicChords")[i].innerHTML = keyGMajor.degrees[i] + " " + majorTonality[i];
        }
        document.getElementsByClassName("relativeKey")[0].innerHTML = keyGMajor.degree6 + " minor";
        document.getElementsByClassName("parallelKey")[0].innerHTML = keyGMajor.degree1 + " minor";
        document.getElementsByClassName("subdominantKey")[0].innerHTML = keyGMajor.degree4 + " major";
        document.getElementsByClassName("dominantKey")[0].innerHTML = keyGMajor.degree5 + " major";
        document.getElementsByClassName("mediantKey")[0].innerHTML = keyGMajor.degree3 + " minor";
    }
    if (selectedKey === 'A_major') {
        for (i = 0 ; i < keyAMajor.degrees.length ; i++) {
            document.getElementsByClassName("keySignature")[i].innerHTML = keyAMajor.degrees[i];
            document.getElementsByClassName("diatonicChords")[i].innerHTML = keyAMajor.degrees[i] + " " + majorTonality[i];
        }
        document.getElementsByClassName("relativeKey")[0].innerHTML = keyAMajor.degree6 + " minor";
        document.getElementsByClassName("parallelKey")[0].innerHTML = keyAMajor.degree1 + " minor";
        document.getElementsByClassName("subdominantKey")[0].innerHTML = keyAMajor.degree4 + " major";
        document.getElementsByClassName("dominantKey")[0].innerHTML = keyAMajor.degree5 + " major";
        document.getElementsByClassName("mediantKey")[0].innerHTML = keyAMajor.degree3 + " minor";
    }
    if (selectedKey === 'B_major') {
        for (i = 0 ; i < keyBMajor.degrees.length ; i++) {
            document.getElementsByClassName("keySignature")[i].innerHTML = keyBMajor.degrees[i];
            document.getElementsByClassName("diatonicChords")[i].innerHTML = keyBMajor.degrees[i] + " " + majorTonality[i];
        }
        document.getElementsByClassName("relativeKey")[0].innerHTML = keyBMajor.degree6 + " minor";
        document.getElementsByClassName("parallelKey")[0].innerHTML = keyBMajor.degree1 + " minor";
        document.getElementsByClassName("subdominantKey")[0].innerHTML = keyBMajor.degree4 + " major";
        document.getElementsByClassName("dominantKey")[0].innerHTML = keyBMajor.degree5 + " major";
        document.getElementsByClassName("mediantKey")[0].innerHTML = keyBMajor.degree3 + " minor";
    }
}

function initializeToC() {
    for (i = 0 ; i < keyC.degrees.length ; i++) {
        document.getElementsByClassName("keySignature")[i].innerHTML = keyC.degrees[i];
        if (selectedTonality === 'major') {
            document.getElementsByClassName("diatonicChords")[i].innerHTML = keyC.degrees[i] + " " + majorTonality[i];
        }
        if (selectedTonality === 'minor') {
            document.getElementsByClassName("diatonicChords")[i].innerHTML = keyC.degrees[i] + " " + naturalMinorTonality[i];
        }
    }
}

// DATABASE

const majorTonality = ["major", "minor", "minor", "major", "major", "minor", "diminished"];
const naturalMinorTonality = ["minor", "diminished", "major", "minor", "minor", "major", "major"];


const keyC = {
    degrees: ["C", "D", "E", "F", "G", "A", "B"]
}
const keyDMajor = {
    degrees: ["D", "E", "F♯", "G", "A", "B", "C♯"]
}
const keyEMajor = {
    degrees: ["E", "F♯", "G♯", "A", "B", "C♯", "D♯"]
}
const keyFMajor = {
    degrees: ["F", "G", "A", "B♭", "C", "D", "E"]
}
const keyGMajor = {
    degrees: ["F♯", "G", "A", "B", "C", "D", "E"]
}
const keyAMajor = {
    degrees: ["A", "B", "C♯", "D", "E", "F♯", "G♯"]
}
const keyBMajor = {
    degrees: ["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯"]
}

// SET APP'S STARTING KEY TO C MAJOR
initializeToC();