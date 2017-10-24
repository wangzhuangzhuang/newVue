<template>
  <div>
     <keep-alive>
     <!-- <router-view :datas="datas" @upup="change" ref="chil"></router-view>-->
    <!-- <transition name="fade">过度动画-->
     	  <router-view v-on:loginData="loginData" :data="data"></router-view>
     <!--</transition>	-->
     
    </keep-alive>
  </div>
</template>
<script type="text/ecmascript-6">
	 export default {
	 	 data(){
	 	 	return {
          data:{
            
          }
       };
      return {
      	
      	
      	
      }
	 	 },
	 	  mounted(){
	 	   
	 	  	// this.$refs.chil.chilFn(1);
	 	  },
	 	 methods: {
			   loginData(datas,fn){
           var name = datas.name;
           if(datas.data){
              this.data[name] =  datas.data;
           }
			    	
            fn(this.data[name]);
			   }
     }
	 }
</script>
<style lang='less'>
    
    @import '../static/css/swiper.min.css';
    @import '../static/css/base.css';
</style>
