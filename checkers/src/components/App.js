import React, { useState } from 'react';
import Board from './Board';




const App = () => {

  const [size, setSize] = useState(8);

  function updateSize(event) {
    const newSize = event.target.value;
    if (newSize < 30 && newSize > -1) {
      console.log('New board size: ' + newSize);
      setSize(newSize);
    } 
    else {
      console.log('That size is pretty big. It might cause issues.');
    }
    
  };

    return (
        <div>
            <input className="input-box" onChange={updateSize} value={size}/>
            <Board squares={size}/>
        </div>
    );
};


export default App;