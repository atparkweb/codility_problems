/*
 * A rectangular map consisting of N rows and M columns of square areas is given. Each area is painted
 * with a certain color.
 * Two areas on the map belong to the same country if the following conditions are met:
 *   1. they have the same color
 *   2. it is possible to travel from one area to the other orthogonally without moving over areas
 *      of a different color.
 * 
 * The map can be described by a zero-indexed matrix A consisting of N rows and M columns of integers.
 * The color of each area is described by the corresponding  element of the matrix. Two areas have the
 * same color if and only if their corresponding matrix elements have the same value.
 * 
 * For example, consider the following matrix A consisting of seven rows and three columns:
 * 
 * A[0][0] = 5    A[0][1] = 4    A[0][2] = 4
 * A[1][0] = 4    A[1][1] = 3    A[1][2] = 4
 * A[2][0] = 3    A[2][1] = 2    A[2][2] = 4
 * A[3][0] = 2    A[3][1] = 2    A[3][2] = 2
 * A[4][0] = 3    A[4][1] = 3    A[4][2] = 4
 * A[5][0] = 1    A[5][1] = 4    A[5][2] = 4
 * A[6][0] = 4    A[6][1] = 1    A[6][2] = 1
 * 
 * Matrix A describes a map that is colored with five colors. The areas on the map belong to eleven
 * different countries (C1-C11).
 * 
 * Write a function 
 *         class Solution { public int solution(int[][] A); }
 * that given a zero-indexed matrix A consisting of N rows and M columns of integers, returns the number
 * of different countries to which the areas of the map described by matrix A belong.
 * 
 * Write an efficient algorithm for the following assumptions:
 *   1. N and M are integers within the range [1..300,000];
 *   2. the number of elements in matrix A is within the range [1..300,000];
 *   3. each element of the matrix A is an integer within the range[-1,000,000,000..1,000,000,000]
 */

 /* My notes
  * Which data structures to use?
  * Probably Graph (undirected), Adjacency matrix
 */

function solution(A) {

}