/*
 * @Descripttion:
 * @version:
 * @Author: langxue
 * @Date: 2019-11-13 13:36:55
 * @LastEditors: langxue
 * @LastEditTime: 2019-11-14 10:34:09
 */

import Input from './index';


import utils from '../../packages/utils';
const Msg = new utils.MsgCode();
const msg = Msg.getMsg('WIN001');
console.log(msg);
const msg2 = Msg.getMsg([
    '111', '222'
]);

const ZInput = {
    version: '0.0.1',
    name: 'ZInput',
    install: Input
};

export { ZInput };
export default ZInput;
