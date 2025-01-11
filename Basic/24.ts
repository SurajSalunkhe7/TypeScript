function SecondLarge():number
{
    var Arr:number[] = [23, 89, 6, 29, 56, 45, 77, 32];

    var Max:number = 0
   var SecdMax:number = 0;

    for(var icnt:number= 0; icnt<Arr.length; icnt++)
        {
            if(Arr[icnt] > Max)
                {
                    Max = Arr[icnt];
                }
        }


        for(var icnt:number= 0; icnt<Arr.length; icnt++)
            {
                if(Arr[icnt] > SecdMax && Arr[icnt] != Max)
                    {
                        SecdMax = Arr[icnt];
                    }
            }

            return SecdMax;
        }

        var Ret:number = SecondLarge();
        console.log("Second Max number of array is : ", Ret);
