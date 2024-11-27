var Maximum = function (No1, No2, No3) {
    var Ans = 0;
    if (No1 > No2 && No3) {
        Ans = No1;
    }
    else if (No2 > No3 && No1) {
        Ans = No2;
    }
    else {
        Ans = No3;
    }
    return Ans;
};
var v1 = 129;
var v2 = 89;
var v3 = 211;
var Ret = 0;
Ret = Maximum(v1, v2, v3);
console.log("Maximum number is : ", Ret);
