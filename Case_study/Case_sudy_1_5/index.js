window.onload = function () {
    drawImage1();
    drawImage2();
    drawImage3();
    drawImage4();
}

//Ve hinh chu nhat
function drawImage1() {
    let resultImage = document.getElementById("resultImg1");
    //Muon thay doi kich thuoc hinh chu nhat thi thay doi width hoac height.
    let height = 4;
    let width = 5;
    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= width; j++) {
            //Dieu kien de in ra dau sao
            if (i === 1 || j === 1 || i === height || j === width) {
                resultImage.innerHTML += "*";
            } else {
                resultImage.innerHTML += "&nbsp;&nbsp;";
            }
        }
        //Sau khi ket thuc 1 hang thi <br/>
        resultImage.innerHTML += "<br/>";

    }
}

//Ve hinh tam giac vuong rong
function drawImage2() {
    let resultImage = document.getElementById("resultImg2");
    //Muon thay doi kich thuoc tam giac thi thay doi height
    let height = 5;
    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= i; j++) {
            //Dieu kien de in ra dau sao
            if (j === 1 || j === i || i === height) {
                resultImage.innerHTML += "*";
            } else {
                resultImage.innerHTML += "&nbsp;&nbsp;";
            }
        }
        resultImage.innerHTML += "<br/>";
    }
}

//Ve hinh tam giac can dac
function drawImage3() {
    let resultImage = document.getElementById("resultImg3");
    //Muon thay doi kich thuoc tam giac can thi thay doi height
    let height = 5;
    for (let i = 1; i <= height; i++) {
        //In dau cach
        for (let j = height; j > i; j--) {
            resultImage.innerHTML += "&nbsp;&nbsp;";
        }
        //In dau sao
        for (let k = 1; k <= (i * 2) - 1; k++) {
            resultImage.innerHTML += "*";
        }
        resultImage.innerHTML += "<br/>";
    }
}

//Ve hinh tam giac can rong
function drawImage4() {
    let resultImage = document.getElementById("resultImg4");
    let height = 5;
    //Lap cac row cua tam giac
    for (let i = 1; i <= height; i++) {
        //In dau cach tu le den canh de tao ra khuon cua tam giac
        for (let j = height; j > i; j--) {
            resultImage.innerHTML += "&nbsp;&nbsp;";
        }
        //Thuat toan in tam giac rong
        for (let k = 1; k <= (i * 2) - 1; k++) {
            if (k == 1 || k == (i * 2) - 1 || i == height) {
                resultImage.innerHTML += "*"
            } else {
                resultImage.innerHTML += "&nbsp;&nbsp;";
            }
        }
        resultImage.innerHTML += "<br/>";
    }
}

//If_switchCase
function calculateSalary() {
    let yourSalary = +document.getElementById("yourSalary").value;
    let tax = 1;
    if (yourSalary >= 15000000) {
        tax = yourSalary * 20 / 100;
    } else {
        if (yourSalary >= 7000000) {
            tax = yourSalary * 10 / 100;
        } else {
            tax = yourSalary * 5 / 100;
        }
    }
    alert("Your tax is " + tax);
}

function checkCharacter() {
    let yourCharacter = document.getElementById("yourCharacter").value;
    if (isNaN(yourCharacter) == false) {
        alert("Your character is number or special characters");
    } else {
        switch (yourCharacter) {
            case "o":
            case "u":
            case "i":
            case "a":
            case "e":
            case "O":
            case "U":
            case "I":
            case "A":
            case "E":
                alert("Your character is nguyên âm.");
                break;
            default:
                alert("Your character is phụ âm.");

        }
    }
}

//III.	Yêu cầu 3 (Mảng và Loop)
//Bai 1
function calculateArray() {
    let totalEl = +document.getElementById("totalElm").value;
    let array = [];
    let newArray = [];
    for (let i = 0; i < totalEl; i++) {
        array[i] = +prompt("Nhập giá trị nguyên của phần tử thứ " + (i + 1));
    }
    for (let i = 0; i < totalEl; i++) {
        let elm = 0;
        for (let j = 0; j <= i; j++) {
            elm += array[j];
        }
        newArray.push(elm);
    }
    alert(newArray);
}

// Bai 2
function getElmSimilarArray() {
    let totalElmArr1 = +document.getElementById("totalElmArr1").value;
    let totalElmArr2 = +document.getElementById("totalElmArr2").value;
    let arr1 = [], arr2 = [];
    let newArray = [];
    for (let i = 0; i < totalElmArr1; i++) {
        arr1[i] = +prompt("Nhap phan tu thu " + (i + 1) + " cua mang 1");
    }
    for (let i = 0; i < totalElmArr2; i++) {
        arr2[i] = +prompt("Nhap phan tu thu " + (i + 1) + " cua mang 2");
    }
    // let difference = arr1
    //     .filter(x => !arr2.includes(x))
    //     .concat(arr2.filter(x => !arr1.includes(x)));
    // alert(difference);
    for (let i = 0; i < arr1.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            newArray.push(arr2[i]);
        }
    }
    alert(newArray);
}

//Bai 3
function getFraction() {
    let listFraction = +document.getElementById('listFraction').value;
    //Mang tu so
    let numerators = [];
    //Mang mau so
    let denominators = [];
    //Mang chua ket qua cua tu so/mauso
    let arrFraction = [];
    //Nhap tu so
    for (let i = 0; i < listFraction; i++) {
        numerators[i] = +prompt("Nhap phan tu thu " + (i + 1) + " cua danh sach tu so.");
    }
    //Nhap mau so
    for (let i = 0; i < listFraction; i++) {
        denominators[i] = +prompt("Nhap phan tu thu " + (i + 1) + " cua danh sach mau so.");
    }
    // Lay gia tri cua tu so/mau so roi push vao mang moi
    for (let i = 0; i < listFraction; i++) {
        let factor = numerators[i] / denominators[i];
        arrFraction.push(numerators[i] / denominators[i]);
    }
    //Sap xep mang moi theo thu tu giam dan
    arrFraction.sort().reverse();
    //Lay chi so dau tien cua so thap phan lon nhat
    //Math.trunc() se lay phan nguyen cho du so thap phan la bao nhieu
    arrFraction[0] = Math.trunc((arrFraction[0] - Math.trunc(arrFraction[0])) * 10);
    alert("Phần thập phân lớn nhất trong dãy thập phân là " + arrFraction[0]);
}

//Bai 4
function handleTextNumber() {
    let intNumber = document.getElementById('intNumber').value;
    let textNumber = "";
    for (let i = 0; i < intNumber.length; i++) {
        switch (intNumber[i]) {
            case '1':
                textNumber += "một ";
                break;
            case '2':
                textNumber += "hai ";
                break;
            case '3':
                textNumber += "ba ";
                break;
            case '4':
                textNumber += "bốn ";
                break;
            case '5':
                textNumber += "năm ";
                break;
            case '6':
                textNumber += "sáu ";
                break;
            case '7':
                textNumber += "bảy ";
                break;
            case '8':
                textNumber += "tám ";
                break;
            case '9':
                textNumber += "chín ";
                break;
            case '0':
                textNumber += "không ";
                break;
        }
    }
    alert(textNumber);
}

//Bai 5
function handleCallDrink() {
    let typeOfDrink = document.getElementsByClassName("typeOfDrink");
    let amountDrink = document.getElementsByClassName("amountDrink");
    let amountMoney = 0;
    for (let i = 0; i < amountDrink.length; i++) {
        let type = parseInt(typeOfDrink[i].value);
        let amountOfType = parseInt(amountDrink[i].value);
        console.log(type, amountOfType, amountMoney);
        switch (type) {
            case 1:
                amountMoney += amountOfType * 12000;
                break;
            case 2:
            case 4:
            case 6:
                amountMoney += amountOfType * 20000;
                break;
            case 3:
                amountMoney += amountOfType * 18000;
                break;
            case 5:
                amountMoney += amountOfType * 7000;
                break;
            default:
                amountMoney += 0;
                break;
        }
    }
    alert("Tổng số tiền bạn cần trả là " + amountMoney + " vnd");
    alert("Hoàn tất gọi đồ uống. Bạn chờ trong giây lát.");
}

//IV. Yêu cầu 4 (String)
//Bai 1
function switchString() {
    let stringValue = document.getElementById("switchString").value;
    let newString = [];
    //Loai bo nhieu dau cach trong chuoi
    stringValue = stringValue.replace(/\s+/g, ' ').trim();
    for (let i = 0; i < stringValue.length; i++) {
        if (i == 0 || stringValue[i - 1] == " ") {
            let textUpperCase = stringValue[i].toUpperCase();
            newString.push(textUpperCase);
        } else {
            let textLowerCase = stringValue[i].toLowerCase();
            newString.push(textLowerCase);
        }
    }
    newString = newString.join("");
    alert("Chuẩn hóa xâu ký tự: " + newString);
}

//Bai 2
function checkString() {
    let string = document.getElementById("checkString").value;
    alert("Số lượng kí tự khác nhau trong xâu: " + removeCharacterSimilar(string).length);
}

//function xoá những kí tự giống nhau trong chuỗi
function removeCharacterSimilar(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (string[i] == string[j]) {
                if (i !== j) {
                    string = string.replace(string[j], "");
                }
            }
        }
    }
    return string;
}

//Bai 3
function findCharacterSimilar() {
    let stringSimilarChar = "";
    let count = 0;
    let string1 = document.getElementById("string1").value;
    let string2 = document.getElementById("string2").value;
    //Sử dụng hàm hoá những kí tự giống nhau để lọc ra những kí tự riêng biệt không lặp lại
    string1 = removeCharacterSimilar(string1);
    string2 = removeCharacterSimilar(string2);
    console.log(string1, string2);
    if (string1.length >= string2.length) {
        for (let i = 0; i < string1.length; i++) {
            if (string1.indexOf(string2[i]) != -1) {
                count++;
                console.log(string2[i]);
                stringSimilarChar += string2[i];
            }
        }
    } else {
        for (let i = 0; i < string2.length; i++) {
            if (string2.indexOf(string1[i]) != -1) {
                count++;
                console.log(string1[i]);
                stringSimilarChar += string1[i];
            }
        }
    }
    alert("số lượng kí tự chung giữa chúng là" + count + " đó là " + stringSimilarChar);
}

//V. Yêu cầu 5 (Mảng 2 chiều)
//Bai 1
function calculateEvenNumberInArray() {
    let rowArray = +document.getElementById("rowOfArray").value;
    let columnArray = +document.getElementById("colOfArray").value;
    let sum = 0;
    let arr = [];
    for (let i = 0; i < rowArray; i++) {
        arr[i] = [];
        for (let j = 0; j < columnArray; j++) {
            arr[i][j] = +prompt("Nhap phan tu thu " + (i + 1) + "" + (j + 1) + "cua mang");
        }
    }
    for (let i = 0; i < rowArray; i++) {
        for (let j = 0; j < columnArray; j++) {
            if (arr[i][j] % 2 === 0) {
                sum += arr[i][j];
            }
        }
    }
    alert("Tổng các số chẵn trong mảng hai chiều này là " + sum);
}

//Bai 2
function listedPrimeArray() {
    let rowOfPrimeArray = +document.getElementById("rowOfPrimeArray").value;
    let colOfPrimeArray = +document.getElementById("colOfPrimeArray").value;
    let array = [];
    let primeArray = [];
    for (let i = 0; i < rowOfPrimeArray; i++) {
        array[i] = [];
        for (let j = 0; j < colOfPrimeArray; j++) {
            array[i][j] = +prompt("Nhap phan tu thu " + (i + 1) + "" + (j + 1) + "cua mang");
        }
    }
    for (let i = 0; i < rowOfPrimeArray; i++) {
        for (let j = 0; j < colOfPrimeArray; j++) {
            if (checkPrimeNumber(array[i][j]) == true) {
                primeArray.push(array[i][j]);
            }
        }
    }
    for (let i = 0; i < primeArray.length; i++) {
        for (let j = 0; j < primeArray.length; j++) {
            if (primeArray[i] == primeArray[j]) {
                if (i !== j) {
                    primeArray.splice(j, 1);
                }
            }
        }
    }
    alert("Các số nguyên tố có trong mảng là " + primeArray + " tổng có " + primeArray.length);
}

//function check số nguyên tố
function checkPrimeNumber(numb) {
    if (numb == 2 || numb == 3) {
        return true;
    } else if (numb > 3) {
        for (let i = 2; i <= Math.sqrt(numb); i++) {
            if (numb % i === 0) {
                return false;
                break;
            }
        }
        return true;
    }
}

//Bai 3
function findMaxMinInArray() {
    let row = +document.getElementById("rowFindMaxMinArray").value;
    let col = +document.getElementById("colFindMaxMinArray").value;
    let array = [];
    for (let i = 0; i < row; i++) {
        array[i] = [];
        for (let j = 0; j < col; j++) {
            array[i][j] = +prompt("Nhap phan tu thu " + (i + 1) + "" + (j + 1) + "cua mang");
        }
    }
    //tim max min
    let max = array[0][0];
    let min = array[0][1];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (array[i][j] > max) {
                max = array[i][j];
            }
            if (array[i][j] < min) {
                min = array[i][j];
            }
        }
    }
    alert("Số lớn nhất trong mảng là " + max + " và số bé nhất là " + min);
}
function clickToSwitchPage() {
    let url = "http://localhost:63342/Module_1/Case_study/OOP/index.html?_ijt=hnqta36fgpctdmcn8srrvqj45&_ij_reload=RELOAD_ON_SAVE";
    window.open(url,'_blank');
}