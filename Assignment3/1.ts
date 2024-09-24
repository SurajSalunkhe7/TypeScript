class Arithmatic
{
    Number1:number;
    Number2:number;
    Ans:number;

    constructor(No1:number, No2:number)
    {
        this.Number1 = No1;
        this.Number2 = No2;
    }

    Addition()
    {
        this.Ans = this.Number1 + this.Number2;
        return this.Ans;
    }

    Substraction()
    {
        this.Ans = this.Number1 - this.Number2;
        return this.Ans;
    }

    Multiplication()
    {
        this.Ans = this.Number1 * this.Number2;
        return this.Ans;
    }

    Division()
    {
        this.Ans = this.Number1 / this.Number2;
        return this.Ans;
    }
}

var Ret:number = 0;
var Obj1 = new Arithmatic(10,20);
var Obj2 = new Arithmatic(40,30);

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