/* eslint-disable no-unused-vars */
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import '../css/question.scss';
import QuestionConstructor, { ISingleOpQuestion } from '../utils/question';
import { Question } from './Question';
function toGrade(v: number) {
	let grade = ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'];
	return grade[v];
}
let index = 0;
export const QuestionPage = observer(
	(props: { level: { value: number; setLevel(v: number): void } }) => {
		const [questions, setQuestions] = useState([] as ISingleOpQuestion[]);
		const [checked, setChecked] = useState(false);
		useEffect(() => {
			let q: ISingleOpQuestion[] = [];
			for (let i = 0; i < 50; ++i) {
				q.push(QuestionConstructor.createQuestion(props.level.value));
			}
			setQuestions(q);
			return () => {
				setChecked(false);
			};
		}, [props.level.value]);
		return (
			<>
				<div className="question-container">
					<div className="questions">
						{questions.map((v) => (
							<Question
								checked={checked}
								key={index++}
								question={v}
							/>
						))}
					</div>
				</div>
				<div className="toolbar">
					<button
						className="toolbar-btn"
						onClick={() => {
							setChecked(true);
						}}
					>
						check
					</button>
				</div>
			</>
		);
	}
);

// const QuestionItem = (props: { question: Question }) => {

// };
