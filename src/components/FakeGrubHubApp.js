import React, {useState} from 'react';
import './FakeGrubhubApp.css';

const url = './img/fakeLongBg.jpg';

const noop = () => {};

const FakeGrubHubApp = () => { 
  const [isOpen, setIsOpen] = useState(true);
  
  return (
  <React.Fragment>
    <button onClick={() => setIsOpen(true)}>Open Fake GH App</button>
    {isOpen && <div alt="fake grubhub app" className="fake-gh-app">
      <img src={url} alt='fake background' className="fake-gh-app__bg"/>
      </div>}
  </React.Fragment>
)}

export default FakeGrubHubApp;