"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const lodash_1 = require("lodash");
const classnames_1 = __importDefault(require("classnames"));
const { Item } = antd_1.Form;
const RadioGroupField = (props) => {
    const { input, label, required, options, meta: { error, touched }, className, style, direction = 'horizontal', disabled } = props;
    const radioOptions = (0, lodash_1.map)(options, (option) => {
        if (typeof option === 'string') {
            return ((0, jsx_runtime_1.jsx)(antd_1.Radio, Object.assign({ value: option }, { children: option }), option));
        }
        return ((0, jsx_runtime_1.jsxs)(antd_1.Radio, Object.assign({ className: (0, classnames_1.default)({ 'w-full': direction === 'vertical' }), value: option.value }, { children: [option.label, option.customContent ? option.customContent : null] }), `${option.value}`));
    });
    return ((0, jsx_runtime_1.jsx)(Item, Object.assign({ required: required, label: label, help: touched && error, validateStatus: error && touched ? 'error' : undefined, style: style, className: (0, classnames_1.default)(className, 'radio', { 'radio-has-error': error && touched }) }, { children: (0, jsx_runtime_1.jsx)(antd_1.Radio.Group, Object.assign({ value: input.value || [], onChange: input.onChange, className: (0, classnames_1.default)({ flex: direction === 'horizontal', block: direction === 'vertical' }), disabled: disabled }, { children: radioOptions })) })));
};
exports.default = RadioGroupField;
//# sourceMappingURL=RadioGroupField.js.map