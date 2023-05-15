function longestSubstring(s) {
  let inicio = 0
  let caracteresAPosicion = {}
  let mayorLongitud = 0
  for (let fin = 0; fin < s.length; fin++) {
    if (
      s[fin] in caracteresAPosicion &&
      inicio <= caracteresAPosicion[s[fin]]
    ) {
      inicio = caracteresAPosicion[s[fin]] + 1
    }
    caracteresAPosicion[s[fin]] = fin
    mayorLongitud = Math.max(mayorLongitud, fin - inicio + 1)
  }
  return mayorLongitud
}
