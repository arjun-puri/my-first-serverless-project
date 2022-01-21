const fetch = require('node-fetch');

const POKE_API = 'https://pokeapi.co/api/v2/pokedex/kanto'

exports.handler = async () => {
    const res = await fetch(POKE_API);
    const data = await res.json();
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}