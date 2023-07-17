import axios from "axios"

export const fetchCharacters = async (numberPage) => {
    const url = `https://rickandmortyapi.com/api/character${numberPage}`
    // console.log('url: ',url)
    return axios.get(url)
}

export const fetchSingleCharacter = async (characterId) => {
    const url = `https://rickandmortyapi.com/api/character/${characterId}`
    // console.log('url: ',url)
    return axios.get(url)
}