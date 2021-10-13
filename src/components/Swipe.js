import React, { useState } from 'react';
import TinderCard from '../lib/TinderCard';
import './Swipe.css';

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
  const [currentDirection, setCurrentDirection] = useState(undefined)
  const [currentLocation, setCurrentLocation] = useState({ x: 0, y: 0 })

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  const onMove = (dir, location) => {
    setCurrentDirection(dir)
    setCurrentLocation(location)
  }

  const renderIcon = (currentDirection) => {
    if (currentDirection === 'right') {
      return <img src='./img/like.svg' style={{opacity: Math.abs(currentLocation.x)/100}} className='icon' alt='like'/>
    } else if (currentDirection === 'left') {
      return <img src='./img/dislike.svg' className='icon' alt='like'/>
    } else {
      return
    }
  }

  return (
    <div>
      <h4 className='cardHeader'>Are you hungry for this right now?</h4>
      <div className="divideBackground">
        <div className="divideLeft">
          <h4>Not today, thnx.</h4>
          <div className="instruction">
            <img src="./img/arrow-left.svg" alt="dislike"/>
            <p>swipe left</p>
          </div>
        </div>
        <div className="divideRight">
          <h4>Yum, yes please</h4>
          <div className="instruction">
            <p className="instruction__right">swipe right</p>
            <img src="./img/arrow-right.svg" alt="like"/>
          </div>
        </div>
      </div>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)} onMove={onMove}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
              {renderIcon(currentDirection)}
            </div>
          </TinderCard>
        )}
      </div>
    </div>
  )
}

export { Swipe }