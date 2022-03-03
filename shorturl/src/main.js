import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//......
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入复制插件
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

//rem 适配  1rem = 100px
// import 'amfe-flexible';
import '@/assets/js/rem.js';
Vue.config.productionTip = false;
Vue.use(ElementUI);

// 引入echarts
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
