import { action, autorun, makeAutoObservable } from 'mobx';
import { User } from './user';
export var user = makeAutoObservable(new User());
export var level = makeAutoObservable({
    value: 0,
    setLevel: function (v) {
        this.value = v;
    }
}, { setLevel: action });
autorun(function () {
    console.log(level.value);
});
