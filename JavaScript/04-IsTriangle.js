
function isTriangle(a,b,c)
{
  // The 2 smallest sides must be larger than the 3rd side
  const sum = a + b + c
  const min = Math.min(a,b,c)
  const max = Math.max(a,b,c)
  const middle = sum - (min + max)
  
  if ((min + middle) > max)
    return true
  else
    return false;
}

module.exports = {
    isTriangle,
}