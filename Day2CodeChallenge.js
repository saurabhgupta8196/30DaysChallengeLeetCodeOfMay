/*
You're given strings J representing the types of stones that are jewels, 
and S representing the stones you have.  Each character in S is a type of stone you have.  
You want to know how many of the stones you have are also jewels.
The letters in J are guaranteed distinct, and all characters in J and S are letters. 
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

->S and J will consist of letters and have length at most 50.
->The characters in J are distinct. */

/** ************************Jewels and Stones******************** */

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let jewels = J.split('');
    let stones = 0;
    for(let i=0;i<S.length; ++i){
        if(jewels.includes(S[i]))
            stones += 1;
    }
    return stones;
};

/**
Approach - Here the approach is simple we have to find from given stones how many 
           are jewels by using the Jewels given so we just split the jewels and 
           find that it is in Stones array or not simple includes() has done the work.
 */