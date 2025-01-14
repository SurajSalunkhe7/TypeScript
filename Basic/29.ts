function CheckPrime(No:number):boolean
{
    var iCnt:number = 0;
    for(iCnt = 2; iCnt < No; iCnt++)
    {
        if((No % iCnt)==0)
        {
            return false;
        }
    }
    return true;
}

var No:number = 10;
var bRet:boolean = false;

bRet = CheckPrime(No);
if(bRet == false)
{
    console.log("Given number is not prime number...");
}
else
{
    console.log("Given number is Prime number..");
}