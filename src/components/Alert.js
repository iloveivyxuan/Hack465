import React, { useState } from 'react';
import SweetAlert from 'sweetalert-react';

const Alert = ({setShowSwipe, setShowGrubHubApp, setShowAlert}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onConfirm = () => {
    setIsOpen(false);
    setShowGrubHubApp(false);
    setShowAlert(false);
    setShowSwipe(true);
  }

  return (
    <div>
      <div onClick={()=>{setIsOpen(true)}} style={{background: '#ddd', width: 100, height:100, position: 'absolute', top: '40%'}}>
        Click me!
      </div>
      <SweetAlert 
        show={isOpen}
        title="Can't decide?"
        text="Let us help! Check out the Grub Match."
        showCancelButton
        onCancel={() => setIsOpen(false)}
        onConfirm={onConfirm}
        cancelButtonText="No thanks"
        confirmButtonText="Match my Grub"
      />
    </div>
  );
}

export { Alert };