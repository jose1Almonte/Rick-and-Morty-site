import axios from "axios"

export const fetchCharacters = async (numberPage) => {
    const url = `https://rickandmortyapi.com/api/character${numberPage}`
    console.log('url: ',url)
    return axios.get(url)
}