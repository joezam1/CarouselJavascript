import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import TopSection from '../src/TopSection';


describe('file: TopSection',function(){
    test('button triggers function on click',function(){
        let mockBtnOnClick = jest.fn();

        var container = render(<TopSection />);
        var btnIncrement = container.getByTestId('button-increment');
        btnIncrement.onClick = mockBtnOnClick();
        fireEvent.click(btnIncrement);
        expect(mockBtnOnClick).toHaveBeenCalledTimes(1);
    });
});

