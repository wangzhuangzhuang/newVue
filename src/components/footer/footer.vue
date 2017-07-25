<template>
 <div class="footer">
   <ul>
   	 <li>
   	 	 <router-link to="/show">
   	 	首页
         </router-link>
   	 </li>
   	 <li>
   	 	<router-link to="/my">
   	 	我的
   	 	</router-link>
   	 </li>
   	 <li>
   	 	<router-link to="/details">
   	 	详情
   	    </router-link>
   	 </li>
   	 <li>
   	 	<router-link to="/set">
   	 	设置
   	    </router-link>
   	 </li>
   </ul>
 </div>
</template> 
<style>
	.footer{
		position: fixed;
		left: 0;
	    bottom: 0;
	    width: 100%;
	    height: 55px;
	    background:#CCCCCC;
	}
	.footer ul{
		width: 100%;
		height: 100%;
		display: -webkit-box;
	}
	.footer ul li{
		-webkit-box-flex: 1;
		display: -webkit-box;
	    -webkit-box-pack: center;
	    -webkit-box-align: center;
	}
	
</style>