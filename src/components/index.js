import UApp from './panel/UApp.vue'

//style

import '../assets/style/index.scss'

const UI = {
    install (Vue) {
        Vue.component('UApp', UApp);
    
    }
}

export default UI;