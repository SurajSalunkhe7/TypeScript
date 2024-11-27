function Area(No) {
    var Ret = 0;
    var Pi = 3.14;
    Ret = No * No * Pi;
    return Ret;
}
var Value = 5;
var Ans = 0;
Ans = Area(Value);
console.log("Area Of Circle is : ", Ans);
