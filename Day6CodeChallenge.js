/**
Majority Element

Given an array of size n, find the majority element. The majority element 
is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:
Input: [3,2,3]
Output: 3

Example 2:
Input: [2,2,1,1,1,2,2]
Output: 2 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let countNumbers = {},max=0,res;
    for(let i=0; i<nums.length; i++){
        countNumbers[nums[i]] = (countNumbers[nums[i]] || 0)+1;
        if(countNumbers[nums[i]]>max){
            max = countNumbers[nums[i]];
            res = nums[i];
        }
    }
    return res;
};
//Simply using hash to store the values count and hence finding the max repeated number from it