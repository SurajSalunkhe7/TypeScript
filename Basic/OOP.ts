// Object Oriented Programming(OOP)

class Arithmatic      // class Defination
{
    No1:number;     // Charcteristics
    No2:number;     // Charcteristics

    constructor(a:number , b:number)       // Arithmatic() in c, C++
    {
        this.No1 = a;
        this.No2 = b;
    }

Addition():number    // Behaviour
{
    var Ans:number = 0;     // Local Variable
    Ans = this.No1 + this.No2;
    return Ans;
}

Substraction():number       // Behaviour
{
    var Ans:number = 0;     // Local Variable
    Ans = this.No1 - this.No2;
    return Ans;
}
}

var Ret:number = 0;

var Obj1 = new Arithmatic(10 , 11);
var Obj2 = new Arithmatic(20 , 21);

Ret = Obj1.Addition();
console.log("Addition is : " + Ret);

Ret = Obj1.Substraction();
console.log("Substraction is : " + Ret);