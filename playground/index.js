/* eslint-disable for-direction */
let arr = [1,2,3,4,6];



function balancedSum(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        let leftArray = arr.slice(0, i - 1);
        let rightArray = arr.slice(i + 1, arr.length);

        leftSum = leftArray.length > 0 ? leftArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }) : arr[0];
        rightSum = rightArray.length > 0 ? rightArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }) : arr[arr.length-1];
        if (leftSum == rightSum) {
            index = i;
            break;
        }
    }
    
    return index;

}

console.log(`index: ${balancedSum(arr)}`);

arr = [1,2,3,3];

console.log(`index: ${balancedSum(arr)}`);

arr = [4,1,2,3,3];

console.log(`index: ${balancedSum(arr)}`);