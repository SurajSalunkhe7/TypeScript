function Maximum():number
{
    var Arr:number[] = [23, 89, 6, 29, 56, 45, 77, 32];
    var iCnt:number = 0;
    var Max:number = 0;

    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        if(Arr[iCnt] > Max)
        {
            Max = Arr[iCnt];
        }
    }

    return Max;
}

var Ret:number = 0;
Ret = Maximum();

console.log("Maximum Number of Array is : ", Ret);