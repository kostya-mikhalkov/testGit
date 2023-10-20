function twoSum(arr, target){
    let left = 0;
    let right = arr.length - 1;
    let res;
    let re;
    while(left < right){
        // let mid = Math.floor((left + right)/2);
        let num = arr[left] + arr[right];
        // if(num < 0){
        //     right = mid - 1;
        // }
        // if(arr[mid] === num){
        //     left = mid + 1;
        // }
        if(num < target){
            left++;
        }else if(num > target){
            right--;
        }else{
            res = left;
            re = right;
        }
    }
    return res;
};
console.log(twoSum([2,3,4], 6));
console.log(twoSum([2,7,11,15], 9));