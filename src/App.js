import React, {useState} from 'react';
import './App.css';
import { CookbookProvider, grubhubLight, Heading } from '@grubhubprod/gh-cookbook-react';
import { FakeGrubhubApp } from "./components/FakeGrubhubApp";
import { isMobile } from 'react-device-detect';
import { SwipeGamePage } from './components/SwipeGamePage';
import { RestaurantList } from "./components/RestaurantList";

function App() {
  const [showSwipe, setShowSwipe] = useState(false);
  const [showGrubHubApp, setShowGrubHubApp] = useState(true);
  const [showRestaurantList, setShowRestaurantList] = useState(false);

  if (!isMobile) {
    return (
      <CookbookProvider theme={grubhubLight}>
        <Heading variant="h4">To get a better experience, please use a mobile device to open the link</Heading>
      </CookbookProvider>
    );
  }

  const showSwipeGamePage = () => {
    setShowSwipe(true);
    setShowGrubHubApp(false);
    setShowRestaurantList(false);
  }

  const goBack = () => {
    setShowSwipe(false);
    setShowGrubHubApp(true);
    setShowRestaurantList(false);
  }

  return (
    <div className="App">
      <CookbookProvider theme={grubhubLight}>
        {showGrubHubApp ? <FakeGrubhubApp showSwipeGamePage={showSwipeGamePage} /> : ''}
        {showSwipe ? <SwipeGamePage goBack={goBack} setShowRestaurantList={setShowRestaurantList} setShowSwipe={setShowSwipe} /> : ''}
        {showRestaurantList ? <RestaurantList goBacktoSwipeGame={showSwipeGamePage} goBack={goBack} /> : ''}
      </CookbookProvider>
    </div>
  );
}

export default App;
