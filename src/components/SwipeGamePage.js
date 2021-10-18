import React, { useState, Fragment } from "react";
import { Swipe } from './Swipe';
import { IconResponsive, SvgArrowLeft, SvgArrowRight, ButtonBar, Copy, Heading, SvgStar } from '@grubhubprod/gh-cookbook-react'
import './SwipeGamepage.css';

const defaultSelectedOptions = [
  {
    name: 'Bibimbop',
    url: './img/bibimbop.jpg',
    restaurant_list: [
      {
        restaurant_id: "Rice N Bread",
        restaurant_name:"Rice N Bread",
        description: "Grilled spicy bulgogi squid and fresh green lettuce on a bed of rice.",
        info: "4.8 (1.5k) • 124 Smith St",
        delivery: "25–35",
        price: "$13.25",
      },
      {
        restaurant_id: "restaurant_2",
        restaurant_name:"Bibimbop Restaurant 2",
      }
    ],
  },
  {
    name: 'Big League Burgers',
    url: './img/burger.jpg',
    restaurant_list: [
      {
        restaurant_id: "restaurant_1",
        restaurant_name:"Wild Goat Burgers and Fries",
        description: "4 oz Angus Custom House Blend Pattie, American cheese, pickles, grilled onion and mayo on a sesame brioche bun.",
        info: "4.7 (2.5k) • 3030 N Broadway St",
        delivery: "25–35",
        price: "$11.99",
      },
      {
        restaurant_id: "restaurant_2",
        restaurant_name:"Burger Restaurant 2",
      }
    ],
  },
  {
    name: 'Meatballs',
    url: './img/meatballs.jpg',
    restaurant_list: [
      {
        restaurant_id: "Kid's Spaghetti And Meatballs",
        restaurant_name:"Kid's Spaghetti And Meatballs",
        description: "sunday sauce, pecorino, hearth bread",
        info: "4.5 (1.2k) • 875 N Michigan Ave",
        delivery: "25–35",
        price: "$16.79",
      },
      {
        restaurant_id: "restaurant_2",
        restaurant_name:"Meatballs Restaurant 2",
      }
    ],
  },
];

const SwipeGamePage = ({ goBack, setShowRestaurantList, setShowSwipe }) => {
  const [activeDirection, setActiveDirection] = useState('middle');
  const [isSwipeComplete, setIsSwipeComplete] = useState(false);
  const [recommendationListShort, setRecommendationListShort] = useState([]);
  const [recommendationListLong, setRecommendationistLong] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const shortList = recommendationListShort.length < 3 ? defaultSelectedOptions.concat(recommendationListShort) : [].concat(recommendationListShort);

  const seeAllMatches = () => {
    console.log("match list")
    setShowRestaurantList(true);
    setShowSwipe(false);
  }

  const getAnotherOne = () => {
    setCurrentIndex(currentIndex + 1);
  }

  const renderSwipeGame = (
    <Fragment>
      <div className='cardHeader'>
        <h4>Hungry for this right now?</h4>
      </div>
      <div className="divideBackground">
        <div className={`divide divideLeft ${activeDirection === 'left' ? 'active' : ''}`}>
          <Heading variant="h4">Not today, thnx.</Heading>
          <div className="instruction">
            <IconResponsive className="arrow-icon arrow-icon__left" color="#6B6B83">
              <SvgArrowLeft />
            </IconResponsive>
            <Copy className="instruction__left" color="secondaryText">swipe left</Copy>
          </div>
        </div>
        <div className={`divide divideRight ${activeDirection === 'right' ? 'active' : ''}`}>
          <Heading variant="h4">Yum, yes please</Heading>
          <div className="instruction">
            <Copy className="instruction__right" color="secondaryText">swipe right</Copy>
            <IconResponsive className="arrow-icon" color="#6B6B83">
              <SvgArrowRight />
            </IconResponsive>
          </div>
        </div>
      </div>
      <Swipe setActiveDirection={setActiveDirection} setIsSwipeComplete={setIsSwipeComplete} setRecommendationListShort={setRecommendationListShort} recommendationListShort={recommendationListShort} />
    </Fragment>
  );

  const renderResult = (
    <Fragment>
      <div className='cardHeader'>
        <h4>We found you a Grubhub Match!</h4>
      </div>
      <div className="container">
        <div className="cardWrapper">
          <img className="sticker" src="./img/sticker.png" alt="sticker"/>
          <div style={{ backgroundImage: 'url(' + shortList[currentIndex].url + ')' }} className='card'></div>
          <div className="cardBottom">
            <h4>{shortList[currentIndex].name}</h4>
            <Copy color="secondaryText">{shortList[currentIndex].restaurant_list[0].description}</Copy>
          </div>
        </div>
        <div className="restaurantInfo">
          <Heading variant="h4">{shortList[currentIndex].restaurant_list[0].restaurant_name}</Heading>
          <div className="moreInfo">
            <IconResponsive color="#FDBB70">
              <SvgStar />
            </IconResponsive>
            <div className="moreInfo__address">
              <Copy color="secondaryText">{shortList[currentIndex].restaurant_list[0].info}</Copy>
            </div>
            <Copy>{shortList[currentIndex].restaurant_list[0].delivery}</Copy>
          </div>
        </div>
      </div>
      <div className="footer">
        <ButtonBar
          isStackedOnMobile={false}
          primary={{
            onClick: function noRefCheck(){},
            text: `Add to bag - ${shortList[currentIndex].restaurant_list[0].price}`
          }}
          secondary={{
            onClick: currentIndex >= 2 ? seeAllMatches : getAnotherOne,
            text: currentIndex >= 2 ? 'See all matches' : 'Show me another'
          }}
        />
      </div>
    </Fragment>
  );

  return (
    <div className="swipeWrapper">
      <div className="topBar" onClick={goBack}>
        <IconResponsive color="#545470">
          <SvgArrowLeft />
        </IconResponsive>
      </div>
      {!isSwipeComplete ? renderSwipeGame : renderResult}
    </div>
  );
}

export { SwipeGamePage };
