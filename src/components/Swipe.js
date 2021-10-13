import React, { useState } from 'react';
import TinderCard from '../lib/TinderCard';

const db = [
  {
    name: 'Bibimbop',
    url: './img/bibimbop.jpg'
  },
  {
    name: 'Burger',
    url: './img/burger.jpg'
  },
  {
    name: 'Meatballs',
    url: './img/meatballs.jpg'
  },
  {
    name: 'Rice Noodles',
    url: './img/rice-noodles.jpg'
  },
  {
    name: 'Salmon',
    url: './img/salmon.jpg'
  }
]

function Swipe () {
  const characters = db
  const [lastDirection, setLastDirection] = useState()
  const [currentLocation, setCurrentLocation] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  const onMove = (dir) => {
    setCurrentLocation(dir)
  }

  const renderIcon = (currentLocation) => {
    if (currentLocation === 'right') {
      return <img src='./img/like.svg' className='icon' alt='like'/>
    } else if (currentLocation === 'left') {
      return <img src='./img/dislike.svg' className='icon' alt='like'/>
    } else {
      return
    }
  }

  return (
    <div>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)} onMove={onMove}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
              {renderIcon}
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : ''}
    </div>
  )
}

export { Swipe }