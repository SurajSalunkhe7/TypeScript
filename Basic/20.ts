function DisplyFacturs(No:number):void
{
    for(var iCnt:number = 0; iCnt < No; iCnt++)
        {
            if((No % iCnt)==0)
                {
                    console.log(iCnt);
                }
        }
}

DisplyFacturs(20)