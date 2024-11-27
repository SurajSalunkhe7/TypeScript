// Object Orinted Programming
var Arithmatic = /** @class */ (function () {
    function Arithmatic(Value1, Value2) {
        this.No1 = Value1;
        this.No2 = Value2;
    }
    Arithmatic.prototype.Addition = function () {
        var Addition = 0;
        Addition = this.No1 + this.No2;
        return Addition;
    };
    Arithmatic.prototype.Substraction = function () {
        var Substraction = 0;
        Substraction = this.No1 - this.No2;
        return Substraction;
    };
    return Arithmatic;
}());
var Obj = new Arithmatic(10, 11);
var Ret = 0;
Ret = Obj.Addition();
Ret = Obj.Substraction();
console.log("Addition is : ", Ret);
console.log("Substraction is : ", Ret);
