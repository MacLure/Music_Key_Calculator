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

function changeToMinorKey(degree) {
    // Take a degree and update display from major to minor key
}

function changeToMajorKey(degree) {
    // Take a degree and update display from minor to major key
}

function updateKey() {

    selectedKey = keySelector.options[keySelector.selectedIndex].value;
    selectedSharpFlat = sharpFlatSelector.options[sharpFlatSelector.selectedIndex].value;
    selectedTonality = majorMinorSelector.options[majorMinorSelector.selectedIndex].value;





    if (selectedKey === 'C_major') {
        document.getElementsByClassName("degree1")[0].innerHTML = keyCMajor.degree1;
        document.getElementsByClassName("degree2")[0].innerHTML = keyCMajor.degree2;
        document.getElementsByClassName("degree3")[0].innerHTML = keyCMajor.degree3;
        document.getElementsByClassName("degree4")[0].innerHTML = keyCMajor.degree4;
        document.getElementsByClassName("degree5")[0].innerHTML = keyCMajor.degree5;
        document.getElementsByClassName("degree6")[0].innerHTML = keyCMajor.degree6;
        document.getElementsByClassName("degree7")[0].innerHTML = keyCMajor.degree7;
        document.getElementsByClassName("degree1")[1].innerHTML = keyCMajor.degree1 + " major";
        document.getElementsByClassName("degree2")[1].innerHTML = keyCMajor.degree2 + " minor";
        document.getElementsByClassName("degree3")[1].innerHTML = keyCMajor.degree3 + " minor";
        document.getElementsByClassName("degree4")[1].innerHTML = keyCMajor.degree4 + " major";
        document.getElementsByClassName("degree5")[1].innerHTML = keyCMajor.degree5 + " major";
        document.getElementsByClassName("degree6")[1].innerHTML = keyCMajor.degree6 + " minor";
        document.getElementsByClassName("degree7")[1].innerHTML = keyCMajor.degree7 + " diminished";
        document.getElementsByClassName("relativeKey")[0].innerHTML = keyCMajor.degree6 + " minor";
        document.getElementsByClassName("parallelKey")[0].innerHTML = keyCMajor.degree1 + " minor";
        document.getElementsByClassName("subdominantKey")[0].innerHTML = keyCMajor.degree4 + " major";
        document.getElementsByClassName("dominantKey")[0].innerHTML = keyCMajor.degree5 + " major";
        document.getElementsByClassName("mediantKey")[0].innerHTML = keyCMajor.degree3 + " minor";
    }
    if (selectedKey === 'D_major') {
        document.getElementsByClassName("degree1")[0].innerHTML = keyDMajor.degree1;
        document.getElementsByClassName("degree2")[0].innerHTML = keyDMajor.degree2;
        document.getElementsByClassName("degree3")[0].innerHTML = keyDMajor.degree3;
        document.getElementsByClassName("degree4")[0].innerHTML = keyDMajor.degree4;
        document.getElementsByClassName("degree5")[0].innerHTML = keyDMajor.degree5;
        document.getElementsByClassName("degree6")[0].innerHTML = keyDMajor.degree6;
        document.getElementsByClassName("degree7")[0].innerHTML = keyDMajor.degree7;
        document.getElementsByClassName("degree1")[1].innerHTML = keyDMajor.degree1 + " major";
        document.getElementsByClassName("degree2")[1].innerHTML = keyDMajor.degree2 + " minor";
        document.getElementsByClassName("degree3")[1].innerHTML = keyDMajor.degree3 + " minor";
        document.getElementsByClassName("degree4")[1].innerHTML = keyDMajor.degree4 + " major";
        document.getElementsByClassName("degree5")[1].innerHTML = keyDMajor.degree5 + " major";
        document.getElementsByClassName("degree6")[1].innerHTML = keyDMajor.degree6 + " minor";
        document.getElementsByClassName("degree7")[1].innerHTML = keyDMajor.degree7 + " diminished";  
        document.getElementsByClassName("relativeKey")[0].innerHTML = keyDMajor.degree6 + " minor";
        document.getElementsByClassName("parallelKey")[0].innerHTML = keyDMajor.degree1 + " minor";
        document.getElementsByClassName("subdominantKey")[0].innerHTML = keyDMajor.degree4 + " major";
        document.getElementsByClassName("dominantKey")[0].innerHTML = keyDMajor.degree5 + " major";
        document.getElementsByClassName("mediantKey")[0].innerHTML = keyDMajor.degree3 + " minor";
    }
    if (selectedKey === 'E_major') {
        document.getElementsByClassName("degree1")[0].innerHTML = keyEMajor.degree1;
        document.getElementsByClassName("degree2")[0].innerHTML = keyEMajor.degree2;
        document.getElementsByClassName("degree3")[0].innerHTML = keyEMajor.degree3;
        document.getElementsByClassName("degree4")[0].innerHTML = keyEMajor.degree4;
        document.getElementsByClassName("degree5")[0].innerHTML = keyEMajor.degree5;
        document.getElementsByClassName("degree6")[0].innerHTML = keyEMajor.degree6;
        document.getElementsByClassName("degree7")[0].innerHTML = keyEMajor.degree7;
        document.getElementsByClassName("degree1")[1].innerHTML = keyEMajor.degree1 + " major";
        document.getElementsByClassName("degree2")[1].innerHTML = keyEMajor.degree2 + " minor";
        document.getElementsByClassName("degree3")[1].innerHTML = keyEMajor.degree3 + " minor";
        document.getElementsByClassName("degree4")[1].innerHTML = keyEMajor.degree4 + " major";
        document.getElementsByClassName("degree5")[1].innerHTML = keyEMajor.degree5 + " major";
        document.getElementsByClassName("degree6")[1].innerHTML = keyEMajor.degree6 + " minor";
        document.getElementsByClassName("degree7")[1].innerHTML = keyEMajor.degree7 + " diminished";
        document.getElementsByClassName("relativeKey")[0].innerHTML = keyEMajor.degree6 + " minor";
        document.getElementsByClassName("parallelKey")[0].innerHTML = keyEMajor.degree1 + " minor";
        document.getElementsByClassName("subdominantKey")[0].innerHTML = keyEMajor.degree4 + " major";
        document.getElementsByClassName("dominantKey")[0].innerHTML = keyEMajor.degree5 + " major";
        document.getElementsByClassName("mediantKey")[0].innerHTML = keyEMajor.degree3 + " minor";
    }
    if (selectedKey === 'F_major') {
        document.getElementsByClassName("degree1")[0].innerHTML = keyFMajor.degree1;
        document.getElementsByClassName("degree2")[0].innerHTML = keyFMajor.degree2;
        document.getElementsByClassName("degree3")[0].innerHTML = keyFMajor.degree3;
        document.getElementsByClassName("degree4")[0].innerHTML = keyFMajor.degree4;
        document.getElementsByClassName("degree5")[0].innerHTML = keyFMajor.degree5;
        document.getElementsByClassName("degree6")[0].innerHTML = keyFMajor.degree6;
        document.getElementsByClassName("degree7")[0].innerHTML = keyFMajor.degree7;
        document.getElementsByClassName("degree1")[1].innerHTML = keyFMajor.degree1 + " major";
        document.getElementsByClassName("degree2")[1].innerHTML = keyFMajor.degree2 + " minor";
        document.getElementsByClassName("degree3")[1].innerHTML = keyFMajor.degree3 + " minor";
        document.getElementsByClassName("degree4")[1].innerHTML = keyFMajor.degree4 + " major";
        document.getElementsByClassName("degree5")[1].innerHTML = keyFMajor.degree5 + " major";
        document.getElementsByClassName("degree6")[1].innerHTML = keyFMajor.degree6 + " minor";
        document.getElementsByClassName("degree7")[1].innerHTML = keyFMajor.degree7 + " diminished";
        document.getElementsByClassName("relativeKey")[0].innerHTML = keyFMajor.degree6 + " minor";
        document.getElementsByClassName("parallelKey")[0].innerHTML = keyFMajor.degree1 + " minor";
        document.getElementsByClassName("subdominantKey")[0].innerHTML = keyFMajor.degree4 + " major";
        document.getElementsByClassName("dominantKey")[0].innerHTML = keyFMajor.degree5 + " major";
        document.getElementsByClassName("mediantKey")[0].innerHTML = keyFMajor.degree3 + " minor";
    }
    if (selectedKey === 'G_major') {
        document.getElementsByClassName("degree1")[0].innerHTML = keyGMajor.degree1;
        document.getElementsByClassName("degree2")[0].innerHTML = keyGMajor.degree2;
        document.getElementsByClassName("degree3")[0].innerHTML = keyGMajor.degree3;
        document.getElementsByClassName("degree4")[0].innerHTML = keyGMajor.degree4;
        document.getElementsByClassName("degree5")[0].innerHTML = keyGMajor.degree5;
        document.getElementsByClassName("degree6")[0].innerHTML = keyGMajor.degree6;
        document.getElementsByClassName("degree7")[0].innerHTML = keyGMajor.degree7;
        document.getElementsByClassName("degree1")[1].innerHTML = keyGMajor.degree1 + " major";
        document.getElementsByClassName("degree2")[1].innerHTML = keyGMajor.degree2 + " minor";
        document.getElementsByClassName("degree3")[1].innerHTML = keyGMajor.degree3 + " minor";
        document.getElementsByClassName("degree4")[1].innerHTML = keyGMajor.degree4 + " major";
        document.getElementsByClassName("degree5")[1].innerHTML = keyGMajor.degree5 + " major";
        document.getElementsByClassName("degree6")[1].innerHTML = keyGMajor.degree6 + " minor";
        document.getElementsByClassName("degree7")[1].innerHTML = keyGMajor.degree7 + " diminished";
        document.getElementsByClassName("relativeKey")[0].innerHTML = keyGMajor.degree6 + " minor";
        document.getElementsByClassName("parallelKey")[0].innerHTML = keyGMajor.degree1 + " minor";
        document.getElementsByClassName("subdominantKey")[0].innerHTML = keyGMajor.degree4 + " major";
        document.getElementsByClassName("dominantKey")[0].innerHTML = keyGMajor.degree5 + " major";
        document.getElementsByClassName("mediantKey")[0].innerHTML = keyGMajor.degree3 + " minor";
    }
    if (selectedKey === 'A_major') {
        document.getElementsByClassName("degree1")[0].innerHTML = keyAMajor.degree1;
        document.getElementsByClassName("degree2")[0].innerHTML = keyAMajor.degree2;
        document.getElementsByClassName("degree3")[0].innerHTML = keyAMajor.degree3;
        document.getElementsByClassName("degree4")[0].innerHTML = keyAMajor.degree4;
        document.getElementsByClassName("degree5")[0].innerHTML = keyAMajor.degree5;
        document.getElementsByClassName("degree6")[0].innerHTML = keyAMajor.degree6;
        document.getElementsByClassName("degree7")[0].innerHTML = keyAMajor.degree7;
        document.getElementsByClassName("degree1")[1].innerHTML = keyAMajor.degree1 + " major";
        document.getElementsByClassName("degree2")[1].innerHTML = keyAMajor.degree2 + " minor";
        document.getElementsByClassName("degree3")[1].innerHTML = keyAMajor.degree3 + " minor";
        document.getElementsByClassName("degree4")[1].innerHTML = keyAMajor.degree4 + " major";
        document.getElementsByClassName("degree5")[1].innerHTML = keyAMajor.degree5 + " major";
        document.getElementsByClassName("degree6")[1].innerHTML = keyAMajor.degree6 + " minor";
        document.getElementsByClassName("degree7")[1].innerHTML = keyAMajor.degree7 + " diminished"; 
        document.getElementsByClassName("relativeKey")[0].innerHTML = keyAMajor.degree6 + " minor";
        document.getElementsByClassName("parallelKey")[0].innerHTML = keyAMajor.degree1 + " minor";
        document.getElementsByClassName("subdominantKey")[0].innerHTML = keyAMajor.degree4 + " major";
        document.getElementsByClassName("dominantKey")[0].innerHTML = keyAMajor.degree5 + " major";
        document.getElementsByClassName("mediantKey")[0].innerHTML = keyAMajor.degree3 + " minor";
    }
    if (selectedKey === 'B_major') {
        document.getElementsByClassName("degree1")[0].innerHTML = keyBMajor.degree1;
        document.getElementsByClassName("degree2")[0].innerHTML = keyBMajor.degree2;
        document.getElementsByClassName("degree3")[0].innerHTML = keyBMajor.degree3;
        document.getElementsByClassName("degree4")[0].innerHTML = keyBMajor.degree4;
        document.getElementsByClassName("degree5")[0].innerHTML = keyBMajor.degree5;
        document.getElementsByClassName("degree6")[0].innerHTML = keyBMajor.degree6;
        document.getElementsByClassName("degree7")[0].innerHTML = keyBMajor.degree7;
        document.getElementsByClassName("degree1")[1].innerHTML = keyBMajor.degree1 + " major";
        document.getElementsByClassName("degree2")[1].innerHTML = keyBMajor.degree2 + " minor";
        document.getElementsByClassName("degree3")[1].innerHTML = keyBMajor.degree3 + " minor";
        document.getElementsByClassName("degree4")[1].innerHTML = keyBMajor.degree4 + " major";
        document.getElementsByClassName("degree5")[1].innerHTML = keyBMajor.degree5 + " major";
        document.getElementsByClassName("degree6")[1].innerHTML = keyBMajor.degree6 + " minor";
        document.getElementsByClassName("degree7")[1].innerHTML = keyBMajor.degree7 + " diminished";
        document.getElementsByClassName("relativeKey")[0].innerHTML = keyBMajor.degree6 + " minor";
        document.getElementsByClassName("parallelKey")[0].innerHTML = keyBMajor.degree1 + " minor";
        document.getElementsByClassName("subdominantKey")[0].innerHTML = keyBMajor.degree4 + " major";
        document.getElementsByClassName("dominantKey")[0].innerHTML = keyBMajor.degree5 + " major";
        document.getElementsByClassName("mediantKey")[0].innerHTML = keyBMajor.degree3 + " minor";
    }
}

function initializeToC() {
    document.getElementsByClassName("degree1").innerHTML = keyCMajor.degree1;
    document.getElementsByClassName("degree2").innerHTML = keyCMajor.degree2;
    document.getElementsByClassName("degree3").innerHTML = keyCMajor.degree3;
    document.getElementsByClassName("degree4").innerHTML = keyCMajor.degree4;
    document.getElementsByClassName("degree5").innerHTML = keyCMajor.degree5;
    document.getElementsByClassName("degree6").innerHTML = keyCMajor.degree6;
    document.getElementsByClassName("degree7").innerHTML = keyCMajor.degree7;
}

// DATABASE

const keyCMajor = {
    degree1: "C",
    degree2: "D",
    degree3: "E",
    degree4: "F",
    degree5: "G",
    degree6: "A",
    degree7: "B",
}

const keyDMajor = {
    degree1: "D",
    degree2: "E",
    degree3: "F♯",
    degree4: "G",
    degree5: "A",
    degree6: "B",
    degree7: "C♯",
}

const keyEMajor = {
    degree1: "E",
    degree2: "F♯",
    degree3: "G♯",
    degree4: "A",
    degree5: "B",
    degree6: "C♯",
    degree7: "D♯",
}

const keyFMajor = {
    degree1: "F",
    degree2: "G",
    degree3: "A",
    degree4: "B♭",
    degree5: "C",
    degree6: "D",
    degree7: "E",
}
const keyGMajor = {
    degree1: "G",
    degree2: "A",
    degree3: "B",
    degree4: "C",
    degree5: "D",
    degree6: "E",
    degree7: "F♯",
}

const keyAMajor = {
    degree1: "A",
    degree2: "B",
    degree3: "C♯",
    degree4: "D",
    degree5: "E",
    degree6: "F♯",
    degree7: "G♯",
}

const keyBMajor = {
    degree1: "B",
    degree2: "C♯",
    degree3: "D♯",
    degree4: "E",
    degree5: "F♯",
    degree6: "G♯",
    degree7: "A♯",
}

// SET APP'S STARTING KEY TO C MAJOR
initializeToC();