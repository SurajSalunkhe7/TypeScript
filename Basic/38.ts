class Circle
{
    Redius:number;
    Pi:number;

    constructor(No1:number, No2:number)
    {
        this.Redius = No1;
        this.Pi = No2;
    }
}

class Circlex extends Circle
{
    CircumfarenceOfCircle()
    {
        var Ans:number = 0;
        Ans = 2*this.Redius*this.Pi;
        return Ans;
    }

    Area()
    {
        var Ans:number = 0;
        Ans = this.Pi * this.Redius * this.Redius;
        return Ans;
    }
}

var Ret:number = 0;
var Obj = new Circlex(7,3.14)

Ret = Obj.CircumfarenceOfCircle();
console.log("Circumfurence of Circle is : ", Ret);

Ret = Obj.Area();
console.log("Area Of Circle is : ", Ret);