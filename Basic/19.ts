function Area(No:number):number
{
    var Ret:number = 0;
    var Pi:number = 3.14;
    Ret = No * No * Pi;
    return Ret;
}

var Value:number = 5;
var Ans:number = 0;
Ans = Area(Value);
console.log("Area Of Circle is : " , Ans);
