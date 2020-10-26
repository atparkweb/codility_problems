/* 
Find the lowest positive integer NOT in an Array of integers
[1,3,6,4,1,2] -> 5
[1,2,3]       -> 4
[-1,-3]       -> 1
*/

function solution(A) {
    var i, result = 1;

    const sortedArr = [...A].sort((a,b) => {
        return a - b;
    });

    for (i = 0; i < A.length; i++) {
        let current = sortedArr[i];

        if (current > 0) {
            if (result < current) {
                break;
            }
            
            if (current === result) {
                result++;
            }
        }
    }

    return result;
}
