// import './App.css';
// import { useEffect, useState } from 'react';
// import Navbar from '../../Navbar/Navbar';
// import { fetchCharacters } from '../../utils/rick-and-morty-api';
import Card from '../../components/Card/Card';
import Morty from '../../vectores/Morty';
import Rick from '../../vectores/Rick';
import styles from './HomePage.module.css'
import { useCharacters } from '../../hooks/useCharacters';

export function HomePage() {
  const {characters, isLoading, goRightCards, goLeftCards} = useCharacters();

  return (
    <>
      <div className={styles.titleBox}>
        <div className={styles.vectorsBox}>
          <Rick styles={styles.vectorRick}/>
          <Morty styles={styles.vectorMorty}/>
        </div>
        <p className={styles.pageTitle}> The Rick and Morty API </p>
      </div>
    
      <div className={styles.cardsContainer}>

        {isLoading ? (
            <h1 className={styles.pageTitle}>LOADING...</h1>
        ) : (
          <>
          {characters.map((character) => (
            <>
            <Card character={character}/>
            </>
          ))}
          </>
        )}

        
      </div>

      <div className={styles.arrows}>
        <li className={`${styles.arrow} ${styles.leftArrow}`} onClick={() => {goLeftCards();}}>{'<'}</li>
        <p className={styles.navigationCardsText}>Navigation cards</p>
        <li className={`${styles.arrow} ${styles.rightArrow}`} onClick={() => {goRightCards();}}>{'>'}</li>
      </div>
    </>
  )
}
