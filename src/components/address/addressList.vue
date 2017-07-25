<template>
	<transition name="slideRight">
	        <div v-show="showBool" class="addressList" @click="hide">1</div>
	</transition>
</template>
<script>
   
   export default {
  	 
	 data() {
       return {
          showBool:false
       };
    },
     mounted(){
     	
     	
     },
     methods:{
      	show(){
      		this.showBool=true;
      	},
      	hide(){
      		this.showBool=false;
      	}
     },
     components:{
     	
     }
 }
   
</script>

<style>
	
	.addressList{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0,0,0,.8);
		z-index: 100;
	}
	
</style>
