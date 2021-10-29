var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { action } from 'mobx';
/**
 * User类，表示当前登录的用户，若未登录，则isLogIn为false，其余属性为undefined
 */
var User = /** @class */ (function () {
    function User() {
        this.isLogIn = false;
        this.id = '';
        this.name = '';
        this.age = 0;
        this.personalIntroduction = null;
        this.avatar = null;
    }
    /**
     * @function 用户登录
     */
    User.prototype.init = function () {
        this.isLogIn = true;
    };
    User.prototype.logIn = function (info) {
        this.isLogIn = true;
        this.id = info.id;
        this.age = info.age;
        this.avatar = info.avatar;
        this.personalIntroduction = info.personalIntroduction;
    };
    __decorate([
        action
    ], User.prototype, "init", null);
    return User;
}());
export { User };
/**
 * @function 用户登出
 */
export function logOut() {
    return new User();
}
