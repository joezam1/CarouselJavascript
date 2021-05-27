import React,{useState, useReducer} from 'react';
import Store from './Store.js';


export default function BottomSection(){

    const [state, dispatch] = useReducer(Store.reducer, Store.initialState);
    const[value, setYearValue] = useState();

    function callbackFunction(objectInformation){
        console.log('callbackFunction-bottomSection-initialState',objectInformation);
        if(objectInformation.count != value)
        {
            setTimeout(function(){
                setYearValue(objectInformation.count)
            },1);
        }
    }

    Store.addObserverToList('bottom-section',callbackFunction);

    function resolveClick(event){
        event.stopPropagation();
        var decrement ={ type: 'decrement', payload:1 };
        dispatch(decrement);
    }

    return(
        <div className="section-bottom">
            <div className="bottom-section-container">
            Bottom section
             <br/>
             Value: {value}
             <br/>
             <button type="button" data-testid="button-decrement" onClick={resolveClick}>
                Decrement
            </button>     
            </div>                  
        </div>
    )
}