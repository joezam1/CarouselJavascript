import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import BottomSection from '../src/BottomSection.js';

describe('file: BottomSection.js',function(){
    test('true is true', function(){
        expect(true).toBe(true);
    });

    test('button onclick event triggers function', function(){
        const mockButtonClick = jest.fn();

        let container = render(<BottomSection/>);
        let btnDecrement = container.getByTestId('button-decrement');
        btnDecrement.onclick = mockButtonClick();

        fireEvent.click(btnDecrement);

        expect(mockButtonClick).toHaveBeenCalledTimes(1);
    })
})