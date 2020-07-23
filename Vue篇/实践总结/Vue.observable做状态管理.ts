/*
  👉vue 2.6 新增API => Vue.observale来应对一些简单的跨组件数据状态共享.
  
*/

import Vue from 'vue';

export interface Istore {
  navVisible: boolean,
  theme: 'special' | 'normal';
}

export const store = Vue.observable<Istore>({
  navVisible: false,
  theme: 'special'
})