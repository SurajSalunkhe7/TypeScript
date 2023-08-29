// Required Argument

function Demo(No1:number , No2:number):void
{
    console.log("Inside Demo Function...");
}

Demo(10 , 20 );

// Default Argument

function Fun(No1:number , No2:number = 20)
{
    console.log("Inside Fun Function...");
}

// Fun();  Error
Fun(10);    // No1 = 10, No2 = 20
Fun(11,12); // No1 = 11, No2 = 12

function Gun(No1:number, No2?:number)
{
    console.log("Inside Gun Function...");

    console.log("Value Of No1 : " + No1);
    console.log("Value Of No2 : " + No2);
}

Gun(10);
Gun(10,11);