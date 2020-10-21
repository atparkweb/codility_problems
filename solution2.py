def solution(A):
  def solution_recurs(arr, longest, seg_len):
    if len(arr) < 3:
      return longest

    if arr[0] == arr[2]:
      if seg_len < 3:
        seg_len = 3

      if (len(arr) > 3) and (arr[1] == arr[3]):
        seg_len = seg_len + 1

      longest = max(seg_len, longest)
    else:
      seg_len = 1

    return solution_recurs(arr[1:], longest, seg_len)

  return solution_recurs(A, 1, 1)
