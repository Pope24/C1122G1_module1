// Exercise 3: Tính diện tích hình vuông.
function handleExercise3() {
    let squareEdge = parseFloat(document.getElementById('squareEdge').value);
    let result = squareEdge * squareEdge;
    alert(result.toFixed(2) + ' is area of this square');
}
// Exercise 4: Tính diện tích hình chữ nhật.
function handleExercise4() {
    let aEdgeRectangle = parseFloat(document.getElementById('aEdgeRectangle').value);
    let bEdgeRectangle = parseFloat(document.getElementById('bEdgeRectangle').value);
    let result = aEdgeRectangle * bEdgeRectangle;
    alert(result.toFixed(2) + ' is area of this rectangle');
}
// Exercise 5: Tính diện tích tam giác vuông.
function handleExercise5() {
    let aEdgeTriangle = parseFloat(document.getElementById('aEdgeTriangle').value);
    let bEdgeTriangle = parseFloat(document.getElementById('bEdgeTriangle').value);
    let bottomEdgeTriangle = Math.sqrt((aEdgeTriangle*aEdgeTriangle)+ (bEdgeTriangle*bEdgeTriangle))
    console.log(bottomEdgeTriangle)
    let heightEdgeTriangle = (aEdgeTriangle * bEdgeTriangle)/bottomEdgeTriangle;
    let areaTriangle = (heightEdgeTriangle * bottomEdgeTriangle)/2;
    alert('Area triangle is: ' + areaTriangle);
}
// Exercise 6: Giải phương trình bậc 1.
function handleExercise6() {
    let a = parseFloat(document.getElementById('aNumberEquation1').value);
    let b = parseFloat(document.getElementById('bNumberEquation1').value);
        if (a == 0 && b == 0){
            alert('Phương trình vô số nghiệm');
        }
        else if (a != 0 && b == 0){
            alert('Phương trình có nghiệm x = 0');
        }
        else if (a == 0 && b != 0){
            alert("Phương trình vô nghiệm");
        }
        else {
            alert('Phương trình có nghiệm x = ' + (-b/a).toFixed(2));
        }
}
// Exercise 7: Giải phương trình bậc 2.
function handleExercise7() {
    let root1, root2;
    let a = parseFloat(document.getElementById('aNumberEquation2').value);
    let b = parseFloat(document.getElementById('bNumberEquation2').value);
    let c = parseFloat(document.getElementById('cNumberEquation2').value);

    let discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        root1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
        root2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
        alert(`x1 = ${root1},  x2 = ${root2}`);
    }
    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);
        alert(`x1 = ${root1},  x2 = ${root2}`);
    }
    else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        alert(
            `x1 = ${realPart} + ${imagPart}i,  x2= ${realPart} - ${imagPart}i`
        );
    }
}
// Exercise 8: Kiểm tra tuổi.
function handleExercise8() {
    let yourAge = parseInt(document.getElementById('yourAge').value);
    if (yourAge > 0 && yourAge <120) {
        alert("Age exactly !!");
    }
    else {
        alert("Age failed !!");
    }
}
// Exercise 9: Kiểm tra tam giác.
function handleExercise9() {
    let aTriangle = parseFloat(document.getElementById('aNumberTriangle').value);
    let bTriangle = parseFloat(document.getElementById('bNumberTriangle').value);
    let cTriangle = parseFloat(document.getElementById('cNumberTriangle').value);
    if (aTriangle <= 0 || bTriangle <= 0 || cTriangle <= 0) {
        alert("There are not edge triangle.");
    }
    else if (aTriangle + bTriangle > cTriangle
            && bTriangle + cTriangle > aTriangle
            && cTriangle + aTriangle > bTriangle
    ) {
        alert("There are exactly edge triangle.");
    }
    else {
        alert("There are not edge triangle.");
    }
}
// Exercise 10: Viết chương trình tính giá điện.
function handleExercise10() {
    let amountKwh = parseFloat(document.getElementById('yourKwh').value);
    let amountMoneyPay;
    if (amountKwh < 0) {
        alert("Input error!");
    }
    else {
        amountMoneyPay = 3500 * amountKwh;
        alert("Amount money need to pay : " + amountMoneyPay + " vnd")
    }
}
//Exercise 11:  Tính thuế thu nhập cá nhân.
function handleExercise11() {
    let yourSalary = parseInt(document.getElementById("yourSalary").value);
    if (yourSalary < 0 || isNaN(yourSalary)) {
        alert("Your input error!!");
    }
    else {
        if (yourSalary >= 18000000) {
            yourSalary = (yourSalary * 20)/100 - 1650000;
            alert("Your tax is : " + yourSalary+ " vnd");
        }
        else if (yourSalary >=10000000) {
            yourSalary = (yourSalary *15)/100 - 750000;
            alert("Your tax is : " + yourSalary+ " vnd");
        }
        else {
            yourSalary = (yourSalary *5)/100;
            alert("Your tax is : " + yourSalary + " vnd");
        }
    }
}
// Exercise 12: Tính lãi suất ngân hàng cho vay.
function handleExercise12() {
    let moneyLoan = parseInt(document.getElementById("moneyLoan").value);
    let monthLoan = parseInt(document.getElementById("monthLoan").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value);
    let profitAmount = 1;
    if (moneyLoan <=0 || monthLoan <= 0 || interestRate <=0) {
        alert("Please try again.");
    }
    else {
        profitAmount = moneyLoan * interestRate/100 * monthLoan;
        alert("The profit amount that you must to pay is: " + profitAmount + " vnd");
    }
}