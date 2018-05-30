var Vue = require('./node_modules/vue/dist/vue.js')
var App = require('./App.js');
var Add = require('./Add.js');


// 依赖Add.js
Vue.component('add',Add);
new Vue({
    el: '#app',
    render: c => c(App)
});