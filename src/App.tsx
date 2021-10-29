import React from 'react';
import './App.css';
import { MainContent } from './components/MainContent';
import { Menus } from './components/SideMenu';
import { user } from './utils/store';
function App() {
	return (
		<>
			<Menus />
			<MainContent user={user} />
		</>
	);
}

export default App;
