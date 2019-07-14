import React from 'react';

const Counter = ({ count,numberInputted,buttonclicked, onDecrement, onIncrement, onReset, onChangeNumber, onInputNumber }) => {
 


    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
       
          <br/>
          <br />
          <label>Time the increment/decrement buttons have been click : { buttonclicked }</label>
          <br/>
          <input type= "number" onChange = {event=> onChangeNumber(event.target.value)} value = {numberInputted} />
            <button onClick ={onInputNumber} >Change Count Number</button> 
        </div>
      </div>
    );
}


export default Counter;