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
/* eslint-disable no-undef */
import React, { useContext, useEffect, useRef, useState } from 'react';
import '../css/Menu.scss';
import { level } from '../utils/store';
var SelectedContext = React.createContext({});
export var Menu = function (props) {
    var _a = useState(-1), selected = _a[0], setSelected = _a[1];
    return (_jsx(SelectedContext.Provider, __assign({ value: [selected, setSelected] }, { children: _jsx("div", { children: _jsx("ul", __assign({ className: "menu" }, { children: props.children }), void 0) }, void 0) }), void 0));
};
export var MenuItem = function (props) {
    var _a = useContext(SelectedContext), selected = _a[0], setSelected = _a[1];
    var id = useRef(Math.random());
    useEffect(function () {
        if (props.default) {
            setSelected(id.current);
        }
    }, []);
    return (_jsxs("li", __assign({ className: 'menu-item' +
            (id.current === selected ? ' menu-item-selected' : '') +
            (props.isChild ? ' menu-item-child' : ''), onClick: function () {
            setSelected(id.current);
            if (props.level) {
                level.setLevel(props.level);
            }
            var r = new Request('http://localhost:5000/', {
                method: 'POST',
                mode: 'no-cors',
                body: 'hello'
            });
            fetch(r.clone()).then(function (res) { return console.log(res.json()); });
        } }, { children: [props.icon ? (_jsx("span", __assign({ className: "menu-item-icon" }, { children: props.icon }), void 0)) : null, _jsx("a", __assign({ href: props.href }, { children: _jsx("span", __assign({ className: "menu-item-title" }, { children: props.children }), void 0) }), void 0)] }), void 0));
};
export var SubMenu = function (props) {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    return (_jsxs("li", __assign({ className: "menu-submenu-item" }, { children: [_jsxs("div", __assign({ className: "menu-submenu-item-title", onClick: function () {
                    setIsOpen(function (v) { return !v; });
                } }, { children: [props.icon ? _jsx("span", { children: props.icon }, void 0) : null, _jsx("span", __assign({ className: "menu-item-title" }, { children: props.title }), void 0), _jsx("i", { className: "menu-submenu-item-arrow" }, void 0)] }), void 0), _jsx("ul", __assign({ className: "menu-submenu", style: { display: isOpen ? 'block' : 'none' } }, { children: Array.isArray(props.children)
                    ? props.children.map(function (v) {
                        return React.cloneElement(v, { isChild: true });
                    })
                    : React.cloneElement(props.children, { isChild: true }) }), void 0)] }), void 0));
};
