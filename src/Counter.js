import React, { useState , useReducer} from "react";
import Store from './Store.js';

const Counter = function (){
  const initialValue = 99;
  const[value, setValue] = useState();
  const[state, dispatch] = useReducer(Store.reducer, Store.initialState);

  function callbackFunction(objectInformation){
    console.log('callbackFunction-CounterSection-initialState',objectInformation);
    if(objectInformation.count != value){
      setTimeout(function(){
        setValue(objectInformation.count);
      },1);          
    }
  }
  Store.addObserverToList('counter-section',callbackFunction);

  console.log('Counter-state',state);
  function resolveClick(e){
    e.stopPropagation();
    var inc ={ type:'increment',payload:1 };
    dispatch(inc);
  }

  if(value === undefined){
    setValue(initialValue);
  }
  
  return (
    <div className="section-counter">
      <div className="counter-container">
      <h1 data-testid="value">count: {value}</h1>
      <button type="button" data-testid='button-increment' onClick={resolveClick} >
        Increment
      </button>
      </div>     
    </div>
  );
};
export default Counter;
