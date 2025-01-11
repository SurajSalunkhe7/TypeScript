function Summation() {
    var Arr = [23, 6, 7, 4, 5, 7];
    var Sum = 0;
    for (var iCnt = 0; iCnt < Arr.length; iCnt++) {
        Sum = Arr[iCnt] + Sum;
    }
    return Sum;
}
var Ret = Summation();
console.log("Summation Of Array is : ", Ret);
