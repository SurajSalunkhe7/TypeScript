var Circle = /** @class */ (function () {
    function Circle(No1, No2) {
        this.Redius = No1;
        this.Pi = No2;
    }
    Circle.prototype.Area = function () {
        var Ans = 0;
        Ans = this.Redius * this.Redius * this.Pi;
        return Ans;
    };
    return Circle;
}());
var Ret = 0;
var Obj = new Circle(7, 3.14);
Ret = Obj.Area();
console.log("Area Of Circle is : ", Ret);
