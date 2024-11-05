/// Function Argument
// 1=> Required Argument
function Required(value1, value2, value3) {
    console.log("Inside Required argument...");
}
Required(10, 11, 12);
// 2=> Default Argument
function Default(value1, value2, value3) {
    if (value2 === void 0) { value2 = 11; }
    if (value3 === void 0) { value3 = 12; }
    console.log("Inside Defult argument");
}
// Default();   // Error
Default(10); // value1 = 10 , value2 = 11, value3 = 12
Default(10, 20); // value1 = 10 , value2 = 20, value3 = 12
Default(10, 20, 30); // value1 = 10 , value2 = 20, value3 = 30
// 3=> Optional argument
function Optional(value1, value2) {
    console.log("Value Of value1 is : " + value1);
    if (value2 != undefined) {
        console.log("Value of value2 is : " + value2);
    }
}
Optional(10);
Optional(10, 11);
