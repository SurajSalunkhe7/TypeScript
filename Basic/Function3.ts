var No1:number = 10;
var No2:number = 11;
var Ans:number = 0;

function Addition(value1:number , value2:number):number
{
    var ret:number = 0;
    ret = value1 + value2;
    return ret;
}

Ans = Addition(No1 , No2);

console.log("Addition is : " + Ans);