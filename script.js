const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getSum(nums){
    return nums.reduce((acc, num) => acc + num, 0);
}

console.log(getSum(nums)); // se espera 55
