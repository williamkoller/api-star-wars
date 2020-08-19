const service = require('./services')

async function main () {
  try {
    const results = await service.obterPessoas('b')
    const names = []
    results.results.forEach(function(item) {
      names.push(item.name)
    })
    console.log('names', names)
  } catch (error) {
    console.error('error', error)
  }
}
main()