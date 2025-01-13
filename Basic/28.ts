var Dispya = function(No:number):void
{
    var icnt:number = 0;

    for(icnt = 1; icnt <No; icnt++)
    {
        if((No % icnt) ==0)
        {
            console.log("\t",icnt)
        }
    }
}

Dispya(20);