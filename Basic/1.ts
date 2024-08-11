function Division(No1:number , No2:number):number
{
    if(No2 == 0)
        {
            return 0;
        }

    var Ans:number = 0;
    Ans = No1 / No2;
    return Ans;
}

var Value1:number = 15;
var Value2:number = 0;
var Ret:number = 0;

Ret = Division(Value1 , Value2);
console.log("Division is : ",Ret);