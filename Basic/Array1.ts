// int Arr[5] = {10,20,30,40,50};   // c,c++,java

// Arr is one dimentional array which contains 5 elements each element is of type number

var Arr:number[] = [10, 20, 30, 40, 50 ];

console.log("Length of Array is : " + Arr.length);

console.log("First element of array is : " + Arr[0]);
console.log("Second element of array is : " + Arr[1]);

for(var iCnt:number = 0; iCnt < Arr.length; iCnt++)
{
    console.log( iCnt + 1 + " Element is : " + Arr[iCnt]);
}