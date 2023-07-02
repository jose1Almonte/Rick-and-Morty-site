// import './App.css';
import Card from './components/Card/Card';
import styles from './App.module.css'
import Rick from './vectores/Rick';
import Morty from './vectores/Morty';

function App() {

  const characters = [
    {
      name: "Dr. Xenon Bloom",
      last_known_location: "Anatomy Park",
      status: "Dead",
      first_seen_in: "Anatomy Park",
      species: "Humanoid",
      image: { uri: "https://rickandmortyapi.com/api/character/avatar/108.jpeg" }
    },
    {
      name: "Lucy",
      last_known_location: "Earth (Replacement Dimension)",
      status: "Dead",
      first_seen_in: "Ricksy Business",
      species: "Human",
      image: { uri: "https://rickandmortyapi.com/api/character/avatar/210.jpeg" }
    },
    {
      name: "Truth Tortoise",
      last_known_location: "unknown",
      status: "Unknown",
      first_seen_in: "Morty's Mind Blowers",
      species: "Mythological Creature",
      image: { uri: "https://rickandmortyapi.com/api/character/avatar/368.jpeg" }
    },
    {
      name: "Bearded Jerry",
      last_known_location: "Jerryboree",
      status: "Alive",
      first_seen_in: "Mortynight Run",
      species: "Human",
      image: { uri: "https://rickandmortyapi.com/api/character/avatar/441.jpeg" }
    },
  ];

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

        {characters.map((character) => (
          <>
          <Card character={character}/>
          {/* <img src={character.image}/> */}
          </>
        ))}

      </div>
    </>
  )
}

export default App
