window.onload = function() {
    handleMultiplicationTable();
}
let tableElement = document.querySelector('table').querySelector('tbody');
function handleMultiplicationTable() {
    console.log(tableElement);
    let indexRow;
    let indexCol;
    //Set result by string
    let tbodyContent = "";
    for (indexRow = 1; indexRow < 10; indexRow++) {
        tbodyContent += `<tr>`;
        for (indexCol = 2; indexCol < 10; indexCol++) {
            tbodyContent += `<td>${indexCol} x ${indexRow} = ${indexRow * indexCol}</td>`;
        }
        tbodyContent += `</tr>`;
    }
    //Set string result to HTML by innerHTML
    tableElement.innerHTML = tbodyContent;
}