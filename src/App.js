import React from 'react';


import TopSection from './TopSection.js';
import MidSection from './MidSection.js';
import BottomSection from './BottomSection.js';


import Counter from './Counter.js';

export default function App(){
    return( <div>
            <Counter/>
            <TopSection/>
            <MidSection/>
            <BottomSection/>
        </div>
    )
}