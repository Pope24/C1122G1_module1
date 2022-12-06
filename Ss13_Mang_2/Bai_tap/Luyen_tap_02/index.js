function handleExercise1() {
    let rowArray = +prompt("Mảng của bạn có bao nhiêu hàng");
    let colArray = +prompt("Hàng của bạn có bao nhiêu phần tử");
    let arr = [];
    for (let i = 0; i < rowArray; i++) {
        arr[i] = new Array();
        for (let j = 0; j < colArray; j++) {
            arr[i][j] = prompt("Giá trị phần tử thứ " + (i+1) + (j+1) +" của mảng là :");
        }
    }
    for (let i = 0; i < rowArray; i++) {
        arr[i] = `Hàng thứ ${(i+1)} là: ${arr[i]}  `;
    }
    alert(arr);
}

function handleExercise2() {
    let arr = [];
    let arrLength = +prompt("Mảng của bạn có bao nhiêu phần tử:");
    for (let i = 0; i < arrLength; i++) {
        arr[i] = prompt("Giá trị phần tử thứ " + (i + 1) + " la: ");
    }
    let arrReversed = arr.reverse().join("");
    alert("Mảng sau khi được đảo ngược là " +arrReversed);
}

function handleExercise3() {
    let arr = [];
    let arrLength = +prompt("Mảng của bạn có bao nhiêu phần tử:");
    let count = 0;
    for (let i = 0; i < arrLength; i++) {
        arr[i] = prompt("Giá trị phần tử thứ " + (i + 1) + " la: ");
    }
    for (let i = 0; i < arrLength; i++) {
        if (!isNaN(arr[i])) {
            count++;
        }
    }
    alert("Mảng có "+count+" ký tự số.");
}
function handleExercise4() {
    let count = 0;
    let str = prompt("Nhập chuỗi bạn cần đếm.");
    for (let i = 0; i < str.length; i++) {
        if ((isNaN(str[i])) && (str[i] = " ")) {
            count++;
        }
    }
    alert("Số từ trong chuỗi là "+count);
}

function handleExercise5() {
    let flag = false;
    let firstString = prompt("Nhập chuỗi thứ nhất:").trim();
    let secondString = prompt("Nhập chuỗi thứ 2:").trim();
    //Nếu như độ dài hai chuỗi bằng nhau
    if (firstString.length === secondString.length) {
        //So sánh từng kí tự của hai chuỗi với nhau
        for (let i = 0; i < firstString.length; i++) {
            if (firstString[i] === secondString[i]) {
                flag = true;
            }
            else {
                flag = false;
                break;
            }
        }
        if (flag) {
            alert("2 chuoi giong nhau !!");
        }
        else {
            alert("2 chuoi khong giong nhau !!")
        }
    }
    //Nếu độ dài hai chuỗi không bằng nhau
    else {
        alert("2 chuoi khong giong nhau !!")
    }
}
function handleExercise6() {
    let str = prompt("Nhập chuỗi cần xét: ").trim();
    for (let i = 0; i < str.length; i++) {
        str = str.replace("-","_");
    }
    //Thuật toán 2: ép string về mảng
    //Sau đó thay thế kí tự nếu tại 1 vị trí trong str có giá trị bằng "-"
    //Sau đó nối mảng về lại string.
    alert("Chuỗi sau khi thay đổi là "+ str);
}