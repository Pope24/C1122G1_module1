//Exercise 1: Average Score
function handleAverageScore() {
    let physicsScore = parseInt(document.getElementById("PhysicsScore").value);
    let chemistryScore = parseInt(document.getElementById("ChemistryScore").value);
    let biologyScore = parseInt(document.getElementById("BiologyScore").value);
    let averageScore = (physicsScore + chemistryScore + biologyScore) / 3;
    alert("Điểm trung bình của học sinh là " + averageScore.toFixed(2));

}

//Exercise 2: Convert Degree
function handleConvertDegree() {
    let degreeCValue = parseInt(document.getElementById("DegreeConvert").value);
    let degreeFValue;
    degreeFValue = (9 * degreeCValue + 160) / 5;
    alert("Degree C converted to " + degreeFValue + " F");
}

//Exercise 3: Execute Radius Circle
function executeAreaCircle() {
    let radius = parseInt(document.getElementById("RadiusCircleEx3").value);
    let area;
    area = radius * radius * 3.14;
    alert("Area Circle execute to " + area);
}

//Exercise 4: Perimeter Radius Circle
function executePerimeterCircle() {
    let radius = parseInt(document.getElementById("RadiusCircleEx4").value);
    let area;
    area = radius * 2 * 3.14;
    alert("Perimeter Circle execute to " + area);
}