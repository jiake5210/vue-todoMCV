// 导入一个计算器的模块
// const Cal = require('./cal.js'); // module.exports = {};

// ES6导入 -> 默认导出 
//import Cal from './cal.js'; // export default {}
// 声明式导入导出（必须确认声明的名称）
// import { Cal,num1 } from './cal.js'; // 导出export const num1 = 2;
//                                      // var Cal = {}; export { Cal }
// console.log(Cal.add(5,8))
// console.log(num1);

import * as Obj from './cal.js';
console.log(Obj)