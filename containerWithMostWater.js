function containerWithMostWater(list) {
  let p1 = 0
  let p2 = list.length - 1
  let maxArea = 0

  while (p2 - p1 !== 1) {
    let minValue = Math.min(list[p1], list[p2])
    let currentArea = minValue * (p2 - p1)
    if (currentArea > maxArea) {
      maxArea = currentArea
    }
    if (minValue === list[p1]) {
      p1++
    }
    if (minValue === list[p2]) {
      p2--
    }
  }

  return maxArea
}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]))
const alturas = [8, 1, 6, 2, 5, 4, 1, 3, 7]
console.log(containerWithMostWater(alturas))
