import './App.css';
import { Swipe } from './components/Swipe';
import FakeGrubHubApp from './components/FakeGrubHubApp';

function App() {
  // const [showGrubHubApp, setShowGrubHubApp] = setState(false);
  return (
    <div className="App">
      <h3>Are you hungry for this right now?</h3>
      <div className='left'></div>
      <Swipe />
      <FakeGrubHubApp onClickOfFakeButton={() => alert('clicked fake button')} />
    </div>
  );
}

export default App;
