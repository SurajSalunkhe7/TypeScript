function Fun():void     // Fun is a function which not going to accept any parameter and return noting
{
    console.log("Inside Fun Function...");  // used to print data on screen
}

Fun();      // function call

function Gun(Value:number):void
{
    console.log("Parametr is : " + Value);
}

Gun(10);

function Addition(No1:number , No2:number):number
{
    var Ans:number = 0;
    Ans = No1 + No2;
    return Ans;
}

var value1:number = 10;
var value2:number = 11;
var Ret:number = 0;

Ret = Addition(value1 , value2);
console.log("Addition is : " + Ret);

function CheckEven(value:number):boolean
{
    if((value % 2) == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var No:number = 13;
var bRet:boolean = false;

bRet = CheckEven(No);

if(bRet == true)
{
    console.log("Given number is Even number");
}
else
{
    console.log("Given number is odd number");
}

function Itration()
{
    var iCnt:number = 0;

    for(iCnt = 1; iCnt <= 5; iCnt++)
    {
        console.log("Hello");
    }
}

Itration();