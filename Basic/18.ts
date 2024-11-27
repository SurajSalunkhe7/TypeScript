var Maximum = function(No1:number , No2:number, No3:number):number
{
    var Ans:number = 0;

    if(No1 > No2 && No3)
        {
            Ans = No1;
        }
        else if(No2 > No3 && No1)
            {
                Ans = No2;
            }
            else
            {
                Ans = No3;
            }

            return Ans;
}

var v1:number = 129;
var v2:number = 89;
var v3:number = 211;
var Ret:number = 0;

Ret = Maximum(v1 , v2 , v3);
console.log("Maximum number is : " , Ret);