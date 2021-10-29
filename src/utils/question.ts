import { Operator } from './types';

export interface IQuestion {
	op: Operator;
	num1: number;
	num2: number;
	id: string;
}

class Question implements IQuestion {
	op: Operator;
	num1: number;
	num2: number;
	id: string;
	constructor(ques: IQuestion) {
		this.op = ques.op;
		this.num1 = ques.num1;
		this.num2 = ques.num2;
		this.id = ques.id;
	}
}

export default Question;
