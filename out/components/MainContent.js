var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { observer } from 'mobx-react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import styles from '../css/MainContent.module.css';
import { IndexPage } from './IndexPage';
import { LogIn } from './LogIn';
export var MainContent = observer(function (props) {
    return (_jsx(Router, { children: _jsx("div", __assign({ className: styles.mainContent }, { children: _jsxs(Switch, { children: [_jsx(Route, __assign({ path: "/question" }, { children: _jsx("div", { children: "nothing" }, void 0) }), void 0), _jsx(Route, __assign({ path: "/" }, { children: props.user.isLogIn ? (_jsx(IndexPage, {}, void 0)) : (_jsx(LogIn, { user: props.user }, void 0)) }), void 0)] }, void 0) }), void 0) }, void 0));
});
