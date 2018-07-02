/* 
  add .not.matcher to invert the match

  ** Truthiness **

  toBeNull      === null
  toBeUndefined === undefined
  toBeDefined   !== undefined
  toBeTruthy    if(true)
  toBeFalsy     if(false)

  ** Numbers **
  
  toBeGreaterThan         >
  toBeGreaterThanOrEqual  >=
  toBeLessThan            <
  toBeLessThanOrEqual     <=
  
  toBe        ===
  toEqual     deep equal
  toBeCloseTo for floating points 
              const x = 0.1 + 0.2;
              x === 0.3  // false
  
  ** Strings **
  
  toMatch(/regex/)
  
  ** Arrays **
  
  toContain(item)
  
  ** Exceptions **
  
  toThrow()
  toThrow(type of error)
  toThrow("error text")
  toThrow(/regex/)
  
  
*/