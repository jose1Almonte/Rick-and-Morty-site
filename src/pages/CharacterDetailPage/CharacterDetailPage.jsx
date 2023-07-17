import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCharacters } from '../../hooks/useCharacters';
import styles from './CharacterDetailPage.module.css'

export function CharacterDetailPage() {
    const {characterId} = useParams();

    const {character, getSingleCharacter, isLoading} = useCharacters();


    useEffect(() => {
      if (!isLoading && characterId) {
        const callSingleCharacter = async () => {
          await getSingleCharacter(characterId);
        }
        callSingleCharacter();
      }
    }, [])


  return (
    <>
    <div className={styles.bigBox}>

      {character.id ? (
        <>
          <img className={styles.image} src={{uri: character.image}.uri}/>

          <div className={styles.descriptionBox}>
            <h1 className={styles.title}>{character.name}</h1>
            <h2 className={styles.description}>ID: {character.id} </h2>
            <h2 className={styles.description}>Specie: {character.species}</h2>
            <h2 className={styles.description}>Type: {character.status}</h2>
            <h2 className={styles.description}>Gender: {character.gender}</h2>
          </div>
        </>
      ) : (
        <>
          <h1>LOADING...</h1>
        </>
      )}

    </div>
    </>
  )
}

