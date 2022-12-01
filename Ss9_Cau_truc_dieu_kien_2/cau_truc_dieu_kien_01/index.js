//Kiểm tra A có chia hết cho B không
function handleExercise1() {
    let firstNumber = parseInt(document.getElementById('firstNumber').value);
    let secondNumber = parseInt(document.getElementById('secondNumber').value);
    if (firstNumber % secondNumber === 0) {
        alert('A chia hết cho B');
    }
    else {
        alert('A không chia hết cho B');
    }
}
// điều kiện vào học lớp 10.
function handleExercise2() {
    let yourAge = parseInt(document.getElementById('yourAge').value)
    if (yourAge >= 16) {
        alert('Your age is enough to study in high school');
    }
    else {
        alert('Your age is not enough to study in high school')
    }
}
// Ktr 1 số lớn hay nhỏ hơn 0.
function handleExercise3() {
    let integerNumber = parseInt(document.getElementById('integerNumber').value);
    if (integerNumber > 0) {
        alert('This number is bigger than 0');
    }
    else if (integerNumber < 0) {
        alert('This number is less than 0');
    }
    else {
        alert('This number is equal to 0');
    }
}
// tìm giá trị lớn nhất của ba số nguyên
function handleExercise4() {
    let numberA = parseInt(document.getElementById('numberA').value);
    let numberB = parseInt(document.getElementById('numberB').value);
    let numberC = parseInt(document.getElementById('numberC').value);
    let max = numberA;
    if (numberB >= numberC) {
        if (numberB > numberA) {
            alert('Number ' + numberB + ' is biggest number');
        }
        else {
            alert('Number ' + numberA + ' is biggest number');
        }
    }
    else {
        if (numberC > numberA) {
            alert('Number ' + numberC + ' is biggest number');
        }
        else {
            alert('Number ' + numberA + ' is biggest number');
        }
    }
}
//Xếp hạng học lực.
function handleExercise5() {
    let midtermScore = parseFloat(document.getElementById('midtermScore').value);
    let finalScore = parseFloat(document.getElementById('finalScore').value);
    let result = ((midtermScore * 2) + (finalScore * 3))/5;
    result = result.toFixed(2);
    if (result >= 8) {
        alert(result + " xếp học lực giỏi");
    }
    else if (result <8 && result >= 6.5) {
        alert(result + " xếp học lực khá");
    }
    else {
        alert(result + " xếp học lực trung bình");
    }
}
//Tinh hoa hồng nhận được theo KPI.
//Moi san pham co gia 150.000Vnd
function handleExercise6() {
    let yourKPI = parseInt(document.getElementById('yourKPI').value);
    let moneyBonus = 1;
    if (yourKPI >= 500) {
        moneyBonus = (yourKPI * 150000 * 6) / 100;
        alert('Your money bonus is ' + moneyBonus + ' VND');
    }
    else {
        if (yourKPI >= 300) {
            moneyBonus = (yourKPI * 150000 * 3) / 100;
            alert('Your money bonus is ' + moneyBonus + ' VND');
        }
        else if (yourKPI >= 100){
            moneyBonus = (yourKPI * 150000) / 100;
            alert('Your money bonus is ' + moneyBonus + ' VND');
        }
        else {
            alert('No money bonus');
        }
    }
}