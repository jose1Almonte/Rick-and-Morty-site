import { useEffect, useState } from "react";
import { fetchCharacters, fetchSingleCharacter } from "../utils/rick-and-morty-api";

export function useCharacters () {
    const [characters, setCharacters] = useState([]);
    const [character, setCharacter] = useState([]);
    const [numberPage, setNumberPage] = useState('/?page=1');
    const [isLoading, setIsLoading] = useState(false);

    const getCharacters = async () => {
        setIsLoading(true);
        const response = await fetchCharacters(numberPage);
        console.log(response.data.results);
        setCharacters(response.data.results)
        setIsLoading(false);
    }

    const getSingleCharacter = async (characterId) => {
      setIsLoading(true);
      const response = await fetchSingleCharacter(characterId);
      console.log('data', response.data);
      setCharacter(response.data)
      setIsLoading(false);
    }

    const goRightCards = async () => {
        let value = numberPage;
        const pageNumber = parseInt(value.match(/\d+/)[0]) + 1;
        // console.log(pageNumber);
        const newNumberPage = '/?page=' + pageNumber.toString();
        // console.log(newNumberPage);
        setNumberPage(newNumberPage);
      }
    
    const goLeftCards = async () => {
      let value = numberPage;
      const pageNumber = parseInt(value.match(/\d+/)[0]) - 1;
      const newNumberPage = '/?page=' + pageNumber.toString();
      setNumberPage(newNumberPage);
    }

    useEffect (() => {
      getCharacters();
    }, [numberPage])
    
    return {
        characters, isLoading, goRightCards, goLeftCards, getSingleCharacter, character
    }
}