// Dada la lista de enteros nums, mueve todos los ceros al final de la misma, manteniendo el orden relativo de los elementos no nulos.

// Reto: reordena los valores “in place”, sin hacer una copia de la lista.

// Ejemplo 1:

// # Entrada:
// 	nums = [0,1,0,3,12]
// # Salida:
// 	[1,3,12,0,0]

// # Entrada:
// 	nums = [0]
// # Salida:
// 	[0]

function moveZeroes(nums) {
  if (nums.length === 1 && nums[0] === 0) return nums

  //take count of zeros and perform a number of loops for getting each zero to the latter positions in the array

  let zeroesToRelocate = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroesToRelocate += 1
    }
  }

  while (zeroesToRelocate > 0) {
    //define two pointers, they are one next to the other, start at 0
    // if either of them values at pointer positions is 0, then interchange it with the other

    let p1
    let p2
    let temp
    for (let i = 1; i < nums.length; i++) {
      p1 = i - 1
      p2 = i
      const firstNum = nums[p1]
      const secondNum = nums[p2]
      if (firstNum === 0) {
        temp = secondNum
        nums[p2] = nums[p1]
        nums[p1] = temp
      }
    }
    zeroesToRelocate--
  }
  return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([0]))
