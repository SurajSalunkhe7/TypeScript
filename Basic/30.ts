function Fibonace(No:number):void
{
    var a:number = 0;
    var b:number = 1;
    var c:number = 0;
    console.log(0);
    for(var icnt:number = 0; icnt <= No; icnt++)
    {
        a = c;
        c = a + b;
        console.log(c);
        b = a;
        if(c == No)
        {
            break;
        }
    }
    
}

Fibonace(21);