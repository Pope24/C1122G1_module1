function showPrimeNumber() {
    let amountElement = parseInt(document.getElementById("amountElement").value);
    let showResult =document.getElementById("result");
    showResult.innerHTML = "";
    let count = 0;
    let number = 2;
    while (count < amountElement) {
        if (testPrime(number) === true) {
            showResult.innerHTML += number + "  ";
            number++;
            count++;
        }
        else {
            number++;
        }
    }
}

//function check prime number
function testPrime(n) {
    if(n === 2) {
        return true;
    } else {
        for(let x = 2; x <= Math.sqrt(n); x++) {
            if(n % x === 0) {
                return false;
                break;
            }
        }
        return true;
    }
}