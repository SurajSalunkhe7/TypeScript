// Procedure Oriented Programming

function Addition(No1:number , No2:number):number
{
    var Addition = 0;
    Addition = No1 + No2;
    return Addition;
}

function Substraction(No1:number , No2:number):number
{
    var Substraction = 0;
    Substraction = No1 - No2;
    return Substraction;
}

var Value1:number = 10;
var Value2:number = 11;
var Ret:number = 0;

Ret = Addition(Value1 , Value2);
console.log("Addition is : ",Ret);

Ret = Substraction(Value1,Value2);
console.log("Substraction is : ",Ret);