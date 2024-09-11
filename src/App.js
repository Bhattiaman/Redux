import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Welcome to Redux</h1>
      <h4>Increment/Decrement Counter</h4>
      <h4>Using React and Redux</h4>
      <div className="quantity">
        <button 
          onClick={() => dispatch(decNumber())} 
          className="quantity_minus" 
          title="Decrement"
        >
          <span>--</span>
        </button>
        <input 
          name="quantity" 
          type="text" 
          className="quantity_input"  
          value={myState} 
          readOnly
        />
        <button 
          onClick={() => dispatch(incNumber())} 
          className="quantity_plus" 
          title="Increment"
        >
          <span>++</span>
        </button>
      </div>
    </div>
  );
}

export default App;
