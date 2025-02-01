function Addition(No1:number, No2:number):number
{
    var Ans:number = 0;
    Ans = No1 + No2;
    return Ans;
}

var Ret:number = 0;
Ret = Addition(10,20);
console.log("Addition is : ", Ret);

function ChekEven(No:number):boolean
{
    if((No % 2)==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var bRet:boolean = false;
bRet = ChekEven(10);
if(bRet == true)
{
    console.log("Geven Number is Even Number");
}
else
{
    console.log("Geven Number is Not Even Number");
}

function IterationFor():void
{
    var iCnt:number = 0;
    for(iCnt = 1; iCnt <=5; iCnt++)
    {
        console.log("Hello");
    }
}

IterationFor();

function Iterationwhile():void
{
    var iCnt:number = 1;

    while(iCnt <= 5)
    {
        console.log("Hello");
        iCnt++;
    }
}

Iterationwhile();

function Iterationdowhile():void
{
    var iCnt:number = 0;

    do
    {
        console.log("Hello");
        iCnt++;
    }
    while(iCnt <= 5)
}

Iterationdowhile();