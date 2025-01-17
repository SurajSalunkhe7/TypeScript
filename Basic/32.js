function Summation() {
    var iCnt = 0;
    var Sum = 0;
    var Arr = [23, 6, 7, 4, 5, 7];
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        Sum = Arr[iCnt] + Sum;
    }
    return Sum;
}
var Ret = 0;
Ret = Summation();
console.log("Summation is : ", Ret);
