function Demo() {
    console.log("Inside Function");
}
Demo(); // Function Call
function gun(No) {
    console.log("Inside Gun : " + No);
}
gun(11);
function sun(No) {
    var i = No; // Local Variable
    i++;
    return i;
}
var ret = 0;
var a = 10;
ret = sun(a);
console.log("Return Value is : ", ret);
