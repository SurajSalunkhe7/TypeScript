var Arithmatic = /** @class */ (function () {
    function Arithmatic(Number1, Number2) {
        this.No1 = Number1;
        this.No2 = Number2;
    }
    Arithmatic.prototype.Addition = function () {
        this.Ans = this.No1 + this.No2;
        return this.Ans;
    };
    Arithmatic.prototype.Substraction = function () {
        this.Ans = this.No1 - this.No2;
        return this.Ans;
    };
    Arithmatic.prototype.Multiplication = function () {
        this.Ans = this.No1 * this.No2;
        return this.Ans;
    };
    Arithmatic.prototype.Divistion = function () {
        this.Ans = this.No1 / this.No2;
        return this.Ans;
    };
    return Arithmatic;
}());
var Ret = 0;
var Obj1 = new Arithmatic(10, 20);
var Obj2 = new Arithmatic(30, 40);
Ret = Obj1.Addition();
console.log("Additon is : ", Ret);
Ret = Obj1.Substraction();
console.log("Substraction is : ", Ret);
Ret = Obj1.Divistion();
console.log("Division is : ", Ret);
Ret = Obj1.Multiplication();
console.log("Multiplicatoin is : ", Ret);
console.log("Second Object Output.....");
Ret = Obj2.Addition();
console.log("Addition is : ", Ret);
Ret = Obj2.Substraction();
console.log("Substraction is : ", Ret);
Ret = Obj2.Multiplication();
console.log("Multiplication is : ", Ret);
Ret = Obj2.Divistion();
console.log("Divistion is : ", Ret);
