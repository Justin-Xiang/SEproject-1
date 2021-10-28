import { autorun, makeAutoObservable } from 'mobx';
import { User } from './user';

export const user = makeAutoObservable(new User());
autorun(() => {
	console.log(user.isLogIn);
});
