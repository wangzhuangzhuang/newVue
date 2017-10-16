<template>
  <div>
     <keep-alive>
     <!-- <router-view :datas="datas" @upup="change" ref="chil"></router-view>-->
     <transition name="fade">
     	  <router-view v-on:loginData="loginData" :data="data"></router-view>
     </transition>	
     
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
    @import './assets/less/base.less';
</style>
