import Vue from 'vue'
import Vuex from 'vuex'
import { IndexRootState, IndexRootMutation } from '../mutation/index/RootMutation';
// 告诉 vue “使用” vuex
Vue.use(Vuex)

console.log('IndexRootState:');
console.log(IndexRootState);
console.log('IndexRootMutation:');
console.log(IndexRootMutation);

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
    state: IndexRootState,
    mutations: IndexRootMutation,
    strict: true
})
