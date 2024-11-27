// Object Orinted Programming

class Arithmatic
{
    No1:number;
    No2:number;

    constructor(Value1:number , Value2:number)
    {
        this.No1 = Value1;
        this.No2 = Value2;
    }

    Addition()
    {
        var Addition = 0;
        Addition = this.No1 + this.No2;
        return Addition;
    }

    Substraction()
    {
        var Substraction = 0;
        Substraction = this.No1 - this.No2;
        return Substraction;
    }
}

var Obj = new Arithmatic(10,11);
var Ret:number = 0;

Ret = Obj.Addition();
console.log("Addition is : " , Ret);

Ret = Obj.Substraction();
console.log("Substraction is : ",Ret);