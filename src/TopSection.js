import React, {useReducer, useState} from 'react';
import Store from './Store.js';

export default function TopSection(){
    const[value, setYearValue] = useState();
    const[state, dispatch] = useReducer(Store.reducer);
    console.log('top-section-state:',state);    

    function callbackFunction(objectInformation){
        console.log('callbackFunction-TopSection-initialState',objectInformation);
        if(objectInformation.count != value)
        {
            setTimeout(function(){
                setYearValue(objectInformation.count);
            },1);             
        }
    }
    Store.addObserverToList('top-section',callbackFunction);

    function addValue(event){
        event.stopPropagation();
        var obj={ type:'increment', payload:1 }
        dispatch(obj);
    }
   
    return(
        <div className="section-top">
            <div className="top-section-container">
                top section
                <br/>
                Value:
                <span data-testid='value'>
                {value}
                </span>          
                <br/>
                <button type="button" data-testid='button-increment' onClick={addValue}>
                Increment
                </button>
            </div>
        </div>
    )
}