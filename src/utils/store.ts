import { action, makeAutoObservable } from 'mobx';
import { User } from './user';

export const user = makeAutoObservable(new User());

export const level = makeAutoObservable(
	{
		value: 1,
		setLevel(v: number) {
			this.value = v;
		}
	},
	{ setLevel: action }
);
