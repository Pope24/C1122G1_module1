//Bai 1
function handleExercise1() {
    alert("Xin Chao");
}

//Bai 2
function handleExercise2() {
    let numberInput = +document.getElementById("numberAscending").value;
    numberInput = increaseInValue(numberInput);
    document.getElementById("numberAscending").value = numberInput;
}

//Add 1 to parameter
function increaseInValue(number) {
    number += 1;
    return number;
}

//Bai 3
function handleExercise3() {
    let firstNumber = +document.getElementById("firstNumber").value;
    let secondNumber = +document.getElementById("secondNumber").value;
    handleParametersEx3(firstNumber, secondNumber);
}

//Handle condition 2 parameter
function handleParametersEx3(a, b) {
    if (a > b) {
        alert("The first numbber is greater than the second number !!");
    } else {
        let sum = a + b;
        alert("Total 2 number is : " + sum);
    }
}

//Bai 4
function handleExercise4() {
    let result = 0;
    alert("Kết quả ban đầu của result là : " + result);
    result = addNumbers();
    alert("Kết quả sau khi result được gắn với hàm addNumber là : " + result)
}

//Sample code
function addNumbers() {
    let firstNum = 4;
    let secondNum = 8;
    let result = firstNum + secondNum;
    return result;
}

//Bai 5
function handleExercise5() {
    let result = document.getElementById("resultEx5");
    let starArr = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
    let constellation = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
    //Gắn kết quả trả về của findIndexStar() cho index
    let index = findIndexStar(starArr);
    if (index !== -1) {
        result.innerHTML = `Chòm sao tương ứng là ${constellation[index]}.`;
    } else {
        result.innerHTML = `Không tìm thấy chòm sao tương ứng.`;
    }
}

//Hàm tìm kiếm tên ngôi sao, nếu có thì trả về vị trí ngôi sao đó, còn không thì trả thì -1.
function findIndexStar(starArr) {
    let starInput = prompt("Nhập tên các ngôi sao:");
    for (let i = 0; i < starArr.length; i++) {
        if (starArr[i] == starInput) {
            return i;
            break;
        }
    }
    return -1;
}