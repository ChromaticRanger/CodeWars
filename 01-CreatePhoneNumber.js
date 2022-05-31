
function createPhoneNumber(numbers) {
    let phoneNum = ''
    phoneNum += '('
    for (let i = 0; i < numbers.length; i++) {
        phoneNum += numbers[i]
        if (i === 2) phoneNum += ') '
        if (i === 5) phoneNum += '-'
    }
    return phoneNum
}