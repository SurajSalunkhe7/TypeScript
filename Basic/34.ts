// function CheckArmstrong(No:number):boolean
// {
//     var Temp:number = No;
//     var Sum:number = 0;
//     var Ans:number = 0;

//     while(No != 0)
//     {
//         Ans = No % 10;
//         Sum += (Ans * Ans * Ans);
//         No = No / 10;
//     }

//     console.log(Sum)
//     if(Sum == Temp)
//     {
//         return true;
//     }
//     else
//     {
//         return false
//     }
// }

// var No1:number = 153;
// var bRet:boolean = false;

// bRet = CheckArmstrong(No1);

// if(bRet == true)
// {
//     console.log("Given number is Armstrong number");
// }
// else
// {
//     console.log("Given number is not armstrong number");
// }

var No : number = 22;
var add : number = 0;
var arm : number = 0;

arm = ChkArmstrong(No);

if(arm == No)
{
    console.log("Given number is Armstrong.");
}
else
{
    console.log("Given number is Not Armstrong.");
}

function ChkArmstrong(Num:number)
{
    var sum : number = 0;
    var temp : number = Num;
    var rem : number = 0;

    while(temp > 0)
    {
        rem = temp % 10;
        sum += rem * rem * rem;
        temp = temp/10;
    }

    return Num;
}