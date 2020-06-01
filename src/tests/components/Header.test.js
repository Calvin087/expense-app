// react-test-renderer
//  info of snapshot gets sent here './__snapshots__/Header.text'

// What is shallow redering vs full DOM?
import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../components/Header'


test('should render header correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
})

