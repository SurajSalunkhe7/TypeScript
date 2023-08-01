// Default Argument

// Number of Default Argument are 2
// Default Argument should be trailing (from right to left)

function Demo(No1:number , No2:number = 20, No3:number = 30)
{
    console.log("Inside Demo Function");
}

// Demo();          // Error
Demo(10);           // No1 = 10, No2 = 20, No3 = 30;
Demo(10 , 11);      // No1 = 10, No2 = 11, No3 = 30;
Demo(10, 11, 12);   // No1 = 10, No2 = 20, No3 = 30;