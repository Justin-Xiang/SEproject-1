import React, { useEffect, useState } from 'react';
import { User } from '../utils/user';
export const History = (props: { user: User }) => {
	const [sum, setSum] = useState(0);
	const [accuracy, setAccuracy] = useState(0);
	useEffect(() => {
		fetch('https://47.96.224.161:8080/history', {
			method: 'POST',
			mode: 'cors',
			body: JSON.stringify({ id: props.user.id }),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setSum(data.sum);
				setAccuracy(data.rate);
			})
			.catch((err) => console.log(err));
	}, [sum, accuracy]);

	return (
		<>
			<h1>历史记录</h1>
			<h2>共做题{sum}道</h2>
			<h1>准确率统计</h1>
			<h2>准确率{accuracy}</h2>
		</>
	);
};
