//Bai 1: nối tất cả các phần tử trong một mảng chuỗi lại với nhau.
function handleExercise1() {
    let arrLength = parseInt(prompt("Nhập tổng số phần tử có trong mảng:"));
    let arr = [];
    for (let i = 0; i < arrLength; i++) {
        arr[i] = prompt("Giá trị phần tử thứ " + (i + 1) + " là:");
    }
    alert(arr.toString());
}
//Bai 2: chèn dấu (-) giữa 2  số chẵn.
function handleExercise2() {
    //Nhập 1 số theo data type string.
    let number = prompt("Nhập giá trị bạn muốn xử lý:");
    let arr = [];
    //Thêm phần tử đầu tiên theo data type number
    arr.push(parseInt(number[0]));
    for (let i = 1; i < number.length; i++) {
        //Ép string về number để xét điều kiện
        number[i] = parseInt(number[i]);
        if (number[i - 1] % 2 === 0 && number[i] % 2 === 0) {
            arr.push("-", number[i]);
        }
        else {
            arr.push(number[i]);
        }
    }
    alert(arr.join(''));
}
//Bai 3: Chuyen doi ki tu
function handleExercise3() {
    let str = prompt("Nhập chuỗi bạn muốn chuyển đổi");
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        }
        else if (str[i] === str[i].toLowerCase()){
            result += str[i].toUpperCase();
        }
        else {
            result += str[i];
        }
    }
    alert(result);
}
