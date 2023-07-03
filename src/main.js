import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router';
import Antd from 'ant-design-vue'
import VueViewer, {directive as viewerDirective} from 'v-viewer';
import 'viewerjs/dist/viewer.css';
import 'ant-design-vue/dist/antd.css' // or 'ant-design-vue/dist/antd.less'

Vue.use(Antd)
Vue.use(VueViewer, {
    //自定义下方显示按钮，不起作用就很烦tmd
    /**
     *  数字含义:
     *  0 or false: hide the navbar
     1 or true: show the navbar
     2: show the navbar only when the screen width is greater than 768 pixels
     3: show the navbar only when the screen width is greater than 992 pixels
     4: show the navbar only when the screen width is greater than 1200 pixels
     */
    toolbar: {
        zoomIn: 0,
        zoomOut: 0,
        oneToOne: 0,
        reset: 0,
        prev: {
            show: 4,
            size: 'large',
        },
        play: 0,
        next: {
            show: 4,
            size: 'large',
        },
        rotateLeft: 0,
        rotateRight: 0,
        flipHorizontal: 0,
        flipVertical: 0,
    },
    zoomRatio: 0.3 // 缩放比率 默认是0.1
})

Vue.directive('viewer', viewerDirective({
    debug: true
}));

require('./mock/mock.js')

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
