// 引入vue
import Vue from './node_modules/vue/dist/vue';
// 引入主体组件
import App from './App.js';
// 引入相关子组件
import List from './List.js';
import Add from './Add.js';
import Del from './Del.js';
import Edit from './Edit.js';

Vue.component('list',List);
Vue.component('add',Add);
Vue.component('my-del',Del);
Vue.component('my-edit',Edit);
// 启动
new Vue({
    el : '#app',
    render : c => c (App)
})