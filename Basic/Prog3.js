// Check given number is divisible by 5 or not
function ChckDivisibaleByFive(value) {
    if ((value % 5) == 0) {
        return true;
    }
    else {
        return false;
    }
}
function main() {
    var No = 15;
    var bRet = false;
    bRet = ChckDivisibaleByFive(No);
    if (bRet == true) {
        console.log(No + " is divisible by five");
    }
    else {
        console.log(No + " is Not divisible by five");
    }
}
main();
