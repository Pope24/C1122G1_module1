let Apple = function () {
    this.weight = 10;
    this.getWeightApple = function () {
        return "Khối lượng táo hiện tại là " + this.weight;
    }
    this.decreaseApple = function () {
        this.weight = this.weight - 1;
        return this.weight;
    }
    this.isEmpty = function () {
        let flag = false;
        if (this.weight === 0) flag = true;
        return flag;
    }

}
let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.getInfoHuman = function () {
        return [this.name, this.gender, this.weight];
    }
    this.setGender = function (gender) {
        this.gender = gender;
        return this.gender;
    }
    this.checkApple = function () {
        let flag = true;
        if (apple.isEmpty() === true) {
            flag = false
        }
        return flag;
    }
    this.eatApple = function () {
        return this.name + " đang ăn táo"
    }
    this.say = function (message) {
        console.log(this.name + " " + message);
    }
    this.getName = function () {
        return this.name;
    }
    this.setName = function (name) {
        this.name = name;
        return this.name;
    }
    this.getWeight = function () {
        return "Cân nặng của " + this.name + " là " + this.weight;
    }
    this.setWeight = function () {
        this.weight = this.weight + 1;
        return this.weight;
    }
}
let apple = new Apple();
let Eva = new Human("Eva", false, 56);
let Adam = new Human("Adam", true, 66);
let showResult = document.getElementById("result");

function humanEatApple() {
    Eva.say("xin chào mọi người.");
    Adam.say("cũng chào mọi người nha hê hê.");
    showResult.innerHTML += "Ăn táo chung với chúng mình nhé" + "<br/>";
    showResult.innerHTML += apple.getWeightApple() + "<br/>";
    showResult.innerHTML += "<br/>";
    while (apple.isEmpty() !== true) {
        eatApple(Eva, apple, showResult);
        eatApple(Adam, apple, showResult);
    }
}

humanEatApple();

//Refactor code
function eatApple(human, apple, showResult) {
    showResult.innerHTML += human.eatApple() + "<br/>";
    apple.decreaseApple();
    showResult.innerHTML += apple.getWeightApple() + "<br/>";
    human.setWeight();
    showResult.innerHTML += human.getWeight() + "<br/>";
    showResult.innerHTML += "<br/>";
}

