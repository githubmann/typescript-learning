/* 
对模块使用/// <reference>
一个常见的错误是使用/// <reference>引用模块文件，应该使用import。 
要理解这之间的区别，我们首先应该弄清编译器是如何根据 import路径（例如，
import x from "...";或import x = require("...")里面的...，等等）来
定位模块的类型信息的。
编译器首先尝试去查找相应路径下的.ts，.tsx再或者.d.ts。 如果这些文件都找不到，
编译器会查找 外部模块声明。 回想一下，它们是在 .d.ts文件里声明的。
 */
declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
}

declare module "path" {
    export function normalize(p: string): string;
    export function join(...path:any[]): string
    export let sep: string;
}