// Default Argument
// Number of Default Argument are 2
// Default Argument should be trailing (from right to left)
function Demo(No1, No2, No3) {
    if (No2 === void 0) { No2 = 20; }
    if (No3 === void 0) { No3 = 30; }
    console.log("Inside Demo Function");
}
// Demo();          // Error
Demo(10); // No1 = 10, No2 = 20, No3 = 30;
Demo(10, 11); // No1 = 10, No2 = 11, No3 = 30;
Demo(10, 11, 12); // No1 = 10, No2 = 20, No3 = 30;
