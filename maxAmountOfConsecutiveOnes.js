// Dado un arreglo de valores binarios y un entero k, encuentra el máximo número de 1s consecutivos.
// Puedes cambiar k 0s por el valor 1.

// Ejemplo 1:

// Entrada:
// 	nums = [1,1,1,0,0,0,1,1,1,0], k = 2
//          0 1 2 3 4 5 6 7 8 9
// Salida:
// 	5

// Explicación: [1,1,1,0,0,1,1,1,1,1]
//                         ^ ^ ^ ^ ^
// Los números en las posiciones 5 y 9 se han pasado de 0 a 1. La submatriz más larga está subrayada.

function maxAmountOfConsecutiveOnes(nums, k) {
  let start = 0
  let result = 0
  let currentLengthOfOnes
  let positionOfLastFirstZero
  let amountOfZeroesToConvert = k

  console.log(amountOfZeroesToConvert)

  for (let end = 0; end < nums.length; end++) {
    if (result === NaN) debugger
    if (nums[end] === 0 && amountOfZeroesToConvert === k) {
      positionOfLastFirstZero = end
    }
    if (nums[end] === 0 && amountOfZeroesToConvert === 0) {
      amountOfZeroesToConvert = k
      start = positionOfLastFirstZero
    }
    if (nums[end] === 1) {
      currentLengthOfOnes++
    } else if (nums[end] === 0 && amountOfZeroesToConvert > 0) {
      currentLengthOfOnes++
      amountOfZeroesToConvert--
    }

    console.log({
      start,
      end,
      amount: end - start + 1,
    })
    // console.log('resta', end - start + 1)
    result = Math.max(result, end - start + 1)

    console.log(result)
  }

  return result
}

console.log(maxAmountOfConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 0], 2))
