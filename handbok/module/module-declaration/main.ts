/// <reference path="./node.d.ts" />
import * as URL from 'url'
let myUrl = URL.parse("http://www.typescriptlang.org")

// 假如你不想在使用一个新模块之前花时间去编写声明，你可以采用声明的简写形式以便能够快速使用它。
// declare module "hot-new-module"