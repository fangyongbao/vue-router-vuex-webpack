/***
*为什么使用getter.js, 而不是直接从 state 里读取数据？
*
*我们可能需要使用 getter 函数返回需经过计算的值（比如总数，平均值等）。
*在大型应用里，很多组件之间可以复用同一个 getter 函数。
*如果这个值的位置改变了（比如从 store.count 变成了 store.counter.value），你只需要改一个 getter 方法，而不是一堆组件
***/

//获取state中的prizeList
export function getPriceList (state) {
	return state.prizeList
}