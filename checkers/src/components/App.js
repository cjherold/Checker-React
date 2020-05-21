import React, { useState } from 'react';
import Board from './Board';


const App = () => {

  // state of input value
  const [size, setSize] = useState(8);


  // updates board when size is changed
  function updateSize(event) {
    let newSize = event.target.value;

    if (newSize < 10 && newSize > -1) {
      console.log('New board size: ' + newSize);
      setSize(newSize);
      
    } else {
      console.log(newSize);
      console.log('That size is pretty big. It might cause issues.');
    }
    
  };

    return (
        <div className="App">
            {/* input box with initial value of 8 */}
            <input className="input-box" onChange={updateSize} value={size}/>
            {/* builds checkerboard  */}
            <Board squares={size}/>
        </div>
    );
};


export default App;