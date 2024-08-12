// Optional Arguments/Parameters

function OptionalX(No1:number, No2 ?:number):void
{
    console.log("Value Of No1 is : ", No1);
    if(No2 != undefined)
        {
            console.log("Value Of No2 is : ", No2);
        }
    
}

OptionalX(10);