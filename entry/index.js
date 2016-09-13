import Vue from 'vue'
import VueRouter from 'vue-router'

import 'common.scss'
import App from '../src/components/index/App'
import IndexRouter from '../src/routers/IndexRouter'

Vue.use(VueRouter)

IndexRouter.start(App, 'cov-app')
