import library from "./library";
import $util from "../index";

export default class MsgCode {
  private getLib = (code: any) => {
    let msg: string;
    for (const key in library) {
      msg = code + library[code];
    }
    return msg;
  };

  /**
   * 用户自定义传入error code和 error mesage
   */
  private insert = ({ code, message }): string => {
    let msg: string = "";
    const codeType = $util.dataType(code);
    const messageType = $util.dataType(message);
    if (codeType === "string" && messageType === "string") {
      msg = code + message;
    } else if (codeType === "array") {
      for (let i = 0; i < code.length; i++) {
        if ($util.dataType(code[i]) === "string" && $util.dataType(message[i]) === "string") {
          const ss = code[i] + "," + message[i] + ";";
          msg += ss;
        } else {
          console.warn(`${code[i]}此类型无法使用`);
          continue;
        }
      }
    } else {
      console.warn(`${code}或${message}此类型无法使用`);
    }
    return msg;
  };

  /**
   * @param
   *  code 通过code码查找对应的message
   */
  public getMsg = (code: any): string => {
    console.log(code);
    let msg: string;
    const type = $util.dataType(code);
    if (type === "string") {
      msg = this.getLib(code);
    } else if (type === "array") {
      for (let i = 0; i < code.length; i++) {
        const item = code[i];
        if ($util.dataType(item) === "string") {
          msg = this.getLib(item);
        } else {
          console.warn(`${item} 此类型无法使用`);
          continue;
        }
      }
    } else if (type === "object") {
      msg = this.insert(code);
    } else {
      console.warn(`${code} 此类型无法使用`);
    }
    return msg;
  };
}
