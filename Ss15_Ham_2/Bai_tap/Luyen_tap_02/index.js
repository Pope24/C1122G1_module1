function handleExercise1() {
    let squaredNumber = +document.getElementById('squaredNumber').value;
    let showResult = document.getElementById('resultEx1');
    showResult.innerHTML = "Kết quả là " + getValueSquaredNumber(squaredNumber);
}

//function get value squared of parameter
function getValueSquaredNumber(number) {
    return number * number;
}

function handleExercise2() {
    let radius = +document.getElementById('radiusCircle').value;
    let showResult = document.getElementById('resultEx2');
    showResult.innerHTML = "dien tich hinh tron la " + calculateAreaCircle(radius) + " và bán kính hình tròn là " + calculatePerimeterCircle(radius);
}

//function calculate area circle
function calculateAreaCircle(radius) {
    return radius * radius * Math.PI;
}

//function calculate perimeter circle
function calculatePerimeterCircle(radius) {
    return radius * 2 * Math.PI;
}

function handleExercise3() {
    let factorialNumber = +document.getElementById('factorialNumber').value;
    let showResult = document.getElementById('resultEx3');
    showResult.innerHTML = "Kết quả giai thừa là " + getValueFactorialNumber(factorialNumber);
}

//function calculate factorial number
function getValueFactorialNumber(number) {
    let sum = 1;
    for (let i = 1; i <= number; i++) {
        sum *= i;
    }
    return sum;
}

function handleExercise4() {
    let character = document.getElementById('character').value;
    let showResult = document.getElementById('resultEx4');
    showResult.innerHTML = "Kết quả là " + checkNumber(character);
}

//function check character
function checkNumber(character) {
    if (!isNaN(character)) {
        return true;
    } else {
        return false;
    }
}

function handleExercise5() {
    let firstNumber = +document.getElementById('firstNumber').value;
    let secondNumber = +document.getElementById('secondNumber').value;
    let thirdNumber = +document.getElementById('thirdNumber').value;
    let showResult = document.getElementById('resultEx5');
    showResult.innerHTML = "Số nhỏ nhất trong 3 số là " + findMinNumber(firstNumber, secondNumber, thirdNumber);
}

//function check min number
function findMinNumber(a, b, c) {
    return Math.min(a, b, c);
}

function handleExercise6() {
    let checkValue = +document.getElementById('unsignedNumber').value;
    let showResult = document.getElementById('resultEx6');
    showResult.innerHTML = "Kết quả là " + checkUnsignedNumber(checkValue);
}

//function check unsigned number
function checkUnsignedNumber(value) {
    if (value > 0) {
        return true;
    } else {
        return false;
    }
}

function handleExercise7() {
    let firstNumber = +document.getElementById('swapNumber1').value;
    let secondNumber = +document.getElementById('swapNumber2').value;
    let showResult = document.getElementById('resultEx7');
    showResult.innerHTML = "Kết quả sau khi tráo đổi của a, b lần lượt là " + swapNumber(firstNumber, secondNumber);
}

//function swap 2 number
function swapNumber(a, b) {
    let temporary;
    temporary = b;
    b = a;
    a = temporary;
    return [a, b];
}

function handleExercise8() {
    let showResult = document.getElementById('resultEx8');
    let arrLength = parseInt(prompt("Mảng của bạn có bao nhiêu phần tử ?"));
    let arr = [];
    for (let i = 0; i < arrLength; i++) {
        arr[i] = parseInt(prompt('Giá trị phần tử thứ ' + (i + 1) + ' là :'));
    }
    showResult.innerHTML = "Mảng ban đầu là " + arr + " và sau khi đảo ngược là " + reverseArray(arr);
}

//function reverse array
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    let temporary;
    for (left, right; left < right; left++, right--) {
        temporary = arr[right];
        arr[right] = arr[left];
        arr[left] = temporary;
    }
    return arr;
}

function handleExercise9() {
    let showResult = document.getElementById('resultEx9');
    let arrLength = parseInt(prompt("Mảng của bạn có bao nhiêu phần tử ?"));
    let arr = [];
    for (let i = 0; i < arrLength; i++) {
        arr[i] = prompt('Giá trị phần tử thứ ' + (i + 1) + ' là :');
    }
    let character = prompt("Nhập kí tự bạn muốn tìm trong mảng:");
    let isResultFind = findCharacterInArray(arr, character);
    if (isResultFind !== 0) {
        showResult.innerHTML = "Số lần kí tự xuất hiện trong mảng là " + isResultFind;
    } else {
        showResult.innerHTML = "Kí tự này không có trong mảng !!";
    }
}

//function find character in array
function findCharacterInArray(arr, character) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == character) {
            count++;
        }
    }
    return count;
}