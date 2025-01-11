var checkarrmstrong = (No:number):boolean=>

    {
        var icnt:number = 0;

        var n1:number =0;
        var ret:number = 0;

        while(No != 0)
            {
               n1 = No % 10;
                ret += n1 * n1 * n1;
                No = No / 10;
            }

            if(ret == No)
                {
                    return true;
                }
                else
                {
                    return false;
                }
    }

   var bRet:boolean = checkarrmstrong(153);

   if(bRet == true)
    {
        console.log("Armstrong");
    }
    else
    {
        console.log("Not Armstrong");
    }