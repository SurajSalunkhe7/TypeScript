var checkarrmstrong = function (No) {
    var icnt = 0;
    var n1 = 0;
    var ret = 0;
    while (No != 0) {
        n1 = No % 10;
        ret += n1 * n1 * n1;
        No = No / 10;
    }
    if (ret == No) {
        return true;
    }
    else {
        return false;
    }
};
var bRet = checkarrmstrong(153);
if (bRet == true) {
    console.log("Armstrong");
}
else {
    console.log("Not Armstrong");
}
