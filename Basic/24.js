function SecondLarge() {
    var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
    var Max = 0;
    var SecdMax = 0;
    for (var icnt = 0; icnt < Arr.length; icnt++) {
        if (Arr[icnt] > Max) {
            Max = Arr[icnt];
        }
    }
    console.log(Max);
    for (var icnt = 0; icnt < Arr.length; icnt++) {
        if (Arr[icnt] > SecdMax && Arr[icnt] != Max) {
            SecdMax = Arr[icnt];
        }
    }
    return SecdMax;
}
var Ret = SecondLarge();
console.log("Second Max number of array is : ", Ret);
