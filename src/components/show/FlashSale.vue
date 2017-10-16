<template>
	<div>
	     <h4>限时特卖</h4>
	     <div style="text-align:center">
                             <CountDown ref='CountDown'></CountDown>
                 </div>
	     <div class="box">
	     	<div class="box-flex"  v-for='v in sy_xsqg.xsqg'>
	     		<dl>
	     			<dt>
	     				<img :src="v.goods_main_url">
	     			</dt>
	     			<dd>
	     				<p>{{v.goods_name}}</p>
	     				<p>
	     					<span>￥{{v.activity_price}}</span>
	     					<span style="color:red;font-size:10px">￥{{v.app_price}}</span>
	     				</p>
	     			</dd>
	     		</dl>
	     	</div>
	     </div>
	</div>
</template>
<script type="text/javascript">
   import CountDown from '../function/CountDown.vue';
   export default {  
                  props: ['sy_xsqg'],
	      data(){
		         return {
		               data:'',
		               sy_xsqgs:this.sy_xsqg
		         }
	      },

	     mounted(){
	                 
                          
	                console.log(this.sy_xsqgs)
	      },

	       methods:{
	                 
	                 FlashSale(data){
	                 	this.data = data;
	                 	this.$refs.CountDown.CountDown(this.data.end_time,this.data.now_time);

	                 }
	        }, 

	        updated:function(){
	            console.log(this.sy_xsqgs)
	            

	        },
	         components: {
                            CountDown
                    }
	     

   };
</script>
<style type="text/css">
     img{
     	display: block;
     	width: 100%;
     	height: auto;
     }
     h4{
     	text-align: center;
     	line-height: 35px;
     };
     dt{
     	padding: 5px;
     }
     dd{
     	text-align: center;
     }
     dd p {
     	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
     }
</style>