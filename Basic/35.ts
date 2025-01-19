function ChekString(Str:string, Word:string):boolean
{
    if(Str.search(Word) == -1)
    {
        return false;
    }
    else
    {
        return true;
    }
}

var string:string = "Marvellous Infosystem";
var Letter:string = "Marvellous";
var bRet:boolean = false;

bRet = ChekString(string , Letter);

if(bRet == true)
{
    console.log("String Contains 'Marvellous' World");
}
else
{
    console.log("String Not Contains 'Marvellous' Word");
}