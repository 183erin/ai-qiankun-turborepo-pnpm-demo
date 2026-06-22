import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {
    renderWithQiankun,
    qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'

let app: any

const render = (container?: HTMLElement) => {
    app = createApp(App)
    app
        .use(router)
        .mount(container ? container.querySelector('#app') : '#app')
}

const initQianKun = () => {
    renderWithQiankun({
        mount(props) {
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

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
