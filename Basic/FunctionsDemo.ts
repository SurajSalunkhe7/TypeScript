function Fun():void // Function Defination
{
    console.log("Inside Fun Function");
}

Fun(); // Function Call

function gun(No:number):void
{
    console.log("Inside Gun : " + No);
}

gun(11);

function sun(No:number):number
{
    var i:number = No;  // Local Variable
    i++;
    return i;
}

var ret:number = 0;
var a:number = 10;

ret = sun(a);
console.log("Return Value is : " , ret);