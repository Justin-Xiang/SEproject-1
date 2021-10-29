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
import { Menu, MenuItem, SubMenu } from './Menu';
export var Menus = function () {
    return (_jsxs(Menu, { children: [_jsx(MenuItem, __assign({ default: true, href: "#/" }, { children: "\u9996\u9875" }), 0), _jsxs(SubMenu, __assign({ title: "\u9898\u5E93" }, { children: [_jsx(MenuItem, __assign({ href: "#/question", level: 1 }, { children: "\u4E00\u5E74\u7EA7" }), 1), _jsx(MenuItem, __assign({ href: "#/question", level: 2 }, { children: "\u4E8C\u5E74\u7EA7" }), 2), _jsx(MenuItem, __assign({ href: "#/question", level: 3 }, { children: "\u4E09\u5E74\u7EA7" }), 3), _jsx(MenuItem, __assign({ href: "#/question", level: 4 }, { children: "\u56DB\u5E74\u7EA7" }), 4), _jsx(MenuItem, __assign({ href: "#/question", level: 5 }, { children: "\u4E94\u5E74\u7EA7" }), 5), _jsx(MenuItem, __assign({ href: "#/question", level: 6 }, { children: "\u516D\u5E74\u7EA7" }), 6)] }), 10), _jsx(MenuItem, __assign({ href: "#/wrongSet" }, { children: "\u9519\u9898\u96C6" }), 20), _jsx(MenuItem, __assign({ href: "#/history" }, { children: "\u5386\u53F2\u8BB0\u5F55" }), 30)] }, void 0));
};
