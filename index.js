'use strict'

function animalNoiseMaker(animal) {
  console.log(animal)
  switch(animal){
    case 'dog':
      return 'woof'
      break
    case 'cat':
      return 'meow'
      break
    case 'cow':
      return 'moo'
      break
    default:
      return 'unkown'
  }
}

// var animalNoise = animalNoiseMaker('dog')
// console.log(animalNoise)

module.exports = {
  animalNoiseMaker: animalNoiseMaker
}
