import React, {useState} from 'react';

const url = './img/fakeapp.png';

const noop = () => {};

const FakeGrubHubApp = ({onClickOfFakeButton}) => { 
    const [isOpen, setIsOpen] = useState(false);
    
    return (
    <React.Fragment>
        <button onClick={() => setIsOpen(true)}>Open Fake GH App</button>
        {isOpen && <div alt="fake grubhub app" style={{
            backgroundImage:  'url(' + url + ')',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            position: 'fixed', top: 0, left: 0, bottom: 0, right:0,
            width: '100%',
        }}>
            <div onClick={(onClickOfFakeButton || noop)} style={{background: 'white', width: 200, height:200, position: 'absolute', top: '40%'}}>
                Click me!
            </div>
            </div>}
    </React.Fragment>
)}

export default FakeGrubHubApp;