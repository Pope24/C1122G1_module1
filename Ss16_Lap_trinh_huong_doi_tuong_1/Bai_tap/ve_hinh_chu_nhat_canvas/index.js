//Object rectangle
let Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function () {
        return this.width * this.height;
    }
    this.getPerimeter = function () {
        return (this.width + this.height) * 2;
    }
    this.drawRectangle = function () {
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(20, 20, this.width, this.height);
        ctx.stroke();
    }
}
//Handle object rectangle
function handleRectangle() {
    let width = +prompt("Nhap width hinh chu nhat.");
    let height = +prompt("Nhap height hinh chu nhat");
    let rectangle = new Rectangle(width, height);
    rectangle.drawRectangle();
    alert("Dien tich hinh chu nhat la "+rectangle.getArea());
    alert("Chu vi hinh chu nhat la "+rectangle.getPerimeter());

}
