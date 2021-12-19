import React, { useEffect, useState } from 'react';
import '../css/history.scss';
import { User } from '../utils/user';
const Rate = (props: { n: number; sum: number }) => {
	return (
		<li className="accuracy-wrapper">
			<div className="accuracy-label">
				<span>一年级</span>
			</div>
			<div className="accuracy">
				<div
					className="accuracy-right"
					style={{
						height: '100%',
						width: `${(props.n / props.sum) * 100}%`
					}}
				>
					{props.n}
				</div>
				<div
					className="accuracy-wrong"
					style={{
						height: '100%',
						width: `${100 - (props.n / props.sum) * 100}%`
					}}
				>
					{props.sum - props.n}
				</div>
			</div>
		</li>
	);
};
export const History = (props: { user: User }) => {
	const [sum, setSum] = useState(0);
	const [rate, setRate] = useState(0);
	useEffect(() => {
		fetch('http://47.96.224.161:8080/history', {
			method: 'POST',
			mode: 'cors',
			body: JSON.stringify({ id: props.user.id }),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setSum(data.sum);
				setRate(data.rate);
			})
			.catch((err) => console.log(err));
		// axios
		// 	.post('http://47.96.224.161:8080/historyByGrade', {
		// 		grade: '1',
		// 		id: props.user.id
		// 	})
		// 	.then(console.log);
	}, []);

	return (
		<>
			<ul>
				<Rate n={rate} sum={sum} />
				<Rate n={rate} sum={sum} />
				<Rate n={rate} sum={sum} />
			</ul>
		</>
	);
};
