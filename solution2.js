/*
 * Given an array of integers A with N items,
 * get the longest switching segment.
 * A switching segment is when consecutive numbers alternate between two values.
 * e.g. [1, 2, 1, 2, 1]
 * If an array of length 1 is given (e.g. [2]), the function should return 1.
 * */

function solution(A) {
    function solution_recurs(arr, longest, segLen) {
        if (arr.length < 3) return longest;
        
        if (arr[0] === arr[2]) {
            if (segLen < 3) segLen = 3;
            if (arr.length > 3 && arr[1] === arr[3]) {
                segLen += 1;
            }

            longest = Math.max(segLen, longest);
        } else {
            segLen = 1;
        }

        return solution_recurs(arr.slice(1), longest, segLen);
    }



    return solution_recurs(A, 1, 1);
}
