function Maximum() {
    var Arr = [23, 89, 6, 29, 56, 45, 774, 32];
    var iCnt = 0;
    var Max = 0;
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        if (Arr[iCnt] > Max) {
            Max = Arr[iCnt];
        }
    }
    return Max;
}
var Ret = 0;
Ret = Maximum();
console.log("Maximum Number of Array is : ", Ret);
