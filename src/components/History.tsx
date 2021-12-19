import React, { useEffect, useState } from 'react';
import '../css/history.scss';
import { User } from '../utils/user';
function parse(i: number) {
	const s = [
		'总成绩',
		'一年级',
		'二年级',
		'三年级',
		'四年级',
		'五年级',
		'六年级'
	];
	return s[i];
}
const Rate = (props: { rate: number; sum: number; grade: number }) => {
	return (
		<li className="accuracy-wrapper">
			<div className="accuracy-label">
				<span>{parse(props.grade)}</span>
			</div>
			<div className="accuracy">
				<div
					className={
						'accuracy-right' + (props.rate === -1 ? ' no-rate' : '')
					}
					style={{
						height: '100%',
						width: `${props.sum ? props.rate * 100 : 50}%`
					}}
				>
					{props.rate === -1
						? '无记录'
						: props.rate
						? `${(props.rate * 100).toFixed(1)}%`
						: 0}
				</div>
				<div
					className={
						'accuracy-wrong' + (props.rate === -1 ? ' no-rate' : '')
					}
					style={{
						height: '100%',
						width: `${props.sum ? 100 - props.rate * 100 : 50}%`
					}}
				>
					{props.rate ? '' : props.sum}
				</div>
			</div>
			<span className="accuracy-sum">{`共${props.sum}题`}</span>
		</li>
	);
};
export const History = (props: { user: User }) => {
	const [info, setInfo] = useState([] as { sum: number; rate: number }[]);
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
				setInfo(data);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className="history-wrapper">
			<div className="accuracy-name">
				<span>{props.user.name}的成绩</span>
			</div>
			<ul>
				{info.map((v, i) => {
					return (
						<Rate
							grade={i}
							key={i}
							rate={typeof v.rate === 'string' ? -1 : v.rate}
							sum={v.sum}
						/>
					);
				})}
			</ul>
		</div>
	);
};
