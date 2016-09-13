import { SET_PRIZE_LIST } from '../../constant/index/GameConstant';

// 创建一个对象来保存应用启动时的初始状态
export const GameState = {
    prizeList: [{
    	id: 1,
    	name: 'test'
    }]
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
export const GameMutation = {
    [SET_PRIZE_LIST] (state, prizeList) {
        state.prizeList = prizeList
    }
}