// import './App.css';
import { useEffect, useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import Card from '../../components/Card/Card';
import Morty from '../../vectores/Morty';
import Rick from '../../vectores/Rick';
import styles from './HomePage.module.css'
import { fetchCharacters } from '../../utils/rick-and-morty-api';

export function HomePage() {
  
  const [characters, setCharacters] = useState([]);
  const[numberPage, setNumberPage] = useState('/?page=1');

  const goRightCards = async () => {
    let value = numberPage;
    const pageNumber = parseInt(value.match(/\d+/)[0]) + 1;
    // console.log(pageNumber);
    const newNumberPage = '/?page=' + pageNumber.toString();
    console.log(newNumberPage);
    setNumberPage(newNumberPage);
  }

  const goLeftCards = async () => {
    let value = numberPage;
    const pageNumber = parseInt(value.match(/\d+/)[0]) - 1;
    // console.log(pageNumber);
    const newNumberPage = '/?page=' + pageNumber.toString();
    console.log(newNumberPage);
    setNumberPage(newNumberPage);
  }

  const getCharacters = async () => {
    const response = await fetchCharacters(numberPage);
    // console.log(response);
    console.log('data:', response.data.results);
    setCharacters(response.data.results)
  }

  useEffect (() => {
    getCharacters();
  }, [numberPage])

  // const characters = [
  //   {
  //     name: "Dr. Xenon Bloom",
  //     last_known_location: "Anatomy Park",
  //     status: "Dead",
  //     first_seen_in: "Anatomy Park",
  //     species: "Humanoid",
  //     image: { uri: "https://rickandmortyapi.com/api/character/avatar/108.jpeg" }
  //   },
  //   {
  //     name: "Lucy",
  //     last_known_location: "Earth (Replacement Dimension)",
  //     status: "Dead",
  //     first_seen_in: "Ricksy Business",
  //     species: "Human",
  //     image: { uri: "https://rickandmortyapi.com/api/character/avatar/210.jpeg" }
  //   },
  //   {
  //     name: "Truth Tortoise",
  //     last_known_location: "unknown",
  //     status: "Unknown",
  //     first_seen_in: "Morty's Mind Blowers",
  //     species: "Mythological Creature",
  //     image: { uri: "https://rickandmortyapi.com/api/character/avatar/368.jpeg" }
  //   },
  //   {
  //     name: "Bearded Jerry",
  //     last_known_location: "Jerryboree",
  //     status: "Alive",
  //     first_seen_in: "Mortynight Run",
  //     species: "Human",
  //     image: { uri: "https://rickandmortyapi.com/api/character/avatar/441.jpeg" }
  //   },
  // ];

  return (
    <>
      {/* <Navbar/> */}
      <div className={styles.titleBox}>
        <div className={styles.vectorsBox}>
          <Rick styles={styles.vectorRick}/>
          <Morty styles={styles.vectorMorty}/>
        </div>
        <p className={styles.pageTitle}> The Rick and Morty API </p>
      </div>
    
      <div className={styles.cardsContainer}>

        {characters.map((character) => (
          <>
          <Card character={character}/>
          {/* <img src={character.image}/> */}
          </>
        ))}
        

      </div>

      <div className={styles.arrows}>
        <li className={`${styles.arrow} ${styles.leftArrow}`} onClick={() => {goLeftCards();}}>{'<'}</li>
        <p className={styles.navigationCardsText}>Navigation cards</p>
        <li className={`${styles.arrow} ${styles.rightArrow}`} onClick={() => {goRightCards();}}>{'>'}</li>
      </div>
    </>
  )
}
