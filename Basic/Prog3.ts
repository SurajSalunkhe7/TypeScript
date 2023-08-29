// Check given number is divisible by 5 or not

function ChckDivisibaleByFive(value:number):boolean
{
    if((value % 5) == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function main():void
{
    var No:number = 15;
    var bRet:boolean = false;

    bRet = ChckDivisibaleByFive(No);

    if(bRet == true)
    {
        console.log(No + " is divisible by five");
    }
    else
    {
        console.log(No + " is Not divisible by five");
    }
}

main();