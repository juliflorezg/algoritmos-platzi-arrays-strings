var verifyAlienDictionary = function (palabras, orden) {
  //* primer sub-problema -> crear mapa para el diccionario alienígena

  const posicionesDiccionario = new Map()

  for (let i = 0; i < orden.length; i++) {
    posicionesDiccionario[orden[i]] = i // {a: 0, b: 1, c: 2, .....}
  }

  //* segundo sub-problema -> revisar el orden de las palabras
  // comparar dos palabras, se inicia desde la segunda y se compara con la anterior, así con las siguientes, cada una se revisa con la anterior.
  //? complejidad T = O(m * longitud de palabra más larga), m es el tamaño de la lista de palabras, pero como una palabra va a tener un limite dado, se puede considerar como constante, O(n*m). Por lo tanto la complejidad temporal es T = O(n)
  //~ complejidad S = O(m), m es el tamaño del abecedario alien
  for (let i = 1; i < palabras.length; i++) {
    if (areTwoWordsSorted(palabras[i], palabras[i - 1]) === false) return false
  }

  return true
}

//? Complejidad O( longitud de la palabra más larga)
var areTwoWordsSorted = function (word1, word2) {
  // seleccionar la longitud de la palabra más corta para hacer el recorrido de comparación
  const lengthForComparison = Math.min(word1.length, word2.length)

  // comparar carácter por carácter
  for (let c = 0; lengthForComparison; c++) {
    // c -> 2
    // d -> 3
    // true (en caso el diccionario sea el diccionario español(para simplicidad))
    if (posicionesDiccionario[word1[c]] < posicionesDiccionario[word2[c]])
      return true
    if (posicionesDiccionario[word1[c]] > posicionesDiccionario[word2[c]])
      return false
  }
  // caso para cuando una palabra esté contenida en otra (cono, conocer)

  // esto verifica que la palabra corta esté antes que la larga, como arriba, si fuera al revés, no estarían en orden, por lo tanto retornaríamos false
  return word1.length <= word2.length
}
