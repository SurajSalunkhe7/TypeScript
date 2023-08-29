// Loops => for,while,do-while

function Sequance():void
{
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
}   

function Itration()
{
    var i:number = 0;

    for(i = 1; i <=5 ; i++)
    {
        console.log("Hello");
    }
}

function Itration_While()
{
    var i:number = 0;
    i = 1;

    while(i <= 5)
    {
        console.log("Hello");
        i++;
    }
}
Sequance();
Itration();
Itration_While();