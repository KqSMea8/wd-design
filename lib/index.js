'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _buttonPlus = require('./button-plus');

Object.defineProperty(exports, 'ButtonPlus', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_buttonPlus)['default'];
    }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
var ENV = process.env.NODE_ENV;
if (ENV !== 'production' && ENV !== 'test' && typeof console !== 'undefined' && console.warn && typeof window !== 'undefined') {
    console.warn('You are using a whole package of antd, ' + 'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.');
}
/* @remove-on-es-build-end */