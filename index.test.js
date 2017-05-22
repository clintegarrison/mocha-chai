'use strict'

var index = require('./index.js')
var expect = require('chai').expect

describe('animal noise maker', function(){
  it('dog should say woof', function(){
    expect(index.animalNoiseMaker('dog')).to.equal('woof')
  })
})
