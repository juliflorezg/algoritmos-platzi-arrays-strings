// dada una cadena s, encontrar la longitud de la subcadena más larga sin repetir caracteres

function longestSubstringWithoutRepeatingCharacters(s) {
  //two pointers, one stays still, the other moves forward to analyze characters
  let p1 = 0
  let p2
  let longestSubstringLength = 1
  let lettersInSubstring = {
    [s[0]]: 1,
  }

  // console.log(lettersInSubstring)
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] !== s[i]) {
      p2 = i
      if (s[i] in lettersInSubstring) {
        if (Object.keys(lettersInSubstring).length > longestSubstringLength) {
          longestSubstringLength = Object.keys(lettersInSubstring).length
        }
        lettersInSubstring = {
          [s[i]]: 1,
        }
        p1 = i
        p2 = i + 1
      } else {
        lettersInSubstring[s[i]] = 1
      }
    } else continue
  }

  console.log(lettersInSubstring)

  return longestSubstringLength
}

console.log(
  longestSubstringWithoutRepeatingCharacters('jdkafnlcdsalkxcmpoiuytfccv')
)
console.log(longestSubstringWithoutRepeatingCharacters('abcabcbb'))
