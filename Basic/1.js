function Division(No1, No2) {
    if (No2 == 0) {
        return 0;
    }
    var Ans = 0;
    Ans = No1 / No2;
    return Ans;
}
var Value1 = 15;
var Value2 = 0;
var Ret = 0;
Ret = Division(Value1, Value2);
console.log("Division is : ", Ret);
