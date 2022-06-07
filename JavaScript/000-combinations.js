
//
// Combinations Recursively
//

const combinations = (elements) => {
  
  // Base Case
  if (elements.length === 0) return [[]]
  // Get the head
  const head = elements[0]
  // Get the tail
  const tail = elements.slice(1)

  // Calculate the tail combinations
  const combsWithoutFirst = combinations(tail)
  const combsWithFirst = []

  // For each combination without the head element, 
  // take it and add the head element
  combsWithoutFirst.forEach(comb => {
    const combWithFirst = [...comb, head]
    combsWithFirst.push(combWithFirst)
  })

  return [...combsWithoutFirst, ...combsWithFirst] 

}

console.log(
  combinations(['a', 'b', 'c'])
)

module.exports = {
    combinations,
}
