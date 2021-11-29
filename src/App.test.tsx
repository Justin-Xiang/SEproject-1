/* eslint-disable no-undef */
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import App from './App';
React.useLayoutEffect = React.useEffect;
Enzyme.configure({ adapter: new Adapter() });
describe('Button 组件测试', () => {
	it('渲染正常', () => {
		// enzyme的shallow方法用于渲染组件
		const componentWrapper = shallow(<App />);
		expect(componentWrapper.html()).toMatchSnapshot();
	});
});
