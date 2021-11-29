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

export const signal = makeAutoObservable(
	{
		value: true,
		ready: false,
		getReady() {
			this.ready = true;
		},
		init() {
			this.ready = false;
		},
		emit() {
			this.value = !this.value;
		}
	},
	{ emit: action }
);
