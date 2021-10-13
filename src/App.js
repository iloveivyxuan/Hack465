import React, {useState} from 'react';
import './App.css';
import { Swipe } from './components/Swipe';
import FakeGrubHubApp from './components/FakeGrubHubApp';
import { Alert } from './components/Alert';
import SwipeContainer from "./components/SwipeContainer";

function App() {
  const [showSwipe, setShowSwipe] = useState(false);
  const [showGrubHubApp, setShowGrubHubApp] = useState(true);
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="App">
      <SwipeContainer />
    </div>
  );
}

export default App;
