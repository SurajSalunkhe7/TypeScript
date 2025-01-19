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
var No = 22;
var add = 0;
var arm = 0;
arm = ChkArmstrong(No);
if (arm == No) {
    console.log("Given number is Armstrong.");
}
else {
    console.log("Given number is Not Armstrong.");
}
function ChkArmstrong(Num) {
    var sum = 0;
    var temp = Num;
    var rem = 0;
    while (temp > 0) {
        rem = temp % 10;
        sum += rem * rem * rem;
        temp = temp / 10;
    }
    return Num;
}
