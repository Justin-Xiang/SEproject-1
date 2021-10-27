import './App.css';
import { MainContent } from './components/MainContent';
import { SideMenu } from './components/SideMenu';
import { user } from './utils/store';
function App() {
	return (
		<>
			<SideMenu />
			<MainContent user={user} />
		</>
	);
}

export default App;
