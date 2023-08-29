// Default Argument
function Demo(No1, No2) {
    console.log("Inside Demo Function");
    console.log("Value Of No1 : " + No1);
    if (No2 != undefined) {
        console.log("Value Of No2 : " + No2);
    }
}
Demo(10, 11); // No1 = 10, No2 = 11 
Demo(10); // No1 = 10, No2 = undefined
