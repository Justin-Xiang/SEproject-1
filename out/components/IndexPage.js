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
import { Carousel } from 'antd';
import '../css/custom-custom.scss';
var contentStyle = {
    color: '#fff',
    lineHeight: '160px',
    background: '#364d79',
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};
var CustomCarousel = function () {
    return (_jsx("div", __assign({ className: "wrapper" }, { children: _jsxs(Carousel, __assign({ arrows: true, autoplay: true, autoplaySpeed: 2000, dotPosition: 'bottom', dots: true }, { children: [_jsx("div", { children: _jsx("h3", __assign({ style: contentStyle }, { children: "1" }), void 0) }, void 0), _jsx("div", { children: _jsx("h3", __assign({ style: contentStyle }, { children: "2" }), void 0) }, void 0), _jsx("div", { children: _jsx("h3", __assign({ style: contentStyle }, { children: "3" }), void 0) }, void 0), _jsx("div", { children: _jsx("h3", __assign({ style: contentStyle }, { children: "4" }), void 0) }, void 0)] }), void 0) }), void 0));
};
export var IndexPage = function () {
    return _jsx(CustomCarousel, {}, void 0);
};
