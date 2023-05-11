// I was struggling with this problem for days.
// I got a hint, that this question is based upon finding next greater element to right/left of ith position of array, now it looks damn easy 0.o

////////////////////////////////////////////////////////////////////////////

// Here we want to find trapping water

// => left and right end there is no wall
// => at any point we store water is :
// water[i]= min (max_left_height,max_right_height)-arr[i];

// to store left height and right max height any given point we can use two array.

// so space would be O(n) and time would be O(n)

// Happy Codding :)
// Up vote if you like or down vote :)

function trappingRainWater(heights) {
  let left = 0
  let right = heights.length - 1
  let maxIzq = 0
  let maxDer = 0
  let collectedWater = 0

  while (left <= right) {
    // case when water would be overflowing to the left
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxIzq) {
        maxIzq = heights[left]
      } else {
        collectedWater += maxIzq - heights[left]
      }
      left++
      // case when water would be overflowing to the right
    } else {
      if (heights[right] >= maxDer) {
        maxDer = heights[right]
      } else {
        collectedWater += maxDer - heights[right]
      }
      right--
    }
  }
  return collectedWater
}
