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
  let lastPointer = m + n - 1 // 6
  let nums1Pointer = m - 1
  let nums2Pointer = n - 1

  console.log(Math.min(nums1[nums1Pointer], nums2[nums2Pointer]))
  console.log(Math.max(nums1[nums1Pointer], nums2[nums2Pointer]))
  for (let i = lastPointer; i >= 0; i--) {
    const currentElementInNums1 = nums1[nums1Pointer] // 3
    const currentElementInNums2 = nums2[nums2Pointer] // 9

    console.log({ nums1Pointer })
    console.log({ nums2Pointer })

    console.log('i', i)
    if (nums1Pointer < 0) {
      console.log('hereeee')
      nums1[i] = nums2[nums2Pointer]
      nums2Pointer--
      console.log(nums1)
      continue
    }
    if (nums2Pointer < 0) {
      console.log('hereeee')
      nums1[i] = nums1[nums1Pointer]
      nums1Pointer--
      console.log(nums1)
      continue
    }

    if (currentElementInNums2 > currentElementInNums1) {
      nums1[i] = currentElementInNums2
      nums2Pointer--
      console.log('1er', nums1)
    } else if (currentElementInNums1 > currentElementInNums2) {
      nums1[i] = currentElementInNums1
      nums1Pointer--
      console.log('2do', nums1)
    } else {
      nums1[i] = currentElementInNums1
      nums1Pointer--
      console.log('3er', nums1)
    }
  }
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
