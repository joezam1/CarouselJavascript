import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import Counter from '../src/Counter.js';


describe('File:Counter.js',function(){

    afterEach(cleanup);

    test('true-is-true', function(){
        expect(true).toEqual(true);
    });

    test('Initial state is equal to 100',function(){
        const container = render(<Counter/>);
        var result = container.getByTestId('value');
        expect(result).toHaveTextContent('99');
    });

    test('increments the counter on click button Increment',function(){
        var container = render(<Counter/>);
        let btnIncrement = container.getByTestId('button-increment');
        const mockOnClick = jest.fn()
        btnIncrement.onclick = mockOnClick();
        fireEvent.click(btnIncrement);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

});