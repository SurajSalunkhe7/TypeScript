function Fibonace(No) {
    var a = 0;
    var b = 1;
    var c = 0;
    console.log(0);
    for (var icnt = 0; icnt <= No; icnt++) {
        a = c;
        c = a + b;
        console.log(c);
        b = a;
        if (c == No) {
            break;
        }
    }
}
Fibonace(21);
