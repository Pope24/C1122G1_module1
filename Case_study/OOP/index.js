class Ticket {
    constructor(arrayNumber) {
        this.firstNumber = arrayNumber[0];
        this.secondNumber = arrayNumber[1];
        this.thirdNumber = arrayNumber[2];
        this.fourthNumber = arrayNumber[3];
        this.fifthNumber = arrayNumber[4];
        this.sixthNumber = arrayNumber[5];
    }

    getListNumber() {
        return [this.firstNumber, this.secondNumber, this.thirdNumber, this.fourthNumber, this.fifthNumber, this.sixthNumber];
    }

    setNumberTicket(listNumber) {
        this.firstNumber = listNumber[0];
        this.secondNumber = listNumber[1];
        this.thirdNumber = listNumber[2];
        this.fourthNumber = listNumber[3];
        this.fifthNumber = listNumber[4];
        this.sixthNumber = listNumber[5];
    }
}

function buyTicket() {
    let chooseOfUser = +prompt("Lựa chọn của bạn: \n 1. Bạn muốn tự chọn số. \n 2. Hệ thống tự random.");
    if (chooseOfUser === 1) {
        alert("Mời bạn nhập vào các ô bên dưới.");
        getNumberFromInput();
    } else if (chooseOfUser === 2) {
        getNumberRandom();
    }
}

function getNumberFromInput() {
    let arrayNumberOfUser = [];
    let numberInput = document.getElementsByClassName("numberOfUser");
    for (let i = 0; i < numberInput.length; i++) {
        numberInput[i].disabled = false;
    }
}

//Mảng chứa các vé mà người dùng đã nhập
let arrayTicketOfUser = [];

//Xác nhận mua vé sau khi đã nhập xong
function confirmBuyTicket() {
    let arrayNumberOfUser = [];
    let numberInput = document.getElementsByClassName("numberOfUser");
    for (let i = 0; i < numberInput.length; i++) {
        arrayNumberOfUser.push(numberInput[i].value);
    }
    //Khởi tạo Object khi người dùng nhập xong và xác nhận
    let ticketOfUser = new Ticket(arrayNumberOfUser)
    //Push tấm vé đó vào mảng chứa vé
    arrayTicketOfUser.push(ticketOfUser);
    //Hỏi người dùng còn muốn mua nữa không.
    let chooseNextOfUser = +prompt("Bạn muốn mua nữa không ? \n 1. Có\n 2. Không")
    continueBuyTicket(chooseNextOfUser, arrayTicketOfUser, numberInput);
}

//Hàm xác nhận người chơi muốn chơi tiếp
function continueBuyTicket(chooseNextOfUser, arrayTicketOfUser, numberInput) {
    if (chooseNextOfUser === 1) {
        if (arrayTicketOfUser.length == 4) {
            alert("Bạn đã mua quá số lần quy định.");
        } else {
            alert("Mời bạn nhập số cho vé tiếp theo");
            buyTicket();
        }
    }
}

//Hàm lấy các số được random cho người chơi
function getNumberRandom() {
    let numberInput = document.getElementsByClassName("numberOfUser");
    for (let i = 0; i < numberInput.length; i++) {
        numberInput[i].value = Math.floor(Math.random() * 99) + 1;
    }
    numberInput[numberInput.length - 1].disabled = false;
}

function checkResult() {
    let numberOfProgram = document.getElementsByClassName("numberOfProgram");
    if (arrayTicketOfUser.length === 0) {
        alert("Bạn chưa mua vé, không thể xem kết quả.");
    } else {
        for (let i = 0; i < numberOfProgram.length; i++) {
            numberOfProgram[i].value = Math.floor(Math.random() * 99) + 1;
        }
    }
    let count = 0;
    for (let i = 0; i < arrayTicketOfUser.length; i++) {
        for (let j = 0; j < arrayTicketOfUser.length; j++) {
            if (arrayTicketOfUser[i][j] == numberOfProgram[j]) {
                count++;
            }
        }
        if (count === 6) {
            alert("Chúc mừng bạn đã trúng giải nhất ở tấm VietLot " + (i + 1) + " của bạn.");
        } else {
            count = 0;
            for (let j = 1; j < arrayTicketOfUser.length; j++) {
                if (arrayTicketOfUser[i][j] == numberOfProgram[j]) {
                    count++;
                }
            }

            if (count === 5) {
                alert("Chúc mừng bạn đã trúng giải 2 ở tấm VietLot " + (i + 1) + " của bạn.");
            } else {
                count = 0;
                for (let j = 3; j < arrayTicketOfUser.length; j++) {
                    if (arrayTicketOfUser[i][j] == numberOfProgram[j]) {
                        count++;
                    }
                }
                if (count === 3) {
                    alert("Chúc mừng bạn đã trúng giải 3 ở tấm VietLot " + (i + 1) + " của bạn.");
                } else alert("Chúc bạn may mắn lần sau. Tấm VietLot " + (i + 1) + " của bạn không nằm trong danh sách trúng giải.");
            }
        }
    }
}