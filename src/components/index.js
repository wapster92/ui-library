import UApp from './panel/UApp.vue'
import {createPinia} from 'pinia'
//style

import '../assets/style/index.scss'

const UI = {
    install (Vue) {
        Vue.component('UApp', UApp);
        Vue.use(createPinia())
    }
}

export default UI;