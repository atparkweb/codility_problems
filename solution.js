/* 
Find the lowest positive integer NOT in an Array of integers
[1,3,6,4,1,2] -> 5
[1,2,3]       -> 4
[-1,-3]       -> 1
*/

function solution(A) {
    var len = A.length,
        set = new Set(A);

    let minFree = len + 1;
    for (let i = 1; i <= len + 1; i++) {
        if (!set.has(i) && i < minFree) {
            minFree = i;
        }
    }

    return minFree;
}
