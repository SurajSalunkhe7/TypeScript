class Circle
{
    Redius:number;
    Pi:number;

    constructor(No1:number, No2:number)
    {
        this.Redius = No1;
        this.Pi = No2;
    }

    Area():number
    {
        var Ans:number = 0;
        Ans = this.Redius * this.Redius * this.Pi;
        return Ans;
    }
}

var Ret:number = 0;
var Obj = new Circle(7,3.14);

Ret = Obj.Area();
console.log("Area Of Circle is : ", Ret);