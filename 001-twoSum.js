// 題目：
// 給定一個整數數組 nums 和一個目標值 target，請你在該數組中找出和為目標值的那 兩個 整數，並返回他們的數組下標。
// 你可以假設每種輸入只會對應一個答案。但是，你不能重複利用這個數組中同樣的元素。
// ==========================================================================
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length-1; i++){
        for(var j = i+1; j < nums.length; i++){
            if(nums[i] + nums[j] === target ){
                return [i, j];
            }
        }
    }
};
console.log(twoSum([2, 7, 11, 15],9));