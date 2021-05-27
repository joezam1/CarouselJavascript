import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import MidSection from '../src/MidSection.js';

describe('file: MidSection.js', function(){

    test('On first render it does not display value',function(){
        let container = render(<MidSection/>);
        let midSection = container.getByTestId('value');
        expect(midSection).toHaveTextContent('');
    });    
})
