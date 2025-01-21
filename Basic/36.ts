class Arithmatic
{
    No1:number;
    No2:number;
    Ans:number;

    constructor(Number1:number, Number2:number)
    {
        this.No1 = Number1;
        this.No2 = Number2;
    }

    Addition()
    {
        this.Ans = this.No1 + this.No2;
        return this.Ans;
    }

    Substraction()
    {
        this.Ans = this.No1 - this.No2;
        return this.Ans;
    }

    Multiplication()
    {
        this.Ans = this.No1 * this.No2;
        return this.Ans;
    }

    Divistion()
    {
        this.Ans = this.No1 / this.No2;
        return this.Ans;
    }
}

var Ret:number = 0;
var Obj1 = new Arithmatic(10,20);
var Obj2 = new Arithmatic(30,40);

Ret = Obj1.Addition();
console.log("Additon is : ",Ret);

Ret = Obj1.Substraction();
console.log("Substraction is : ",Ret);

Ret = Obj1.Divistion();
console.log("Division is : ",Ret);

Ret = Obj1.Multiplication();
console.log("Multiplicatoin is : ",Ret);

console.log("Second Object Output.....");

Ret = Obj2.Addition();
console.log("Addition is : ",Ret);

Ret = Obj2.Substraction();
console.log("Substraction is : ",Ret);

Ret = Obj2.Multiplication();
console.log("Multiplication is : ",Ret);

Ret = Obj2.Divistion();
console.log("Divistion is : ",Ret);