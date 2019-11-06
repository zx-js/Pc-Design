/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-10-29 10:56:55
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-06 15:31:29
 */
import base from './rollup.config.base.ts';

const config = Object.assign({}, base, {
    output: {
        exports: 'named',
        name: 'mtUtil',
        file: 'dist/mt-util.min.js',
        format: 'iife',
        extend: true,
    },
});

export default config;
