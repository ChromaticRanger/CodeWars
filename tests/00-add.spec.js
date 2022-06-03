
const { expect } = require('chai')
const { add } = require('../JavaScript/00-add')

describe('the add function', function() {

    it('should add 2 numbers together', function() {
        expect(add(4, 4)).to.be.eq(8)
    })

    it('should be able to handle one number', function() {
        expect(add(2)).to.be.eq(2)
    })

});
