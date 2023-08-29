// Addition of threee numbers

function Addition(value1:number , value2:number):number
{
    var Ret:number = 0;
    Ret = value1 + value2;
    return Ret;
}

function main():void
{
    var No1:number = 10;
    var No2:number = 11;
    var Ans:number = 0;

    Ans = Addition(No1 , No2);
    console.log("Addition is : " + Ans);
}

main();