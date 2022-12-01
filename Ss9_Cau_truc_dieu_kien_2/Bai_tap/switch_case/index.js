function checkDay() {
    let result = document.getElementById("result");
    let monthInput = parseInt(document.getElementById("month").value);
    switch (monthInput) {
        case 4:
        case 6:
        case 9:
        case 11:
            result.innerHTML = `<p>Tháng ${monthInput} có 30 ngày</p>`;
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result.innerHTML = `<p>Tháng ${monthInput} có 31 ngày</p>`;
            break;
        case 2:
            result.innerHTML = `<p>Tháng ${monthInput} có 28 ngày hoặc 29 ngày</p>`;
            break;
        default:
            result.innerHTML = `<p>Không có tháng này</p>`;
    }
}