function Maximum() {
    var Arr = [23, 89, 6, 29, 56, 45, 777, 32];
    var iCnt = 0;
    var Max = 0;
    var Sec_Max = 0;
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        if (Arr[iCnt] > Max) {
            Max = Arr[iCnt];
        }
    }
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        if (Arr[iCnt] > Sec_Max && (Arr[iCnt] != Max)) {
            Sec_Max = Arr[iCnt];
        }
    }
    return Sec_Max;
}
var Ret = 0;
Ret = Maximum();
console.log("Second Maximum Number is : ", Ret);
