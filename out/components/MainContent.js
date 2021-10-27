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
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import styles from '../css/MainContent.module.css';
import { LogIn } from './LogIn';
export var MainContent = function () {
    var _a = useState(false), isLogIn = _a[0], setIsLogIn = _a[1];
    return (_jsx("div", __assign({ className: styles.mainContent }, { children: isLogIn ? 'nothing' : _jsx(LogIn, {}, void 0) }), void 0));
};
