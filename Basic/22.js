function Maximum() {
    var Arr = [23, 89, 6, 29, 56, 45, 777, 3266];
    var Max = Arr[0];
    for (var iCnt = 0; iCnt < Arr.length; iCnt++) {
        if (Arr[iCnt] > Max) {
            Max = Arr[iCnt];
        }
    }
    return Max;
}
var Ret = Maximum();
console.log("Maximum Number is : ", Ret);
