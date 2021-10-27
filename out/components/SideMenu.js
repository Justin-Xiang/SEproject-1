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
import { AntDesignOutlined, FunctionOutlined, HomeOutlined, ReadOutlined, SecurityScanOutlined } from '@ant-design/icons';
import { Avatar, Menu } from 'antd';
import styles from '../css/SideMenu.module.css';
export var Menus = function () {
    return (_jsxs(Menu, __assign({ selectable: false, style: {
            width: '100%',
            height: '80%',
            bottom: '0px',
            display: 'flex',
            flexDirection: 'column',
            flex: 1
        }, mode: "inline", theme: "dark" }, { children: [_jsx(Menu.Item, __assign({ icon: _jsx(HomeOutlined, {}, void 0) }, { children: "\u4E2A\u4EBA\u4FE1\u606F" }), 0), _jsxs(Menu.SubMenu, __assign({ title: "\u9898\u5E93", icon: _jsx(FunctionOutlined, {}, void 0) }, { children: [_jsx(Menu.Item, { children: "\u4E00\u5E74\u7EA7" }, 1), _jsx(Menu.Item, { children: "\u4E8C\u5E74\u7EA7" }, 2), _jsx(Menu.Item, { children: "\u4E09\u5E74\u7EA7" }, 3), _jsx(Menu.Item, { children: "\u56DB\u5E74\u7EA7" }, 4), _jsx(Menu.Item, { children: "\u4E94\u5E74\u7EA7" }, 5), _jsx(Menu.Item, { children: "\u516D\u5E74\u7EA7" }, 6)] }), 10), _jsx(Menu.Item, __assign({ icon: _jsx(SecurityScanOutlined, {}, void 0) }, { children: "\u9519\u9898\u96C6" }), 20), _jsx(Menu.Item, __assign({ icon: _jsx(ReadOutlined, {}, void 0) }, { children: "\u751F\u6DAF\u8BB0\u5F55" }), 30)] }), void 0));
};
export var SideMenu = function () {
    return (_jsxs("div", __assign({ className: styles.menuContainer }, { children: [_jsx("div", __assign({ className: styles.avatarContainer }, { children: _jsx(Avatar, { size: { xs: 24, sm: 32, md: 40, lg: 64, xl: 100, xxl: 120 }, icon: _jsx(AntDesignOutlined, {}, void 0) }, void 0) }), void 0), _jsx(Menus, {}, void 0)] }), void 0));
};
