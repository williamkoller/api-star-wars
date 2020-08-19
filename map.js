const service = require('./services')

Array.prototype.myMap = function (callback) {
  const myArray = []
  for (let index = 0; index <= this.length - 1; index++) {
    const result = callback(this[index], index)
    myArray.push(result)
  }
  return myArray
}

async function main() {
  try {
    const results = await service.obterPessoas('a')
    const names = results.results.myMap(function (people, index) {
      return `[${index}] ${people.name}`
    })
    console.log('names', names)
  } catch (error) {
    console.error('Error', error)
  }
}

main()
