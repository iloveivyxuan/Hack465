import React, { useState } from 'react';
import TinderCard from '../lib/TinderCard';
import './Swipe.css';

const db = [
  {
    name: 'Bibimbop',
    url: './img/bibimbop.jpg',
    restaurant_list: [
      {
        restaurant_id: "restaurant_1",
        restaurant_name:"Bibimbop Restaurant 1",
        add_to_cart_link: "https://pp.grubhub.com/restaurant/jerusalem-cafe-35-w-36th-st-new-york/264918/menu-item/7344586?menu-item-options="
      },
      {
        restaurant_id: "restaurant_2",
        restaurant_name:"Bibimbop Restaurant 2",
        add_to_cart_link: "https://pp.grubhub.com/restaurant/jerusalem-cafe-35-w-36th-st-new-york/264918/menu-item/7344586?menu-item-options="
      }
    ],
    isLast: true,
  },
  {
    name: 'Burger',
    url: './img/burger.jpg',
    restaurant_list: [
      {
        restaurant_id: "restaurant_1",
        restaurant_name:"Burger 1",
        add_to_cart_link: "https://pp.grubhub.com/restaurant/jerusalem-cafe-35-w-36th-st-new-york/264918/menu-item/7344586?menu-item-options="
      },
      {
        restaurant_id: "restaurant_2",
        restaurant_name:"Burger Restaurant 2",
        add_to_cart_link: "https://pp.grubhub.com/restaurant/jerusalem-cafe-35-w-36th-st-new-york/264918/menu-item/7344586?menu-item-options="
      }
    ],
  },
  {
    name: 'Meatballs',
    url: './img/meatballs.jpg',
    restaurant_list: [
      {
        restaurant_id: "restaurant_1",
        restaurant_name:"Meatballs Restaurant 1",
        add_to_cart_link: "https://pp.grubhub.com/restaurant/jerusalem-cafe-35-w-36th-st-new-york/264918/menu-item/7344586?menu-item-options="
      },
      {
        restaurant_id: "restaurant_2",
        restaurant_name:"Meatballs Restaurant 2",
        add_to_cart_link: "https://pp.grubhub.com/restaurant/jerusalem-cafe-35-w-36th-st-new-york/264918/menu-item/7344586?menu-item-options="
      }
    ],
  },
  {
    name: 'Rice Noodles',
    url: './img/rice-noodles.jpg',
    restaurant_list: [
      {
        restaurant_id: "restaurant_1",
        restaurant_name:"Rice Noodles Restaurant 1",
        add_to_cart_link: "https://pp.grubhub.com/restaurant/jerusalem-cafe-35-w-36th-st-new-york/264918/menu-item/7344586?menu-item-options="
      },
      {
        restaurant_id: "restaurant_2",
        restaurant_name:"Rice Noodles Restaurant 2",
        add_to_cart_link: "https://pp.grubhub.com/restaurant/jerusalem-cafe-35-w-36th-st-new-york/264918/menu-item/7344586?menu-item-options="
      }
    ],
  },
  {
    name: 'Salmon',
    url: './img/salmon.jpg',
    restaurant_list: [
      {
        restaurant_id: "restaurant_1",
        restaurant_name:"Fresh Salmon Restaurant 1",
        add_to_cart_link: "https://pp.grubhub.com/restaurant/jerusalem-cafe-35-w-36th-st-new-york/264918/menu-item/7344586?menu-item-options="
      },
      {
        restaurant_id: "restaurant_2",
        restaurant_name:"Multidish Restaurant 2",
        add_to_cart_link: "https://pp.grubhub.com/restaurant/jerusalem-cafe-35-w-36th-st-new-york/264918/menu-item/7344586?menu-item-options="
      }
    ],
  }
]

const Swipe = ({setActiveDirection, setIsSwipeComplete}) => {
  const characters = db
  const [lastDirection, setLastDirection] = useState()
  const [currentDirection, setCurrentDirection] = useState(undefined)
  const [currentLocation, setCurrentLocation] = useState({ x: 0, y: 0 })

  const swiped = (direction, nameToDelete, isLast) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    if (isLast) {
      setIsSwipeComplete(true);
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
      {characters.map((character) =>
        <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name, character.isLast)} onCardLeftScreen={() => outOfFrame(character.name)} onMove={onMove}>
          <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
          </div>
          <div className="cardBottom">
            <h4>{character.name}</h4>
          </div>
        </TinderCard>
      )}
    </div>
  )
}

export { Swipe }