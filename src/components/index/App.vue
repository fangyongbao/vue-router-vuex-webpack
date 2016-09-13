<template>
    <div id="app" class="g-body">
        <header-com></header-com>
        <div class="g-main">
            <router-view keep-alive></router-view>
        </div>
    </div>
</template>
<script>
import headerCom from '../common/headerCom'
import IndexStore from '../../store/IndexStore'

export default {
    // 在根组件加入 store，让它的子组件和 store 连接
    store: IndexStore,

    components: {
        headerCom
    }
}
</script>
<style lang="sass">
html,
body {
    height: 100%;
}

.g-body {
    height: 100%;
    position: relative;
    overflow: hidden;
    .g-main {
        position: absolute;
        top: 44px;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
    }
}
</style>
