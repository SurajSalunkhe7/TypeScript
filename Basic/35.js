function ChekString(Str, Word) {
    if (Str.search(Word) == -1) {
        return false;
    }
    else {
        return true;
    }
}
var string = "Marvellous Infosystem";
var Letter = "Suraj";
var bRet = false;
bRet = ChekString(string, Letter);
if (bRet == true) {
    console.log("String Contains 'Marvellous' World");
}
else {
    console.log("String Not Contains 'Marvellous' Word");
}
