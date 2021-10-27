import { action } from 'mobx';
// 用户个人信息
interface PersonalInformation {
	name: string;
	age: number;
	id: string;
	avatar: Blob | null;
	personalIntroduction: object;
}
/**
 * User类，表示当前登录的用户，若未登录，则isLogIn为false，其余属性为undefined
 */
export class User {
	isLogIn = false;
	id: String = '';
	name: String = '';
	age: number = 0;
	personalIntroduction: Object | null = null;
	avatar: Blob | null = null;
	/**
	 * @function 用户登录
	 */
	@action init() {
		this.isLogIn = true;
	}
	logIn(info: PersonalInformation) {
		this.isLogIn = true;
		this.id = info.id;
		this.age = info.age;
		this.avatar = info.avatar;
		this.personalIntroduction = info.personalIntroduction;
	}
}

/**
 * @function 用户登出
 */
export function logOut() {
	return new User();
}
