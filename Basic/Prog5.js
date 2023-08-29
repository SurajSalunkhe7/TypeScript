function fun() {
    console.log("Inside fun function.");
}
fun();
function gun(value) {
    console.log("Parameter is : " + value);
}
gun(11);
function sun(value) {
    var i = value;
    i++;
    return i;
}
var a = 12;
var Ret = 0;
Ret = sun(a);
console.log("Return value is : " + Ret);
