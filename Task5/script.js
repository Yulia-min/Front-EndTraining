let inputCalc = document.querySelector('.account'),
    resultCalc = document.querySelector('.result');

let array = "";

function input(i) {
    inputCalc.value = inputCalc.value + i;
}

function result() {
    if (eval(inputCalc.value) == undefined) {
        resultCalc.value = "";
        inputCalc.value = "Uncorrect";
    }

    if (eval(inputCalc.value) == Infinity) {
        resultCalc.value = "";
        inputCalc.value = 'Uncorrect';
    }

    resultCalc.value = eval(inputCalc.value);
    array += inputCalc.value + " = " + resultCalc.value + "\r\n";

}

function backspace() {
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length - 1);
}

function reset() {
    resultCalc.value = "";
    inputCalc.value = "";
}

function showHistory() {
    alert(array);
}