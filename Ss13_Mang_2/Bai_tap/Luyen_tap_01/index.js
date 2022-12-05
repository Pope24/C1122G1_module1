function handleExercise1() {
    let arr = [];
    let count = 0;
    for (let i = 0; i < 10; i++) {
        arr[i] = parseInt(prompt('Giá trị phần tử thứ ' + (i + 1) + ' là :'));
    }
    for (let i = 0; i < 10; i++) {
        if (arr[i] > 10) {
            count++;
        }
    }
    alert('Có ' + count + ' phần tử lớn hơn 10');
}

function handleExercise2() {
    let arr = [];
    let max;
    for (let i = 0; i < 10; i++) {
        arr[i] = parseInt(prompt('Giá trị phần tử thứ ' + (i + 1) + ' là :'));
    }
    max = arr[0];
    for (let i = 0; i < 10; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    alert("Số lớn nhất trong mảng là " + max);
}

function handleExercise3() {
    let arrLength = parseInt(prompt("Có tất cả bao nhiêu phần tử có trong mảng:"));
    let arr = [];
    let max;
    let average = 0;
    for (let i = 0; i < arrLength; i++) {
        arr[i] = parseInt(prompt('Giá trị phần tử thứ ' + (i + 1) + ' là :'));
    }
    max = arr[0];
    for (let i = 0; i < arrLength; i++) {
        average += arr[i];
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    alert("Số lớn nhất trong mảng là " + max + " và giá trị trung bình của các phần tử của mảng là " + average/arrLength);
}

function handleExercise4() {
    let arrLength = parseInt(prompt("Có tất cả bao nhiêu phần tử có trong mảng:"));
    let arr = [];
    for (let i = 0; i < arrLength; i++) {
        arr[i] = parseInt(prompt('Giá trị phần tử thứ ' + (i + 1) + ' là :'));
    }
    alert("Mảng ban đầu là "+arr + " mảng sau khi bị đảo ngược là " + arr.reverse());
    /*
    Cách 2
    for (left = 0, right = length - 1; left < right; left += 1, right -= 1)
    {
        var temporary = array[left];
        array[left] = array[right];
        array[right] = temporary;
    }
    return array;*/
}

function handleExercise5() {
    let str = prompt('Nhập chuỗi bạn cần tìm số nguyên âm');
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-') {
            //Check phía sau dấu - có phải là số hay không.
            if (!isNaN(str[i+1])) {
                count++;
            }
        }
    }
    alert("Có tất cả " + count + " số nguyên âm trong chuỗi vừa nhập.");
}
function handleExercise6() {
    let arr = [];
    let flag = false;
    for (let i = 0; i < 10; i++) {
        arr[i] = parseInt(prompt('Giá trị phần tử thứ ' + (i + 1) + ' là :'));
    }
    let numberNeedFind = parseInt(prompt('Nhập số V bạn cần tìm trong mảng'));
    for (let i = 0; i < 10; i++) {
        if (numberNeedFind === arr[i]) {
            flag = true;
            break;
        }
        else {
            flag = false;
        }
    }
    if (flag) {
        alert('V is in the array');
    }
    else {
        alert('V is not in the array');
    }
}
function handleExercise7() {
    let arr = [];
    let flag = false;
    for (let i = 0; i < 10; i++) {
        arr[i] = parseInt(prompt('Giá trị phần tử thứ ' + (i + 1) + ' là :'));
    }
    let numberNeedFind = parseInt(prompt('Nhập số V bạn cần tìm trong mảng'));
    for (let i = 0; i < 10; i++) {
        if (numberNeedFind === arr[i]) {
            //Vòng lặp từ i để đưa i+1 lên i
            for (i; i < 10; i++) {
                arr[i] = arr[i + 1];
            }
            arr[arr.length - 1] = 0;
            break;
        }
    }
    alert("Mảng sau khi xử lý là " +arr);
}
function handleExercise8() {
    let arr = [];
    let temporary;
    for (let i = 0; i < 10; i++) {
        arr[i] = parseInt(prompt('Giá trị phần tử thứ ' + (i + 1) + ' là :'));
    }
    //Bubble sort
    for (let i =0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            //Đổi chỗ cho phần tử lớn hơn
            if (arr[i] > arr[j]) {
                temporary = arr[j];
                arr[j] = arr[i];
                arr[i] = temporary;
            }
        }
    }
    alert("Mảng sau khi được sắp xếp là: "+arr);
}
function handleExercise9() {
    let arrA = [];
    for (let i = 0; i < 10; i++) {
        arrA[i] = parseInt(prompt('Giá trị phần tử thứ ' + (i + 1) + ' của mảng A là :'));
    }
    let arrB = [];
    for (let i = 0; i < 10; i++) {
        arrB[i] = parseInt(prompt('Giá trị phần tử thứ ' + (i + 1) + ' của mảng B là :'));
    }
    //Nối mảng
    let arrC = [...arrA, ...arrB];
    alert("Mảng C là: " + arrC);
}