// Annonymus Funtion Demo

var AnnonymusX = function(No1:number , No2:number, No3:number):number
{
    var Addition:number = 0;
    Addition = No1 + No2 + No3;
    return Addition;
}

var Value1:number = 10;
var Value2:number = 11;
var Value3:number = 12;
var Ret:number = 0;

Ret = AnnonymusX(Value1 , Value2, Value3);
console.log("Addition is : ", Ret);