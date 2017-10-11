import * as React from 'react';
import {shallow} from 'enzyme';
import {TestComponent} from './TestComponent';

describe('example', () => {
    it('shallow render', () => {
        const wrapper = shallow(<TestComponent />);
        expect(wrapper).toHaveLength(1);
    });
});
