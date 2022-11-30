function handleConvertMoney() {
    let amountMoney = parseInt(document.getElementById('amountMoney').value);
    let fromCurrency = document.getElementById('fromCurrency');
    let toCurrency = document.getElementById('toCurrency');
    let result = document.getElementById('result');

    if (fromCurrency.value == "VietNam" && toCurrency.value == "USD") {
        amountMoney /= 23000;
        result.innerHTML = "Result in: " + amountMoney + " USD";
    } else if (fromCurrency.value == "USD" && toCurrency.value == "VietNam") {
        amountMoney *= 23000;
        result.innerHTML = "Result in: " + amountMoney + " VND";
    } else {
        result.innerHTML = "Result in: " + amountMoney;
    }

}