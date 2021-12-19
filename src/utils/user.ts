import { action } from 'mobx';
// 用户个人信息
interface PersonalInformation {
	username: string;
	age: number;
	id: string;
	avatar: Blob | null;
	personalIntroduction: string;
}
// eslint-disable-next-line no-unused-vars
interface Account {
	username: string;
	password: string;
	email: string;
}
/**
 * User类，表示当前登录的用户，若未登录，则isLogIn为false，其余属性为undefined
 */

export class User {
	postAccount = () => {};
	isLogIn = false;
	id = '';
	name = '';
	age = 0;
	personalIntroduction: string = '';
	avatar: Blob | null = null;
	/**
	 * @function 用户登录
	 */
	@action init() {
		this.isLogIn = true;
	}
	logIn(info: PersonalInformation) {
		this.isLogIn = true;
		this.name = info.username;
		this.id = info.id;
		this.age = info.age;
		this.avatar = info.avatar;
		this.personalIntroduction = info.personalIntroduction;
	}

	signup() {
		this.postAccount();
		this.init();
	}
}
/**
 * @function 用户登出
 */
export function logOut() {
	return new User();
}
