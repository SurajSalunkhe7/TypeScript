var Area = function (No, Pi) {
    var Ans = 0;
    Ans = Pi * No * No;
    return Ans;
};
var Ret = 0;
Ret = Area(5, 3.14);
console.log("Area Of Circle is :", Ret);
