//Object Temperature
let Temperature = function (degreeC) {
    this.degreeC = degreeC;
    this.switchDegreeCtoF = function () {
        let degreeF;
        degreeF = (9 * this.degreeC + 160) / 5;
        return degreeF;
    };
    this.switchDegreeCtoK = function () {
        let degreeK;
        degreeK = this.degreeC + 273.15;
        return degreeK;
    }
}
function switchTemperature() {
    let temperature = +document.getElementById("degree").value;
    if (temperature < -273) {
        alert("Temperature failed")
    }
    else {
        let temperatureObject = new Temperature(temperature);
        alert("Độ F = "+temperatureObject.switchDegreeCtoF());
        alert("Độ K = "+temperatureObject.switchDegreeCtoK());
    }
}