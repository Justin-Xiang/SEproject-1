import { Operator } from './types';
import BigNumber from 'bignumber.js';
export interface ISingleOpQuestion {
	num1: number;
	num2: number;
	op: Operator;
	result: any;
	answer: number;
	flag: number
}
export interface IDouOpQuestion {
	op1: Operator;
	op2: Operator;
	num1: number;
	num2: number;
	num3: number;
	result: number;
	answer: number;
	flag: number
}

export interface ILeBrOpQuestion {
	op1: Operator;
	op2: Operator;
	num1: number;
	num2: number;
	num3: number;
	result: number;
	answer: number;
	flag: number
}

export interface IRiBrOpQuestion {
	op1: Operator;
	op2: Operator;
	num1: number;
	num2: number;
	num3: number;
	result: number;
	answer: number;
	flag: number
}


//精确加法
function accAdd(arg1:any, arg2:any) {
    let r1, r2, m, c;
    try {
        r1 = arg1.toString().split('.')[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split('.')[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
        let cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace('.', ''));
            arg2 = Number(arg2.toString().replace('.', '')) * cm;
        } else {
            arg1 = Number(arg1.toString().replace('.', '')) * cm;
            arg2 = Number(arg2.toString().replace('.', ''));
        }
    } else {
        arg1 = Number(arg1.toString().replace('.', ''));
        arg2 = Number(arg2.toString().replace('.', ''));
    }
    return (arg1 + arg2) / m;
}

//精确减法
function accSub(arg1:any, arg2:any) {
    let r1, r2, m, n;
    try {
        r1 = arg1.toString().split('.')[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split('.')[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

//精确乘法
function accMul(arg1:any, arg2:any) {
    let m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split('.')[1].length;
    }
    catch (e) {
    }
    try {
        m += s2.split('.')[1].length;
    }
    catch (e) {
    }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}

//精确除法
function accDiv(arg1:any, arg2:any) {
    let t1 = 0, t2 = 0, r1, r2;
    try {
        t1 = arg1.toString().split('.')[1].length;
    }
    catch (e) {
    }
    try {
        t2 = arg2.toString().split('.')[1].length;
    }
    catch (e) {
    }
    
    r1 = Number(arg1.toString().replace('.', ''));
    r2 = Number(arg2.toString().replace('.', ''));
    return (r1 / r2) * Math.pow(10, t2 - t1);
    
}

class QuestionConstructor {
	static async createQuestion(q: number)  {
		let QuestionList: Object[] = [];
		// 一年级
		if(q === 1) {
		await fetch('http://47.96.224.161:8080/testMake', {
						method: 'POST',
						// mode: 'same-origin',
						mode: 'cors',
						body: JSON.stringify({grade:1}),
						headers: {
							'Content-Type': 'application/json'
						}
				})
					.then((res) => {
							return res.json();
					})
						.then((data) => {
							console.log(data);
							data.forEach((element:any) => {
								console.log(element);
								if(element.model === '1'){
									let question: ISingleOpQuestion = {
									num1: element.num1,
									num2: element.num2,
									op: '+',
									result: element.num1+element.num2,
									answer:NaN,
									flag:1
								}
								QuestionList.push(question);
								}
								else if(element.model === '2'){
									let question: ISingleOpQuestion = {
									num1: element.num1,
									num2: element.num2,
									op: '-',
									result: element.num1-element.num2,
									answer:NaN,
									flag:1
								}
								QuestionList.push(question);
								}
								
							}
							
						)
						console.log(QuestionList);
					})
						.catch((err) => console.log(err));
		
		return Promise.resolve(QuestionList);
	}

	//二年级
	else if(q === 2) {
		await fetch('http://47.96.224.161:8080/testMake', {
						method: 'POST',
						// mode: 'same-origin',
						mode: 'cors',
						body: JSON.stringify({grade:2}),
						headers: {
							'Content-Type': 'application/json'
						}
				})
					.then((res) => {
							return res.json();
					})
						.then((data) => {
							console.log(data);
							data.forEach((element:any) => {
								console.log(element);
								if(element.model === '3'){
									let question: ISingleOpQuestion = {
									num1: element.num1,
									num2: element.num2,
									op: '*',
									result: element.num1*element.num2,
									answer:NaN,
									flag:1
								}
								QuestionList.push(question);
								}
								else if(element.model === '5'){
									let question: IDouOpQuestion = {
									op1:'*',
									op2:'+',
									num1: element.num1,
									num2: element.num2,
									num3: element.num3,
									result: element.num1*element.num2 + element.num3,
									answer:NaN,
									flag:2
								}
								QuestionList.push(question);
								}
								else if(element.model === '7'){
									let question: IDouOpQuestion = {
									op1:'+',
									op2:'*',
									num1: element.num1,
									num2: element.num2,
									num3: element.num3,
									result: element.num1+ element.num2 * element.num3,
									answer:NaN,
									flag:2
								}
								QuestionList.push(question);
								}
								
								
							}
							
						)
						console.log(QuestionList);
					})
						.catch((err) => console.log(err));
		
		return Promise.resolve(QuestionList);
	}

	//三年级
	else if(q === 3) {
		await fetch('http://47.96.224.161:8080/testMake', {
						method: 'POST',
						// mode: 'same-origin',
						mode: 'cors',
						body: JSON.stringify({grade:3}),
						headers: {
							'Content-Type': 'application/json'
						}
				})
					.then((res) => {
							return res.json();
					})
						.then((data) => {
							console.log(data);
							data.forEach((element:any) => {
								console.log(element);
								if(element.model === '3'){
									let question: ISingleOpQuestion = {
									num1: element.num1,
									num2: element.num2,
									op: '*',
									result: element.num1*element.num2,
									answer:NaN,
									flag:1
								}
								QuestionList.push(question);
								}
								if(element.model === '4'){
									let question: ISingleOpQuestion = {
									num1: element.num1,
									num2: element.num2,
									op: '/',
									result: element.num1/element.num2,
									answer:NaN,
									flag:1
								}
								QuestionList.push(question);
								}
								else if(element.model === '5'){
									let question: IDouOpQuestion = {
									op1:'*',
									op2:'+',
									num1: element.num1,
									num2: element.num2,
									num3: element.num3,
									result: element.num1*element.num2 + element.num3,
									answer:NaN,
									flag:2
								}
								QuestionList.push(question);
								}
								else if(element.model === '6'){
									let question: IDouOpQuestion = {
									op1:'/',
									op2:'+',
									num1: element.num1,
									num2: element.num2,
									num3: element.num3,
									result: element.num1/element.num2 + element.num3,
									answer:NaN,
									flag:2
								}
								QuestionList.push(question);
								}
								
								
							}
							
						)
						console.log(QuestionList);
					})
						.catch((err) => console.log(err));
		
		return Promise.resolve(QuestionList);
	}

	//四年级
	else if(q === 4) {
		await fetch('http://47.96.224.161:8080/testMake', {
						method: 'POST',
						// mode: 'same-origin',
						mode: 'cors',
						body: JSON.stringify({grade:4}),
						headers: {
							'Content-Type': 'application/json'
						}
				})
					.then((res) => {
							return res.json();
					})
						.then((data) => {
							console.log(data);
							data.forEach((element:any) => {
								console.log(element);
								if(element.model === '3'){
									let question: ISingleOpQuestion = {
									num1: element.num1,
									num2: element.num2,
									op: '*',
									result: element.num1*element.num2,
									answer:NaN,
									flag:1
								}
								QuestionList.push(question);
								}
								if(element.model === '4'){
									let question: ISingleOpQuestion = {
									num1: element.num1,
									num2: element.num2,
									op: '/',
									result: new BigNumber(element.num1).dividedBy(new BigNumber(element.num2)),
									answer:NaN,
									flag:1
								}
								QuestionList.push(question);
								}
								else if(element.model === '14'){
									let question: ILeBrOpQuestion = {
									op1:'-',
									op2:'/',
									num1: element.num1,
									num2: element.num2,
									num3: element.num3,
									result: accDiv(accSub(element.num1,element.num2), element.num3),
									answer:NaN,
									flag:3
								}
								QuestionList.push(question);
								}
								else if(element.model === '15'){
									let question: IRiBrOpQuestion = {
									op1:'*',
									op2:'+',
									num1: element.num1,
									num2: element.num2,
									num3: element.num3,
									result: element.num1*(element.num2 + element.num3),
									answer:NaN,
									flag:4
								}
								QuestionList.push(question);
								}
								
								
							}
							
						)
						console.log(QuestionList);
					})
						.catch((err) => console.log(err));
		
		return Promise.resolve(QuestionList);
	}
	//五年级
	else if(q === 5) {
		await fetch('http://47.96.224.161:8080/testMake', {
						method: 'POST',
						// mode: 'same-origin',
						mode: 'cors',
						body: JSON.stringify({grade:5}),
						headers: {
							'Content-Type': 'application/json'
						}
				})
					.then((res) => {
							return res.json();
					})
						.then((data) => {
							console.log(data);
							data.forEach((element:any) => {
								console.log(element);
								if(element.model === '3'){
									let question: ISingleOpQuestion = {
									num1: element.num1,
									num2: element.num2,
									op: '*',
									result: accMul(element.num1,element.num2),
									answer:NaN,
									flag:1
								}
								QuestionList.push(question);
								}
								
								if(element.model === '4'){
									let question: ISingleOpQuestion = {
									num1: element.num1,
									num2: element.num2,
									op: '/',
									result:  accDiv(element.num1,element.num2),
									answer:NaN,
									flag:1
								}
								QuestionList.push(question);
								}
								else if(element.model === '14'){
									let question: ILeBrOpQuestion = {
									op1:'-',
									op2:'/',
									num1: element.num1,
									num2: element.num2,
									num3: element.num3,
									result:accDiv(accSub(element.num1,element.num2), element.num3),
									answer:NaN,
									flag:3
								}
								QuestionList.push(question);
								}
								else if(element.model === '7'){
									let question: IDouOpQuestion = {
									op1:'+',
									op2:'*',
									num1: element.num1,
									num2: element.num2,
									num3: element.num3,
									result:  accAdd(element.num1, accMul(element.num2, element.num3)),
									answer:NaN,
									flag:2
								}
								QuestionList.push(question);
								}
							}
							
						)
						console.log(QuestionList);
					})
						.catch((err) => console.log(err));
		
		return Promise.resolve(QuestionList);
	}

	//六年级
	else if(q === 6) {
		await fetch('http://47.96.224.161:8080/testMake', {
						method: 'POST',
						// mode: 'same-origin',
						mode: 'cors',
						body: JSON.stringify({grade:6}),
						headers: {
							'Content-Type': 'application/json'
						}
				})
					.then((res) => {
							return res.json();
					})
						.then((data) => {
							console.log(data);
							data.forEach((element:any) => {
								console.log(element);
								if(element.model === '3'){
									let question: ISingleOpQuestion = {
									num1: element.num1,
									num2: element.num2,
									op: '*',
									result: accMul(element.num1,element.num2),
									answer:NaN,
									flag:1
								}
								QuestionList.push(question);
								}
								if(element.model === '4'){
									let question: ISingleOpQuestion = {
									num1: element.num1,
									num2: element.num2,
									op: '/',
									result: accDiv(element.num1,element.num2),
									answer:NaN,
									flag:1
								}
								QuestionList.push(question);
								}
								else if(element.model === '12'){
									let question: ILeBrOpQuestion = {
									op1:'-',
									op2:'*',
									num1: element.num1,
									num2: element.num2,
									num3: element.num3,
									result: accMul(accSub(element.num1,element.num2), element.num3) ,
									answer:NaN,
									flag:3
								}
								QuestionList.push(question);
								}
								else if(element.model === '9'){
									let question: IDouOpQuestion = {
									op1:'*',
									op2:'/',
									num1: element.num1,
									num2: element.num2,
									num3: element.num3,
									result: parseFloat(accDiv(accMul(element.num1, element.num2),element.num3).toFixed(3)),
									answer:NaN,
									flag:2
								}
								QuestionList.push(question);
								}
								
								
							}
							
						)
						console.log(QuestionList);
					})
						.catch((err) => console.log(err));
		
		return Promise.resolve(QuestionList);
	}

}
}

export default QuestionConstructor;
