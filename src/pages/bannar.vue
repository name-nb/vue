<template>
  <div>
    <div class="bannar">
        <mt-swipe :auto="4000">
            <mt-swipe-item  v-for="item in arr" :key='item.image'>
                <img height="100%" :src="item.image" alt="">
            </mt-swipe-item>
 
        </mt-swipe>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Vue from 'vue'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  name: 'bannar',
  data(){
      return{
          arrs:[],
          arr:{
               image:''
          }
         
      }
  },
  async created(){
    let res =await this.$ajax.gets("/bannar/getAds","")
			this.arrs=res
            this.arr=this.arrs.filter((item)=>item.image)
  }
}
</script>

<style>
.bannar{
    width: 100%;
    height: 10rem;
}
.bannar img{
    width: 100%;
}
</style>