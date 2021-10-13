import React, {useState} from 'react';
import './App.css';
import { Swipe } from './components/Swipe';
import FakeGrubHubApp from './components/FakeGrubHubApp';
import { Alert } from './components/Alert';

function App() {
  const [showSwipe, setShowSwipe] = useState(false);
  const [showGrubHubApp, setShowGrubHubApp] = useState(true);
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="App">
      <h3>Are you hungry for this right now?</h3>
      <div className='left'></div>
      {showGrubHubApp? <FakeGrubHubApp /> : ''}
      {showAlert? <Alert setShowSwipe={setShowSwipe} setShowGrubHubApp={setShowGrubHubApp} setShowAlert={setShowAlert} /> : ''}
      {showSwipe? <Swipe /> : ''}
    </div>
  );
}

export default App;
