function EvenOdd(No:number):boolean
{
    if(No % 2 == 0)
        {
           return true;
        }
        else
        {
            return false
        }
}


var Value:number = 10;
var bRet:boolean = false;

bRet = EvenOdd(Value);

if(bRet == true)
    {
        console.log("Given Number is Even Number");
    }
    else
    {
        console.log("Given Number is Odd Number");
    }