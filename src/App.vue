<template>
  <div>
     <keep-alive>
     <!-- <router-view :datas="datas" @upup="change" ref="chil"></router-view>-->
     <transition name="fade">
     	  <router-view :imgs="imgs"></router-view>
     </transition>	
     
    </keep-alive>
  </div>
</template>
<script type="text/ecmascript-6">
	 export default {
	 	 data(){
	 	 	/*return {
          datas:123,
          that:this
       };*/
      return {
      	
      	imgs:['../../../static/images/1.png','../../../static/images/2.png']
      	
      }
	 	 },
	 	  mounted(){
	 	 
	 	  	 /*this.$refs.chil.chilFn(1);*/
	 	  },
	 	 methods: {
			  /*  change(msg) {
			    	 this.datas = msg;
			    	
			    }*/
     }
	 }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "/static/css/base.css";
    @import "/static/css/reset.css";
    @import '../node_modules/vue2-animate/dist/vue2-animate.css';
</style>
