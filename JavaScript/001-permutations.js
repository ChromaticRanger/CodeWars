
//
// Permutations Recursively
//

const permutations = (elements) => {

  // Base Case
  if (elements.length === 0) return [[]]
  // Get the head
  const head = elements[0]
  // Get the tail
  const tail = elements.slice(1)

  const permsWithoutHead = permutations(tail)
  const allPermutations = []

  // For each Permutation without the head element,
  // insert the head element at each position
  permsWithoutHead.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      const permWithHead = [...perm.slice(0, i), head, ...perm.slice(i)]
      allPermutations.push(permWithHead)
    }
  })

  return allPermutations

}

console.log(
  permutations(['a', 'b', 'c'])
)
console.log(
  permutations([1, 2, 3])
)

module.exports = {
  permutations,
}
