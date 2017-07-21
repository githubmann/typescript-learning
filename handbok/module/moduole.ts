import {StringValidator} from './Validater.interface'
export const numberRegexp = /^[0-9]+$/

// 注意如果使用Validator.d.ts引入的话，会报错，因为声明文件不可作为接口引用
class ZipCodeValidator implements StringValidator{
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s)
  }
}

export { ZipCodeValidator } // 导出
export { ZipCodeValidator as mainValidator}
