function Fun() {
    console.log("Inside Fun Function..."); // used to print data on screen
}
Fun(); // function call
function Gun(Value) {
    console.log("Parametr is : " + Value);
}
Gun(10);
function Addition(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
var value1 = 10;
var value2 = 11;
var Ret = 0;
Ret = Addition(value1, value2);
console.log("Addition is : " + Ret);
function CheckEven(value) {
    if ((value % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}
var No = 13;
var bRet = false;
bRet = CheckEven(No);
if (bRet == true) {
    console.log("Given number is Even number");
}
else {
    console.log("Given number is odd number");
}
function Itration() {
    var iCnt = 0;
    for (iCnt = 1; iCnt <= 5; iCnt++) {
        console.log("Hello");
    }
}
Itration();
