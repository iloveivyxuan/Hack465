import React, {useState} from 'react';
import './App.css';
import { Swipe } from './components/Swipe';
import FakeGrubHubApp from './components/FakeGrubHubApp';
import { Alert } from './components/Alert';
import SwipeContainer from "./components/SwipeContainer";
import { isMobile } from 'react-device-detect';

function App() {
  const [showSwipe, setShowSwipe] = useState(false);
  const [showGrubHubApp, setShowGrubHubApp] = useState(true);
  const [showAlert, setShowAlert] = useState(true);

  if (!isMobile) {
    return <h1>Warning: ...</h1>
  }

  return (
    <div className="App">
      <SwipeContainer />
    </div>
  );
}

export default App;
