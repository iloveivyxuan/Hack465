import React, { useState, Fragment } from "react";
import { Swipe } from './Swipe';
import { IconResponsive, SvgArrowLeft, SvgArrowRight, ButtonBar, Copy, Heading, SvgStar } from '@grubhubprod/gh-cookbook-react'
import './SwipeGamepage.css';

const SwipeGamePage = ({ goBack }) => {
  const [activeDirection, setActiveDirection] = useState('right');
  const [isSwipeComplete, setIsSwipeComplete] = useState(false);

  const renderSwipeGame = (
    <Fragment>
      <div className='cardHeader'>
        <h4>Are you hungry for this right now?</h4>
      </div>
      <div className="divideBackground">
        <div className={`divide divideLeft ${activeDirection === 'left' ? 'active' : ''}`}>
          <h4>Not today, thnx.</h4>
          <div className="instruction">
            <SvgArrowLeft />
            <p>swipe left</p>
          </div>
        </div>
        <div className={`divide divideRight ${activeDirection === 'right' ? 'active' : ''}`}>
          <h4>Yum, yes please</h4>
          <div className="instruction">
            <p className="instruction__right">swipe right</p>
            <SvgArrowRight />
          </div>
        </div>
      </div>
      <Swipe setActiveDirection={setActiveDirection} setIsSwipeComplete={setIsSwipeComplete} />
    </Fragment>
  );

  const renderResult = (
    <Fragment>
      <img className="sticker" src="./img/sticker.png" alt="sticker"/>
      <div className='cardHeader'>
        <h4>We found you a Grub Match!</h4>
      </div>
      <div className="container">
        <div className="cardWrapper">
          <div style={{ backgroundImage: 'url(' + './img/salmon.jpg' + ')' }} className='card'>
          </div>
          <div className="cardBottom">
            <h4>Sushi Platter</h4>
            <Copy color="secondaryText">This description has a max of 3 lines of text. Truncate manually. You can also resize this to 44px if it has no badge...</Copy>
          </div>
        </div>
        <div className="restaurantInfo">
          <Heading variant="h4">Sushi Restaurant</Heading>
          <div className="moreInfo">
            <IconResponsive color="#FDBB70">
              <SvgStar />
            </IconResponsive>
            <div className="moreInfo__address">
              <Copy color="secondaryText">4.5 (1.5k) • 124 Smith St</Copy>
            </div>
            <Copy>20–30 mins</Copy>
          </div>
        </div>
      </div>
      <div className="footer">
        <ButtonBar
          isStackedOnMobile={false}
          primary={{
            onClick: function noRefCheck(){},
            text: 'Add to bag - $10.79'
          }}
          secondary={{
            onClick: function noRefCheck(){},
            text: 'No thanks'
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
      {isSwipeComplete ? renderResult : renderSwipeGame}
    </div>
  );
}

export { SwipeGamePage };