function DisplyFacturs(No) {
    for (var iCnt = 0; iCnt < No; iCnt++) {
        if ((No % iCnt) == 0) {
            console.log(iCnt);
        }
    }
}
DisplyFacturs(20);
