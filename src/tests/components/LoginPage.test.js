import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from '../../components/LoginPage';

let startLoginSpy, wrapper;

beforeAll(() => {
    startLoginSpy = jest.fn();
    wrapper = shallow(
        <LoginPage
            startLogin={startLoginSpy}
        />
    );
});

test('should render Login page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startLogin', () => {
    wrapper.find('button').simulate('click');
    expect(startLoginSpy).toHaveBeenCalled();
});