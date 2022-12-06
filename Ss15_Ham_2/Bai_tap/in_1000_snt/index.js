function showResultPrime() {
    let showResult = document.getElementById("result");
    for (let i = 2; i <10000; i++) {
        if (isPrime(i)) {
            showResult.innerHTML += i + "<br/>";
        }
    }
}
function isPrime(number) {
    if (number === 2) {
        return 1;
    }
    else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return 0;
                break
            }
        }
        return 1;
    }
}