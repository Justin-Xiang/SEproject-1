import { Operator } from './types';

export interface ISingleOpQuestion {
	num1: number;
	num2: number;
	op: Operator;
	result: number;
}
export interface IMulOpQuestion {
	op1: Operator;
	op2: Operator; // in bracket
	num1: number;
	num1InBracket: number;
	num2InBracket: number;
	result: number;
}
function isSingleOp(q: any): q is ISingleOpQuestion {
	return q.op1 !== 'undefined';
}
const rand = () => {
	return Math.floor(Math.random() * 100);
};
class QuestionConstructor {
	static createQuestion(q: number): ISingleOpQuestion {
		let num1 = rand(),
			num2 = rand(),
			result = num1 + num2;
		return { num1, num2, result, op: '+' };
	}
}

export default QuestionConstructor;
