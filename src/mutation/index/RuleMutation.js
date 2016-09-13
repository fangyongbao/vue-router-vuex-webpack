import { TOGGLE_RULE } from '../../constant/index/RuleConstant';

// 创建一个对象来保存应用启动时的初始状态
export const RuleState = {
    showRule: false
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
export const RuleMutation = {
    [TOGGLE_RULE] (state, isShow) {
        state.showRule = isShow
    }
}