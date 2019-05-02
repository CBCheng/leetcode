// 題目：
// 給定一個整數數組 nums 和一個目標值 target，請你在該數組中找出和為目標值的那 兩個 整數，並返回他們的數組下標。
// 你可以假設每種輸入只會對應一個答案。但是，你不能重複利用這個數組中同樣的元素。
// ==========================================================================
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length-1; i++){ //for迴圈跑3次(2,7,11) 第4次(15)不用跑因為前面每個都會對過15
        for(var j = i+1; j < nums.length; i++){ //跑第二層for回圈 用第一層的i去對第二層的每個J
            if(nums[i] + nums[j] === target ){ //一旦和為target 就return
                return [i, j];
            }
        }
    }
};
console.log(twoSum([2, 7, 11, 15],9));