// Dadas dos listas de números enteros nums1 y nums2, cada una ordenada de manera ascendente y dos enteros m y n,  que representan la cantidad de elementos en nums1 y nums2 respectivamente
// Combinar nums1 y nums2 en un único array ordenado de forma ascendente
// Para ello, nums 1 tiene una longitud de m+n, donde los primeros m elementos denotan los elementos que deben ser combinados y los últimos n elementos son 0 y deben ser ignorados.

//??
// Input
// nums1 = [1,2,3,0,0,0]
// m = 3
// nums2 = [2,5,6]
// n = 3
// merge_lists(nums1, m, nums2, n)

// Output
// [1,2,2,3,5,6]
//??
// Input
// nums1 = [1,2,3,0,0,0,0]
// m = 3
// nums2 = [-4,2,3,9]
// n = 4
// merge_lists(nums1, m, nums2, n)

// Output
// [-4,1,2,2,3,3,9]

const nums1 = [1, 2, 3, 0, 0, 0, 0]
const m = 3
const nums2 = [-4, 2, 3, 9]
const n = 4

function mergeLists(nums1, m, nums2, n) {
  const result = []
  //first remove ceros from nums1
  const newNums1 = nums1.slice(0, m)

  // get max length between nums1 & nums2 (m & n)
  const maxLength = Math.max(m, n)
  // get longest array
  let longestArr, shortestArr
  if (newNums1.length === maxLength) {
    longestArr = newNums1
    shortestArr = nums2
  } else {
    longestArr = nums2
    shortestArr = newNums1
  }

  for (let i = 0; i < maxLength; i++) {
    if (shortestArr[i] !== undefined) {
      let min = Math.min(shortestArr[i], longestArr[i])
      let max = Math.max(shortestArr[i], longestArr[i])
      result.push(min)
      result.push(max)
    } else {
      result.push(longestArr[i])
    }
  }

  //* at this point we've got our results array with pairs sorted eg [1,2,3,5,7,10,9,12]
  //* but we still need to sort this one out bc it didn't happen in the previous step (for loop)

  // console.log(newNums1, maxLength)
  console.log(result)
  return result
}
// mergeLists(nums1, m, nums2, n)

{
  // const nums1 = [1, 3, 7, 9, 12, 0, 0, 0]
  // const m = 5
  // const nums2 = [2, 5, 10]
  // const n = 3
  const nums1 = [1, 3, 7, 9, 12, 0, 0, 0]
  const m = 5
  const nums2 = [22, 34, 69]
  const n = 3

  mergeLists(nums1, m, nums2, n)
}
