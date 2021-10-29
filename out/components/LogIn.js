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
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import styles from '../css/Login.module.css';
export var LogIn = function (props) {
    return (_jsx("div", __assign({ className: styles.loginContainer }, { children: _jsxs(Form, __assign({ onFinish: function () {
                props.user.init();
            } }, { children: [_jsxs("div", __assign({ className: styles.login }, { children: [_jsx(Form.Item, __assign({ name: "username", rules: [
                                {
                                    required: true,
                                    message: 'Please input your username!'
                                }
                            ] }, { children: _jsx(Input, { maxLength: 100, placeholder: "\u7528\u6237\u540D", prefix: _jsx(UserOutlined, {}, void 0), size: "large" }, void 0) }), void 0), _jsx("p", __assign({ style: { margin: '6px 0', display: 'block' } }, { children: "\u00A0" }), void 0), _jsx(Form.Item, __assign({ name: "password", rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!'
                                }
                            ] }, { children: _jsx(Input.Password, { maxLength: 100, placeholder: "\u5BC6\u7801", prefix: _jsx(LockOutlined, {}, void 0), size: "large" }, void 0) }), void 0)] }), void 0), _jsxs("div", __assign({ className: styles.submit }, { children: [_jsx(Form.Item, __assign({ name: "remember", valuePropName: "checked" }, { children: _jsx(Checkbox, { children: "Remember me" }, void 0) }), void 0), _jsx(Form.Item, __assign({ style: { justifyContent: 'center' }, wrapperCol: { span: 16 } }, { children: _jsx("div", __assign({ style: {
                                    display: 'flex',
                                    justifyContent: 'center'
                                } }, { children: _jsx(Button, __assign({ htmlType: "submit", style: { width: '80px', height: '40px' }, type: "primary" }, { children: "\u767B\u5F55" }), void 0) }), void 0) }), void 0)] }), void 0)] }), void 0) }), void 0));
};
