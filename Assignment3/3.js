var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(No1, No2) {
        this.Redius = No1;
        this.Pi = No2;
    }
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.CircumfarenceOfCircle = function () {
        var Ans = 0;
        Ans = 2 * this.Redius * this.Pi;
        return Ans;
    };
    CircleX.prototype.Area = function () {
        var Ans = 0;
        Ans = this.Pi * this.Redius * this.Redius;
        return Ans;
    };
    return CircleX;
}(Circle));
var Ret = 0;
var Obj = new CircleX(7, 3.14);
Ret = Obj.CircumfarenceOfCircle();
console.log("Circumfarence Of Circle is : ", Ret);
Ret = Obj.Area();
console.log("Area Of Circle is : ", Ret);
