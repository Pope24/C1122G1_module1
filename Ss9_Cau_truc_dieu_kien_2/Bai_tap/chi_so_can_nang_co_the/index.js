function caculateBmi() {
    let result = document.getElementById('result');
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    height = height.replace("m",".");
    let bmi = weight / ( height * height );
    bmi = bmi.toFixed(2);
    if (bmi < 18)
        result.innerText = "Chỉ số BMI là: " + bmi +". Bạn Béo phì độ 1";
    else if (bmi < 25.0)
        result.innerText = "Chỉ số BMI là: " + bmi +". Bạn Béo phì độ 2";
    else if (bmi < 30.0)
        result.innerText = "Chỉ số BMI là: " + bmi +". Bạn Béo phì độ 3";
    else
        result.innerText = "Chỉ số BMI là: " + bmi +". Bạn Béo phì độ 4";
}