import 'cypress-file-upload';
import 'cypress-localstorage-commands';
export declare const apiAuth: (email: string, password: string, url: string) => void;
export declare const setInputValue: (form: string, key: string, value: string, clear?: boolean) => void;
export declare const selectOptionDropdown: (form: string, key: string, value?: string) => void;
export declare const setSearchBoxValueAndSelectFirstOption: (key: string, value: string, selectListKey: string, form?: string, googleGeocoding?: boolean, clear?: boolean) => void;
export declare const clickButton: (key: string, form?: string, switchBtn?: boolean) => void;
export declare const clickDeleteButtonWithConf: (form?: string, key?: string) => void;
export declare const uploadFile: (key: string, filePath: string, form?: string) => void;
export declare const checkSuccessToastMessage: () => void;
export declare const clearDropdownSelection: (fieldName: string) => void;
export declare const checkFirstCheckBox: (key: string, form?: string) => void;
declare const initializeCustomCommands: () => void;
export default initializeCustomCommands;
