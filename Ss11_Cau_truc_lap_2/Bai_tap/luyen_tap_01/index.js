//đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo.
function handleExercise1() {
    let i;
    for (i = 0; i <= 100; i++) {
        if (i === 99) {
            alert("i = " + i + " !! Click to countinue.");
        }
    }
}

//Lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập.
function handleExercise2() {
    let yourTemperature = parseInt(prompt('What is your temperature ?'));
    while (yourTemperature > 100 || yourTemperature < 20) {
        if (yourTemperature > 100) {
            alert('Your temperature need to decrease !!');
            yourTemperature = parseInt(prompt('What is your temperature again?'));
        }
        else {
            alert("Your temperature need to increase !!");
            yourTemperature = parseInt(prompt('What is your temperature again?'));
        }
    }
    alert('Your temperature is stability !!');
}

// Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
function handleExercise3() {
    let a = 1;
    let b = 1;
    let sum;
    let result = [];
    result.push(a,b);
    while (result.length < 20) {
        sum = a + b;
        result.push(sum);
        a = b;
        b = sum;
    }
    alert("20 số đầu tiên trong dãy fibonacci là: " +result);
}

// Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
function handleExercise4() {
    let a = 1;
    let b = 1;
    let sum;
    while (sum % 5 !== 0) {
        sum = a + b;
        a = b;
        b = sum;
    }
    alert("Số đầu tiên trong dãy fibonacci chia hết cho 5 là: " + sum);
}

// Tính tổng của 20 số đầu tiên trong dãy fibonacci.
function handleExercise5() {
    let a = 1;
    let b = 1;
    let sum;
    let result = [];
    result.push(a,b);
    while (result.length < 20) {
        sum = a + b;
        result.push(sum);
        a = b;
        b = sum;
    }
    result = result.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    alert("Tổng 20 số đầu tiên trong dãy fibonacci là " +result);
}

// Tổng của 30 số đầu tiên chia hết cho 7.
function handleExercise6() {
    let sum = 0;
    let count = 1;
    for (let i = 1; count <= 30; i++) {
        if (i % 7 === 0) {
            console.log(i, count)
            sum += i;
            count++;
        }
    }
    alert("Tổng của 30 số đầu tiên chia hết cho 7 là: " + sum);
}
//In ra các số từ 1 đến 100.
// Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó.
// Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".
function handleExercise7() {
    let showResult = document.getElementById("resultExercise7");
    let resultText = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            resultText += "FizzBuzz" + "   ";
        }
        else if (i % 5 === 0 ) {
            resultText += "Buzz" + "   " ;
        }
        else if (i % 3 === 0) {
            resultText += "Fizz" + "   " ;
        }
        else {
            resultText += `${i}` + "   " ;
        }
    }
    showResult.innerText = resultText;
}
//Game đoán số.
function handleExercise8() {
    let startPoint = parseInt(prompt("Điểm bắt đầu trong khoảng bạn muốn đoán ?"));
    let endPoint = parseInt(prompt("Điểm cuối cùng trong khoảng bạn muốn đoán ?"));
    for (let i = 0; i < 3; i++) {
        let numberInputed = parseInt(prompt("Số mà bạn nghĩ nằm trong khoảng này là: "));
        if (numberInputed == Math.floor(Math.random() * (endPoint - startPoint) ) + startPoint) {
            alert("Congratulations!!!");
            break;
        }
        else {
            numberInputed = alert(`Bạn đoán sai rồi. Bạn còn ${3- (i+1)} lần đoán. `);
        }
    }
}
