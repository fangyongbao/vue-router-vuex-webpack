import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    //当 hashbang 值为 true 时，所有的路径都会被格式化为以 #! 开头
    hashbang: false,
    //是否使用 HTML5 history 模式
    history: false,
    //是否使用虚拟模式
    abstract: false,
    //定义路由根路径
    root: ''

})

router.redirect({
  // 重定向任意未匹配路径到 /home
  '*': '/game'
})
router.map({
    '/game': {
        name: 'game',
        component: (resolve) => {
            require(['../components/index/game/gameCom.vue'], resolve)
        }
    },
    '/shop': {
        name: 'shop', 
        component: (resolve) => {
            require(['../components/index/shop/shopCom.vue'], resolve)
        },
        //这里 userAuth 是一个自定义字段,用于用户身份验证
        userAuth: true
    }
})

/***
*全局钩子函数
***/
router.beforeEach(function (transition) {
  if (transition.to.userAuth === true) {
    // 返回一个断定会 true 或者 false 的 Promise
    //return AuthService.isLoggedIn()
    return true
  } else {
    transition.next()
  }
})

export default router
