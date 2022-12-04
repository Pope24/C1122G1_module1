window.onload = function () {
    drawFirstTriangle();
    drawSecondTriangle();
    drawThirdTriangle();
    drawFourthTriangle();
    showRectangle();
}
function handleFactorial() {
    let integerNumber = parseInt(document.getElementById("IntegerValue").value);
    let resultFactorial = 1;
    for (let i = 1; i <= integerNumber; i++) {
        resultFactorial *= i;
    }
    alert("Result factorial is :" + resultFactorial);
}
//Hình tam giác vuông thứ nhất
function drawFirstTriangle() {
    //Thứ tự hàng
    let rowOrder;
    //Thứ tự cột
    let columnOrder;
    //Hình sẽ được gắn vào id ResultFirstTriangle
    let showFirstTriangle = document.getElementById("ResultFirstTriangle");
    //Hàng sẽ bắt đầu chạy từ hàng thứ nhất đến hàng thứ 5
    for (rowOrder = 1; rowOrder <= 5; rowOrder++) {
        // Cột sẽ chạy từ điểm thứ nhất đến điểm cuối = hàng hiện tại
        for (columnOrder = 1; columnOrder <= rowOrder; columnOrder++) {
            showFirstTriangle.innerHTML += "*";
        }
        //Kết thúc 1 hàng
        showFirstTriangle.innerHTML += "<br/>";
    }
}
//Hình tam giác vuông thứ hai
function drawSecondTriangle() {
    //Tổng số hàng cần in, nếu muốn thay đổi kich thuoc tam giác thì thay đổi ở đây
    let amountRow = 5;
    //Thứ tự hàng
    let rowOrder;
    //Thứ tự cột
    let columnOrder;
    let showSecondTriangle = document.getElementById("ResultSecondTriangle");
    //Vòng lặp ngược: chạy hàng từ "Tổng số hàng" đã cho đến 1
    for (rowOrder = amountRow; rowOrder >= 1; rowOrder--) {
        //Cột sẽ được chạy theo hàng hiện tại
        for (columnOrder = rowOrder; columnOrder >= 1; columnOrder--) {
            showSecondTriangle.innerHTML += "*";
        }
        //Kết thúc 1 hàng
        showSecondTriangle.innerHTML += "<br/>";
    }
}
//Hình tam giác vuông thứ 3
function drawThirdTriangle() {
    //Tổng số hàng cần in, nếu muốn thay đổi kich thuoc tam giác thì thay đổi ở đây
    let amountRow = 5;
    //Thứ tự hàng
    let rowOrder;
    //Thứ tự cột
    let columnOrder;
    let showThirdTriangle = document.getElementById("ResultThirdTriangle");
    //Hàng sẽ được chạy từ 1 đến tổng số hàng đã cho
    for ( rowOrder = 1; rowOrder <= amountRow; rowOrder++) {
        //Cột sẽ được chạy từ 1 đến Tổng số hàng đã cho
        for (columnOrder = 1; columnOrder <=  amountRow; columnOrder++) {
            //Dấu cách được in khi giá trị của cột hiện tại <= tổng số hàng - giá trị của hàng hiện tại
            if (columnOrder <= amountRow - rowOrder) {
                showThirdTriangle.innerHTML += "&nbsp;&nbsp;";
            }
            //khi giá trị của cột hiện tại lớn hơn tổng số hàng - giá trị của hàng hiện tại thì in dấu *
            else {
                showThirdTriangle.innerHTML += "*";
            }
        }
        //Kết thúc 1 hàng
        showThirdTriangle.innerHTML += "<br/>";
    }
}
//Hình tam giác vuông thứ 4
function drawFourthTriangle() {
    //Tổng số hàng cần in, nếu muốn thay đổi kich thuoc tam giác thì thay đổi ở đây
    let amountRow = 5;
    //Thứ tự hàng
    let rowOrder;
    //Thứ tự cột
    let columnOrder;
    let showFourthTriangle = document.getElementById("ResultFourthTriangle");
    //Hàng sẽ được chạy từ Tổng số hàng đã cho về 1
    for ( rowOrder = amountRow; rowOrder >= 1; rowOrder--) {
        //Cột sẽ được chạy từ 1 đến Tổng số hàng đã cho
        for (columnOrder = 1; columnOrder <= amountRow; columnOrder++) {
            //Dấu cách được in khi giá trị của cột hiện tại <= tổng số hàng - giá trị của hàng hiện tại
            if (columnOrder <= amountRow - rowOrder) {
                showFourthTriangle.innerHTML += "&nbsp;&nbsp;";
            }
            //khi giá trị của cột hiện tại lớn hơn tổng số hàng - giá trị của hàng hiện tại thì in dấu *
            else {
                showFourthTriangle.innerHTML += "*";
            }
        }
        //Kết thúc 1 hàng
        showFourthTriangle.innerHTML += "<br/>";
    }
    console.log(showFourthTriangle)
}
function showRectangle() {
    //Tổng số hàng cần in, muốn thay đổi chiều rộng thì thay đổi ở đây
    let amountRow = 10;
    //Tổng số cột cần in, muốn thay đổi chiều dài thì thay đổi ở đây
    let amountColumn = 30;
    //Định nghĩa thứ tự hàng
    let rowOrder;
    //Định nghĩa thứ tự cột
    let columnOrder;
    let showRectangle = document.getElementById("ResultRectangle");
    for ( rowOrder = 1; rowOrder <= amountRow; rowOrder++) {
        for (columnOrder = 1; columnOrder <= amountColumn; columnOrder++) {
            if (rowOrder === 1 || columnOrder === 1 || rowOrder === amountRow || columnOrder === amountColumn) {
                showRectangle.innerHTML += "*";
            }
            else {
                showRectangle.innerHTML += "&nbsp;&nbsp;"
            }
        }
        showRectangle.innerHTML += "<br/>";
    }
}
