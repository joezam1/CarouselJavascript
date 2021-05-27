import React, {useState} from 'react';
import Store from './Store.js';

export default function MidSection(){
    const[value, setValue] = useState();  

    function callbackFunction(objectInformation){
        console.log('callbackFunction-MidSection-initialState',objectInformation);
        if(objectInformation.count != value)
        {
            setTimeout(function(){
                setValue(objectInformation.count);
            },1);             
        }
    }
    Store.addObserverToList('mid-section',callbackFunction);

    console.log('MidSection-initialState',Store.initialState);
    return (
        <div data-testid="mid-section" className="section-mid">
            <div className="mid-section-container">
                Middle section 
                <br/>
                <span data-testid='value'>
                {value}
                </span>
                <br/>
            </div>          
        </div>
    )
}