function Maximum():number
{
    var Arr:number[] = [23, 89, 6, 29, 56, 45, 77, 32];

    var Max:number = Arr[0];

    for(var iCnt:number = 0; iCnt <Arr.length; iCnt++)
        {
            if(Arr[iCnt] > Max)
                {
                    Max = Arr[iCnt];
                }
        }

        return Max;
}

var Ret:number = Maximum();

console.log("Maximum Number is : ", Ret);