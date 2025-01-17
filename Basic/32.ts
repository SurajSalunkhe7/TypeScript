function Summation():number
{
    var iCnt:number = 0;
    var Sum:number = 0;
    var Arr:number[] = [23, 6, 7, 4, 5, 7];

    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        Sum = Arr[iCnt] + Sum;
    }

    return Sum;
}

var Ret:number = 0;
Ret = Summation();

console.log("Summation is : ", Ret);