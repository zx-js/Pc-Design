/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-10-29 10:54:09
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-07 17:01:22
 */
import vueComponents from './components';
import zxUtil from './packages';
import './styles/index.less'
// 注册install
const install = function(Vue: any) {
    // 工具
    Vue.prototype.$zxUtil = zxUtil;
    // 组件
    vueComponents.forEach((component) => {
        Vue.component(component.name, component);
    });
};

// 自动注册组件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default install;
