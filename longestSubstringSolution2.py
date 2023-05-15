def longestSubstring(self, s: str) -> int;
  inicio =0
  caracteresAPosicion = {}
  mayorLongitud = 0
  for fin in range(len(s)):
    if(s[fin] in caracteresAPosicion and inicio <= caracteresAPosicion[s[fin]]):
      inicio = caracteresAPosicion[s[fin]] + 1
      caracteresAPosicion[s[fin]] = fin 
      mayorLongitud = max(mayorLongitud,, fin - inicial + 1)
    return mayorLongitud