/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-07 17:07:51
 * @LastEditors: wpp
 * @LastEditTime: 2019-11-18 09:38:44
 */
import loaidng from './loading';
import drag from './drag';
const directives = [loaidng, drag];
export default {
    install: (Vue: any) => {
        directives.forEach((item) => {
            item.install(Vue);
        });
    }
};
