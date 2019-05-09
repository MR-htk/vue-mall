// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#app',//  vue默认初始化监听使用的el,可以使用$mount达到一样效果，见【1】
  router,
  /* components: { App },  // 【2】相同效果
  template: '<App/>' */
  render: function (h) { //  【2】
    return h(App)
  }
  // render: h => h(App)   //  【2】
}).$mount('#app')// 【1】
