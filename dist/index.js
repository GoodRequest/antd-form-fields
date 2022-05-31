"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleField = exports.TimeRangeField = exports.TimeField = exports.TextareaField = exports.SwitchField = exports.SelectField = exports.RadioGroupField = exports.InputPasswordField = exports.InputNumberField = exports.InputMaskedField = exports.InputField = exports.ImgUploadField = exports.FileUploadField = exports.DateRangePickerField = exports.DateRangeField = exports.DateField = exports.CheckboxGroupField = exports.CheckboxField = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
const isBetween_1 = __importDefault(require("dayjs/plugin/isBetween"));
const minMax_1 = __importDefault(require("dayjs/plugin/minMax"));
// cypress commands
const cypressCommands_1 = require("./commands/cypressCommands");
// dayjs extended plugins
dayjs_1.default.extend(isBetween_1.default);
dayjs_1.default.extend(utc_1.default);
dayjs_1.default.extend(timezone_1.default);
dayjs_1.default.extend(minMax_1.default);
var CheckboxField_1 = require("./atoms/CheckboxField");
Object.defineProperty(exports, "CheckboxField", { enumerable: true, get: function () { return __importDefault(CheckboxField_1).default; } });
var CheckboxGroupField_1 = require("./atoms/CheckboxGroupField");
Object.defineProperty(exports, "CheckboxGroupField", { enumerable: true, get: function () { return __importDefault(CheckboxGroupField_1).default; } });
var DateField_1 = require("./atoms/DateField");
Object.defineProperty(exports, "DateField", { enumerable: true, get: function () { return __importDefault(DateField_1).default; } });
var DateRangeField_1 = require("./atoms/DateRangeField");
Object.defineProperty(exports, "DateRangeField", { enumerable: true, get: function () { return __importDefault(DateRangeField_1).default; } });
var DateRangePickerField_1 = require("./atoms/DateRangePickerField");
Object.defineProperty(exports, "DateRangePickerField", { enumerable: true, get: function () { return __importDefault(DateRangePickerField_1).default; } });
var FileUploadField_1 = require("./atoms/FileUploadField");
Object.defineProperty(exports, "FileUploadField", { enumerable: true, get: function () { return __importDefault(FileUploadField_1).default; } });
var ImgUploadField_1 = require("./atoms/ImgUploadField");
Object.defineProperty(exports, "ImgUploadField", { enumerable: true, get: function () { return __importDefault(ImgUploadField_1).default; } });
var InputField_1 = require("./atoms/InputField");
Object.defineProperty(exports, "InputField", { enumerable: true, get: function () { return __importDefault(InputField_1).default; } });
var InputMaskedField_1 = require("./atoms/InputMaskedField");
Object.defineProperty(exports, "InputMaskedField", { enumerable: true, get: function () { return __importDefault(InputMaskedField_1).default; } });
var InputNumberField_1 = require("./atoms/InputNumberField");
Object.defineProperty(exports, "InputNumberField", { enumerable: true, get: function () { return __importDefault(InputNumberField_1).default; } });
var InputPasswordField_1 = require("./atoms/InputPasswordField");
Object.defineProperty(exports, "InputPasswordField", { enumerable: true, get: function () { return __importDefault(InputPasswordField_1).default; } });
var RadioGroupField_1 = require("./atoms/RadioGroupField");
Object.defineProperty(exports, "RadioGroupField", { enumerable: true, get: function () { return __importDefault(RadioGroupField_1).default; } });
var SelectField_1 = require("./atoms/SelectField");
Object.defineProperty(exports, "SelectField", { enumerable: true, get: function () { return __importDefault(SelectField_1).default; } });
var SwitchField_1 = require("./atoms/SwitchField");
Object.defineProperty(exports, "SwitchField", { enumerable: true, get: function () { return __importDefault(SwitchField_1).default; } });
var TextareaField_1 = require("./atoms/TextareaField");
Object.defineProperty(exports, "TextareaField", { enumerable: true, get: function () { return __importDefault(TextareaField_1).default; } });
var TimeField_1 = require("./atoms/TimeField");
Object.defineProperty(exports, "TimeField", { enumerable: true, get: function () { return __importDefault(TimeField_1).default; } });
var TimeRangeField_1 = require("./atoms/TimeRangeField");
Object.defineProperty(exports, "TimeRangeField", { enumerable: true, get: function () { return __importDefault(TimeRangeField_1).default; } });
var ToggleField_1 = require("./atoms/ToggleField");
Object.defineProperty(exports, "ToggleField", { enumerable: true, get: function () { return __importDefault(ToggleField_1).default; } });
// add all custom test commands for cypress
const initializeCustomCommands = () => {
    Cypress.Commands.addAll({
        apiAuth: cypressCommands_1.apiAuth,
        setInputValue: cypressCommands_1.setInputValue,
        selectOptionDropdown: cypressCommands_1.selectOptionDropdown,
        setSearchBoxValueAndSelectFirstOption: cypressCommands_1.setSearchBoxValueAndSelectFirstOption,
        clickButton: cypressCommands_1.clickButton,
        clickDeleteButtonWithConf: cypressCommands_1.clickDeleteButtonWithConf,
        uploadFile: cypressCommands_1.uploadFile,
        checkSuccessToastMessage: cypressCommands_1.checkSuccessToastMessage,
        clearDropdownSelection: cypressCommands_1.clearDropdownSelection,
        checkFirstCheckBox: cypressCommands_1.checkFirstCheckBox
    });
};
// init all commands
initializeCustomCommands();
//# sourceMappingURL=index.js.map