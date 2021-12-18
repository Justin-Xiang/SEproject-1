import { hslToRgb } from '@material-ui/system';
import { observer } from 'mobx-react';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import styles from '../css/MainContent.module.css';
import { level } from '../utils/store';
import { User } from '../utils/user';
import { IndexPage } from './IndexPage';
import { LogIn } from './LogIn';
import { WrongSet } from './WrongSet';
import { QuestionPage } from './QuestionPage';
import { History } from './History';
export const MainContent = observer((props: { user: User }) => {
	return (
		<Router>
			<div className={styles.mainContent}>
				<Routes>
					<Route
						element={<WrongSet user={props.user}/>}
						path="/wrongSet"
					/>
					<Route 
						element={<History user={props.user}/>}
						path="/history"
					/>
					<Route
						element={<QuestionPage level={level} user={props.user} />}
						path="/question"
					/>
					<Route
						element={
							props.user.isLogIn ? (
								<IndexPage />
							) : (
								<LogIn user={props.user} />
							)
						}
						path="/"
					></Route>
				</Routes>
			</div>
		</Router>
	);
});
