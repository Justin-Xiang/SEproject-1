import React from 'react';
import './App.css';
import { MainContent } from './components/MainContent';
import { MenuItem, MyMenu, SubMenu } from './components/SideMenu';
import { user } from './utils/store';
function App() {
	return (
		<>
			<MyMenu>
				<MenuItem key={1}>首页</MenuItem>
				<MenuItem key={2}>首页</MenuItem>
				<SubMenu key={3} title="首页">
					<MenuItem key={4}>首页</MenuItem>
				</SubMenu>
			</MyMenu>
			<MainContent user={user} />
		</>
	);
}

export default App;
