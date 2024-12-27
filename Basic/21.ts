function CheckPrime(No:number):boolean
{
    var Ans:number = 0;

    for(var iCnt:number = 2; iCnt < No; iCnt++)
        {
            if((No % iCnt)==0)
                {
                    Ans++;
                    break;
                }
        }
        console.log(Ans)

        if(Ans !=0)
            {
                return false;
            }
            else
            {
                return true;
            }
}

var bRet:boolean = false;

bRet = CheckPrime(5);

if(bRet == true)
    {
        console.log("Given number is prime number");
    }
    else
    {
        console.log("Given number is not prime number");
    }
