// Types Of function arguments
// there are three types = required , default , optional , restparameter
// required
function Required(value1, value2, value3) {
    console.log("Inside Required function");
}
Required(10, 20, 30);
// Default
function Default(value1, value2, value3) {
    if (value2 === void 0) { value2 = 20; }
    if (value3 === void 0) { value3 = 30; }
    console.log("Inside Defaualt function");
}
Default(10); // value1 = 10 , value2 = 20, value3 = 30;
Default(10, 11); // value1 = 10 , value2 = 11, value3 = 30;
Default(10, 11, 12); // value1 = 10 , value2 = 11, value3 = 12;
function Optional(value1, value2, value3) {
    console.log("Inside Optional function");
    console.log("Parameter of value1 is : " + value1);
    console.log("Parameter of value2 is : " + value2);
    console.log("Parameter of value3 is : " + value3);
}
Optional(10, 20); // value1 = 10, value2 = 20, value3 = undefined
Optional(10, 20, 30); // value1 = 10 , value2 = 20 , value3 = 30
