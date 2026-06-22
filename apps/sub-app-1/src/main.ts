import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {
    renderWithQiankun,
    qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'

let app:any

const render = (container?: HTMLElement) => {
    console.log('app mount render')
    app = createApp(App)
    app
        .use(router)
        .mount(container ? container.querySelector('#app') : '#app')
}

const initQianKun = () => {
    console.log('app mount')
    renderWithQiankun({
        mount(props) {
            console.log(props,'props')
            const { container } = props
            render(container)
        },
        bootstrap() {},
        update() {},
        unmount() {
            app.unmount()
        }
    })
}
console.log('qiankunWindow.__POWERED_BY_QIANKUN__', qiankunWindow.__POWERED_BY_QIANKUN__)
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
