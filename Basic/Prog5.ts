function fun():void
{
    console.log("Inside fun function.");
}

fun();

function gun(value:number):void
{
    console.log("Parameter is : " + value);
}

gun(11);

function sun(value:number):number
{
    var i:number = value;
    i++;
    return i;
}

var a:number = 12;
var Ret:number = 0;
Ret = sun(a);

console.log("Return value is : " + Ret);