<template>
	<div>
		
		<label @click="show"> 
			收货地址："1212121212"
		</label>
       <addressList ref="addressList">
       	
       </addressList>	   	
	</div>
</template>
<script>
 import addressList from './addressList.vue';
 export default {
  	 
	 data() {
       return {
       
       };
    },
     mounted(){
     	
     	
     },
     methods:{
      	
      	show:function(){
      		
      		this.$refs.addressList.show();
      	}
      	
     },
     components:{
     	addressList
     }
 }
	
</script>