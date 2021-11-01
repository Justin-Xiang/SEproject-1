import { Operator } from './types';

export interface ISingleOpQuestion {
	num1: number;
	num2: number;
	op: Operator;
}
export interface IMulOpQuestion {
	op1: Operator;
	op2: Operator; // in bracket
	num1: number;
	num1InBracket: number;
	num2InBracket: number;
}
function isSingleOp(q: any): q is ISingleOpQuestion {
	return q.op1 !== 'undefined';
}
class QuestionConstructor {
	static createQuestion(q: ISingleOpQuestion): void {}
}

export default QuestionConstructor;
