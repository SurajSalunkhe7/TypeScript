function main():void
{
    var No:number = 13;
    var bret:boolean = false;

    bret = CheckEven(No);

    if(bret == true)
    {
        console.log("It is Even Number");
    }
    else
    {
        console.log("It is Odd Number");
    }
}

function CheckEven(value:number):boolean
{
    if((value % 2)==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

main();