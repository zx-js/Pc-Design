/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-05 16:22:07
<<<<<<< HEAD
 * @LastEditors: langxue
 * @LastEditTime: 2019-12-12 12:08:48
=======
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-12 12:18:03
>>>>>>> 8a2c33764821ae739dfe44349269a01164c4e700
 */
import Vue, { VNode, VueConstructor } from "vue";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
  interface zCompontent {
    install: VueConstructor;
    name: string;
    version: string;
  }
  interface VueConstructor
}

<<<<<<< HEAD
declare module 'vue/types/options' {
  // interface ComponentOptions<V extends Vue> {
  //   [propName: string]: any;
  // }
=======
declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    [propName: string]: any;
  }
>>>>>>> 8a2c33764821ae739dfe44349269a01164c4e700
}

declare module "vue/types/vue" {
  interface Vue {
    $Zutil: any;
  }
}
