var Arithmatic = /** @class */ (function () {
    function Arithmatic(No1, No2) {
        this.Number1 = No1;
        this.Number2 = No2;
    }
    Arithmatic.prototype.Addition = function () {
        this.Ans = this.Number1 + this.Number2;
        return this.Ans;
    };
    Arithmatic.prototype.Substraction = function () {
        this.Ans = this.Number1 - this.Number2;
        return this.Ans;
    };
    Arithmatic.prototype.Multiplication = function () {
        this.Ans = this.Number1 * this.Number2;
        return this.Ans;
    };
    Arithmatic.prototype.Division = function () {
        this.Ans = this.Number1 / this.Number2;
        return this.Ans;
    };
    return Arithmatic;
}());
var Ret = 0;
var Obj1 = new Arithmatic(10, 20);
var Obj2 = new Arithmatic(40, 30);
Ret = Obj1.Addition();
console.log("Addition is : ", Ret);
Ret = Obj1.Substraction();
console.log("Substraction is : ", Ret);
Ret = Obj1.Multiplication();
console.log("Multiplication is : ", Ret);
Ret = Obj1.Division();
console.log("Devision is : ", Ret);
console.log("Second Object....");
Ret = Obj2.Addition();
console.log("Addition is : ", Ret);
Ret = Obj2.Substraction();
console.log("Substraction is : ", Ret);
Ret = Obj2.Multiplication();
console.log("Multiplication is : ", Ret);
Ret = Obj2.Division();
console.log("Devision is : ", Ret);
