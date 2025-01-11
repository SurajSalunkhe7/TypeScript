function Summation():number
{
    var Arr:number[] = [23, 6, 7, 4, 5, 7];
    var Sum:number = 0;

    for(var iCnt:number = 0; iCnt< Arr.length; iCnt++)
        {
            Sum = Arr[iCnt] + Sum;
        }


        return Sum;
}

var Ret:number = Summation();
console.log("Summation Of Array is : ", Ret);