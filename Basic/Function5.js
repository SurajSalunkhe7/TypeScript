function main() {
    var No = 13;
    var bret = false;
    bret = CheckEven(No);
    if (bret == true) {
        console.log("It is Even Number");
    }
    else {
        console.log("It is Odd Number");
    }
}
function CheckEven(value) {
    if ((value % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}
main();
