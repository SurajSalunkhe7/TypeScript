
var Arr = [10 , "Hello" , true];

console.log("Length of Array is : " + Arr.length);

console.log("First element of array is : " + Arr[0]);
console.log("Second element of array is : " + Arr[1]);

console.log("Elements of tuple is :");

for(var iCnt:number = 0; iCnt < Arr.length; iCnt++)
{
    console.log( iCnt + 1 + " Element is : " + Arr[iCnt]);
}