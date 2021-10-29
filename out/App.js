import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { MainContent } from './components/MainContent';
import { Menus } from './components/SideMenu';
import { user } from './utils/store';
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Menus, {}, void 0), _jsx(MainContent, { user: user }, void 0)] }, void 0));
}
export default App;
