<template>
<div class="m-game">
  <rule-com></rule-com>
  <div class="m-turn">
    <div class="inner"></div>
    <div class="arrow" @click="beginGame()"></div>
  </div>
  <p class="bP">
    <span class="rule" @click="showRule()">活动规则</span>
  </p>
</div>
</template>

<script>
import Vue from 'vue'
import $ from 'jquery'
import ruleCom from './ruleCom'
import { setPrizeList } from '../../../action/index/GameAction'
import { getPriceList } from '../../../getter/index/GameGetter';
import { toggleRule } from '../../../action/index/RuleAction'

export default {
    data () {
      return {
        title: 'dsfsdssdtgdrretre'
      }
    },

    vuex: {
          // getter 函数将会把仓库的 `store.state.prizeList` 绑定为组件的 `this.prizeList`
          getters: {
              prizeList: getPriceList
          },
          actions: {
              setPrizeList,
              toggleRule
          }
    },

    components: {
        ruleCom
    },

    methods: {
        beginGame: function(){
            var prizeList = [{
                id: 1,
                name: '英超精选抵扣优惠券'
            },{
                id: 2,
                name: '英超精选三期'
            }];
            this.setPrizeList(prizeList)
            console.log(this);
        },

        showRule: function(){
            this.toggleRule(true);
            console.log(this);
        }
    },

    ready: function(){
      console.log('gameCom:');
      console.log(this);
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.m-game{
  height: 100%; background:url(../../../assets/images/bg.jpg) no-repeat top center;background-size:100% auto;background-color: #4B3A5C;position: relative;
  .bP{
    padding:10px; position: absolute;bottom:0;left:0;width:100%;box-sizing: border-box;color: #fff; font-size: 0.24rem; color: #EF7961;
    .price{
      float: right; 
    }
  }
}
.m-turn{
  width: 5.72rem;height: 5.82rem; background:url(../../../assets/images/turnBg1.png) no-repeat center;background-size:100% 100%;left:50%;top:3.28rem;position: absolute;margin-left: -2.86rem;
  .inner, .arrow{
    width: 100%;height: 100%; background:url(../../../assets/images/pan.png) no-repeat center;background-size:100% 100%;position: absolute;left:0;top:0;
  }
  .arrow{
    z-index:2; background-image: url(../../../assets/images/arrow.png);
  }
}
</style>