var Area = (No:number, Pi:number):number=>
{
    var Ans:number = 0;
    Ans = Pi * No * No;
    return Ans;
}

var Ret:number = 0;

Ret = Area(5,3.14);
console.log("Area Of Circle is :", Ret);