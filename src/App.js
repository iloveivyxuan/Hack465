import React, {useState} from 'react';
import './App.css';
import { CookbookProvider, grubhubLight, Heading } from '@grubhubprod/gh-cookbook-react';
import { SwipeContainer } from "./components/SwipeContainer";
import { isMobile } from 'react-device-detect';
import { SwipeGamePage } from './components/SwipeGamePage';

function App() {
  const [showSwipe, setShowSwipe] = useState(false);
  const [showGrubHubApp, setShowGrubHubApp] = useState(true);

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
  }

  const goBack = () => {
    setShowSwipe(false);
    setShowGrubHubApp(true);
  }

  return (
    <div className="App">
      <CookbookProvider theme={grubhubLight}>
        {showGrubHubApp ? <SwipeContainer showSwipeGamePage={showSwipeGamePage} /> : ''}
        {showSwipe ? <SwipeGamePage goBack={goBack}/> : ''}
      </CookbookProvider>
    </div>
  );
}

export default App;
