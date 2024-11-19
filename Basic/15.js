// Arrow/Fat-Arrow/Lambda Funtion
var ArrowX = function (No1, No2, No3) {
    var Addition = 0;
    Addition = No1 + No2 + No3;
    return Addition;
};
var Value1 = 10;
var Value2 = 11;
var Value3 = 12;
var Ret = 0;
Ret = ArrowX(Value1, Value2, Value3);
console.log("Addition is : ", Ret);
