
function tribonacci(signature, n) {
    if (n === 0) return []
    if (n === 1) return [1]
    let sequence = [...signature]
    for (let i = 0, j = 1, k = 2; i < (n - signature.length); i++, j++, k++) {
        sequence.push(sequence[i] + sequence[j] + sequence[k])
    }
    return sequence
}

module.exports = {
    tribonacci,
}