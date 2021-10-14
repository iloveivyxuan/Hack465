import React, { useEffect, useState } from 'react';
import TinderCard from '../lib/TinderCard';
import './Swipe.css';
import { db } from '../res/data';

let options = db;
const shuffled = options.sort(() => 0.5 - Math.random());
options = shuffled.slice(0, 5);
options[0].isLast = true

const selectedOptions = [];

const Swipe = ({setActiveDirection, setIsSwipeComplete, setRecommendationListShort, recommendationListShort}) => {
  const [lastDirection, setLastDirection] = useState()
  const [currentDirection, setCurrentDirection] = useState(undefined)
  const [currentLocation, setCurrentLocation] = useState({ x: 0, y: 0 })
  const [likedDishes, setLikedDishes] = useState([]);

  const swiped = (direction, option) => {
    console.log('removing: ' + option.name)
    setLastDirection(direction)
    if (option.isLast) {
      setIsSwipeComplete(true);
      setRecommendationListShort(selectedOptions)
    }
    console.log(direction);
    if (direction === 'right') {
      selectedOptions.push(option)
      // const newList = recommendationListShort.push(option)
      // setRecommendationListShort(newList)
    }
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  const onMove = (dir, location) => {
    setCurrentDirection(dir)
    setCurrentLocation(location)
    setActiveDirection(dir)
  }

  return (
    <div className='cardContainer'>
      {options.map((option) =>
        <TinderCard className='swipe' key={option.name} onSwipe={(dir) => swiped(dir, option)} onCardLeftScreen={() => outOfFrame(option.name)} onMove={onMove}>
          <div style={{ backgroundImage: 'url(' + option.url + ')' }} className='card'>
          </div>
          <div className="cardBottom">
            <h4>{option.name}</h4>
          </div>
        </TinderCard>
      )}
    </div>
  )
}

export { Swipe }