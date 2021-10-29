import { action, autorun, makeAutoObservable } from 'mobx';
import { difficulty } from './types';
import { User } from './user';

export const user = makeAutoObservable(new User());

export const level = makeAutoObservable(
	{
		value: 0,
		setLevel(v: difficulty) {
			this.value = v;
		}
	},
	{ setLevel: action }
);

autorun(() => {
	console.log(level.value);
});
