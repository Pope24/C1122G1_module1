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
                alert("Your character is nguy??n ??m.");
                break;
            default:
                alert("Your character is ph??? ??m.");

        }
    }
}

//III.	Y??u c???u 3 (M???ng v?? Loop)
//Bai 1
function calculateArray() {
    let totalEl = +document.getElementById("totalElm").value;
    let array = [];
    let newArray = [];
    for (let i = 0; i < totalEl; i++) {
        array[i] = +prompt("Nh???p gi?? tr??? nguy??n c???a ph???n t??? th??? " + (i + 1));
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
    let result = 0;
    let max = arrFraction[0];
    for (let i = 0; i < arrFraction.length; i++) {
        if (arrFraction[i] > max) {
            result = i;
        }
    }
    alert("Index of max value in array is " + result);
}

//Bai 4
function handleTextNumber() {
    let intNumber = document.getElementById('intNumber').value;
    let textNumber = "";
    for (let i = 0; i < intNumber.length; i++) {
        switch (intNumber[i]) {
            case '1':
                textNumber += "m???t ";
                break;
            case '2':
                textNumber += "hai ";
                break;
            case '3':
                textNumber += "ba ";
                break;
            case '4':
                textNumber += "b???n ";
                break;
            case '5':
                textNumber += "n??m ";
                break;
            case '6':
                textNumber += "s??u ";
                break;
            case '7':
                textNumber += "b???y ";
                break;
            case '8':
                textNumber += "t??m ";
                break;
            case '9':
                textNumber += "ch??n ";
                break;
            case '0':
                textNumber += "kh??ng ";
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
    alert("T???ng s??? ti???n b???n c???n tr??? l?? " + amountMoney + " vnd");
    alert("Ho??n t???t g???i ????? u???ng. B???n ch??? trong gi??y l??t.");
}

//IV. Y??u c???u 4 (String)
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
    alert("Chu???n h??a x??u k?? t???: " + newString);
}

//Bai 2
function checkString() {
    let string = document.getElementById("checkString").value;
    alert("S??? l?????ng k?? t??? kh??c nhau trong x??u: " + removeCharacterSimilar(string).length);
}

//function xo?? nh???ng k?? t??? gi???ng nhau trong chu???i
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
    let s1 = document.getElementById("string1").value;
    let s2 = document.getElementById("string2").value
    let newS1 = s1;
    newS1 = newS1.split("");
    for (let i = 0; i < newS1.length; i++) {
        for (let j = 0; j < newS1.length; j++) {
            if (i != j && newS1[i] == newS1[j]) {
                newS1.splice(j, 1);
            }
        }
    }
    let repeatedCharS1 = [];
    let repeatedCharS2 = [];
    for (let i = 0; i < newS1.length; i++) {
        let count = 0;
        for (let j = 0; j < s1.length; j++) {
            if (s1[j] == newS1[i]) {
                count++;
            }
        }
        repeatedCharS1.push(count);
        let count2 = 0;
        for (let j = 0; j < s2.length; j++) {
            if (s2[j] == newS1[i]) {
                count2++;
            }
        }
        repeatedCharS2.push(count2);
    }
    let text = "";
    for (let i = 0; i < newS1.length; i++) {
        if (repeatedCharS2[i] > repeatedCharS1[i]) {
            if (repeatedCharS1[i] != 0) {
                text += newS1[i] + " xuat hien "+ repeatedCharS1[i] + "lan \n";
            }
        }
        else {
            if (repeatedCharS2[i] != 0) {
                text += newS1[i] + " xuat hien "+ repeatedCharS2[i] + "lan \n";
            }
        }
    }
    alert(text)
}

//V. Y??u c???u 5 (M???ng 2 chi???u)
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
    alert("T???ng c??c s??? ch???n trong m???ng hai chi???u n??y l?? " + sum);
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
    alert("C??c s??? nguy??n t??? c?? trong m???ng l?? " + primeArray + " t???ng c?? " + primeArray.length);
}

//function check s??? nguy??n t???
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
    alert("S??? l???n nh???t trong m???ng l?? " + max + " v?? s??? b?? nh???t l?? " + min);
}
function clickToSwitchPage() {
    let url = "http://localhost:63342/Module_1/Case_study/OOP/index.html?_ijt=hnqta36fgpctdmcn8srrvqj45&_ij_reload=RELOAD_ON_SAVE";
    window.open(url,'_blank');
}