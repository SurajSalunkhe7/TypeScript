function EvenOdd(No) {
    if (No % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
var Value = 7;
var bRet = false;
bRet = EvenOdd(Value);
if (bRet == true) {
    console.log("Given Number is Even Number");
}
else {
    console.log("Given Number is Odd Number");
}
