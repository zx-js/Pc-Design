/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-12 14:04:54
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-21 15:41:19
 */
// 找到components文件夹下以.vue命名的文件

import ZButton from './Button/main';
import Zloading from './Loading/main';
import Zdrag from './Drag/main';
import ZScale from './Scale/main';
import { ZTag, ZCheckTag } from './Tag/main';
import Input from './Input/main';
import ZTimeline from './Timeline/main';
import ZTimelineItem from './TimelineItem/main';
import ZTable from './Table/main';
const compontents: any[] = [ZButton, Zloading, ZTag, ZCheckTag, Input, ZTimeline, ZTimelineItem, ZTable, Zdrag, ZScale];
export { compontents };
export default compontents;
