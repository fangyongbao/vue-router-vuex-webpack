<template>
    <div class="m-header">
      <div class="menu">
        <div class="item" v-link="{ path:'/game', exact: true, activeClass:'current'}" >疯狂大转盘</div>
        <div class="item" v-link="{ path:'/shop', exact: true, activeClass:'current'}" >折扣购物</div>
        <!-- <div class="item" v-link="{ name:'shop', params: { userId: 123 }, activeClass:'current'}" >折扣购物</div> -->
      </div>  
    </div>
</template> 

<script>
export default {
  data(){
    return {
      
    }
  },
  methods: {
    
  },
  created: function(){
    
  },
  ready: function(){
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
$bcolor:#5682D9;
.m-header{
  height: 44px;position: relative;background: #2D3859;overflow: hidden;
    .menu{
      width: 220px;height: 30px;border: 1px solid $bcolor;display: table;border-radius: 4px;margin:6px auto 0;
      .item{
        display: table-cell;width: 50%;color: $bcolor;vertical-align:middle;text-align: center;font-size: 14px;
        &:first-child{
          border-right: 1px solid $bcolor;}
        &.current{
          background: $bcolor;color: #fff;}
      }
  }
}
</style>