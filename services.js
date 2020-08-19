const axios = require('axios')
const API_URL = 'https://swapi.dev/api/people'

async function obterPessoas(nome) {
  const url = `${API_URL}/?seacrh${nome}&format=json`
  const response = await axios.get(url)
  return response.data
}

module.exports = { obterPessoas }
