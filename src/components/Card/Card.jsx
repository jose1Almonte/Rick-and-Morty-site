import PropTypes from 'prop-types';
import styles from './Card.module.css'
import { Link } from 'react-router-dom';

function Card({character}) {
  
  return (
    <div className={styles.cardBox}>

      <div className={styles.leftBox}>
        <img className={styles.image} src={{uri: character.image}.uri}/>
      </div>

      <div className={styles.rightBox}>
        <div className={styles.firstRow}>
          <Link to={`/characters/${character.id}`} className={styles.link} target="_blank" rel="noopener noreferrer">
            <p className={styles.name}>{character.name}</p>
          </Link>

          <div className={styles.statusRow}>

            <div className={character.status == "Alive" ? styles.statusCircleAlive : (character.status == "Dead" ? styles.statusCircleDead : styles.statusCircleUnknown)}/>
            <p className={styles.statusSpecies}>{character.status} - {character.species}</p>
            
          </div>

        </div>
        <div className={styles.secondRow}>
          <p className={styles.titleTransparent}>Last known location:</p>
          <p className={styles.textInfo}>{character.location.name}</p>

        </div>

        <div className={styles.thirdRow}>
          <p className={styles.titleTransparent}>First seen in:</p>
          {/* <p className={styles.textInfo}>{character.first_seen_in}</p> */}
          <p className={styles.textInfo}>{character.origin.name}</p>

        </div>
      </div>

    </div>
  )
}

Card.propTypes = {
  character: PropTypes.object.isRequired,
};

export default Card