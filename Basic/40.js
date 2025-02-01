function Addition(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
var Ret = 0;
Ret = Addition(10, 20);
console.log("Addition is : ", Ret);
function ChekEven(No) {
    if ((No % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}
var bRet = false;
bRet = ChekEven(10);
if (bRet == true) {
    console.log("Geven Number is Even Number");
}
else {
    console.log("Geven Number is Not Even Number");
}
function IterationFor() {
    var iCnt = 0;
    for (iCnt = 1; iCnt <= 5; iCnt++) {
        console.log("Hello");
    }
}
IterationFor();
function Iterationwhile() {
    var iCnt = 1;
    while (iCnt <= 5) {
        console.log("Hello");
        iCnt++;
    }
}
Iterationwhile();
function Iterationdowhile() {
    var iCnt = 0;
    do {
        console.log("Hello");
        iCnt++;
    } while (iCnt <= 5);
}
Iterationdowhile();
