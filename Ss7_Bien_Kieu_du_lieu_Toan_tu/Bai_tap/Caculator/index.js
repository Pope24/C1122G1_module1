window.onload = function () {
    getNumberList()
}

//Get list of number element from table
function getNumberList() {
    let numberList = document.querySelectorAll(".con_so");
    getNumberFromList(numberList)
}

//Get number from number list element
function getNumberFromList(numberList) {
    for (let i = 0; i < numberList.length; i++) {
        numberList[i].addEventListener("click", function (e) {
            let numberValue = e.target.innerText;
            //    Print the number to #gia_tri_xuat
            printNumberToScreen(numberValue)
        })
    }
}

//    Print the number to #gia_tri_xuat
function printNumberToScreen(number) {
    let numberClicked = document.getElementById("gia_tri_xuat");
    //Concat string number
    numberClicked.innerHTML = numberClicked.innerText + number;

}

//Execute the operator when click equal "="
function executeOperator() {
    let numberClicked = document.getElementById("gia_tri_xuat");
    let result = eval(numberClicked.innerText)
    numberClicked.innerText = result
    printResultToOldValue(result)
}

//Print result to #gia_tri_cu
function printResultToOldValue(result) {
    let oldValue = document.getElementById("gia_tri_cu");
    oldValue.innerText = result
}

//Delete all text number in #gia_tri_cu and #gia_tri_xuat
function deleteAll() {
    document.getElementById("gia_tri_xuat").innerText = "";
    document.getElementById("gia_tri_cu").innerText = "";
}

function deleteOneElement() {
    let valueCurrent = document.getElementById("gia_tri_xuat");
    let newResult = valueCurrent.innerText.slice(0, -1)
    valueCurrent.innerText = newResult;

}