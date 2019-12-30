import library from './library';

 export default class MsgCode {
  /**
   * @param
   *  判断是否是字符串类型
  */
  private isStr(code) {
    if (typeof code === 'string' && code.constructor === String) {
      return true;
    }
    return false;
  }
  /**
   * @param
   *  判断是否是字符串类型
  */
 private isArray(code) {
  if (Array.isArray(code)) {
    return true
  }
  return false;
}
  /**
   * @param
   *  code 通过code码查找对应的message
  */
  public getMsg(code: string | Array<string>): string {
    let msg: string;
    for (const key in library) {
      if (library.hasOwnProperty(key)) {
        // 传入了一个code
        const isStr = this.isStr(code);
        if (isStr) {
          if (code === key) {
            msg = library[key];
            return msg;
          }
        }
        // 传入了Array<string>数组类型的code
        const isArray = this.isArray(code);
        if (this.isArray(code)) {

        }
      }
    }
    return msg;
  }
  public insert() {
    return '';
  }
 }