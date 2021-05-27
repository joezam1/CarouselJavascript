import React from 'react';
import {render} from '@testing-library/react';
import App from '../src/App.js';


describe('file App.js', function(){
    test('it should take a snapshot', function(){
        var container = render(<App/>);
        expect(container.asFragment(<App/>)).toMatchSnapshot();
    });
});