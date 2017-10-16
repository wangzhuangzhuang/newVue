<template>
	<div>
	        <div class="CountDown">
	        	 距离活动结束
	        	 <span>{{hh}}</span>时
	        	 <span>{{ff}}</span>分
	        	 <span>{{ss}}</span>秒
	        </div>
	</div>
</template>	
<script type="text/javascript">
export default {  
                  
	      data(){
		         return {
		              
		               hh:'',
		               ff:'',
		               ss:''

		         }
	      },

	     mounted(){
	            
		
	                
	      },

	      methods:{
	           
                       CountDown(end_time,now_time){
                       
                       	    let RemainingTime  = end_time - now_time;
                       	    let that = this;
	                var dd=Math.floor(RemainingTime/84600);
		    var hh=Math.floor((RemainingTime-dd*84600)/3600);
		    var ff=Math.floor((RemainingTime-dd*84600-hh*3600)/60);
		    var ss=Math.floor((RemainingTime-dd*84600-hh*3600-ff*60));
		    that.hh = hh;
		    that.ff = ff;
		    that.ss = ss;
                       	    setInterval(function(){
                                    RemainingTime -- 
                                    var dd=Math.floor(RemainingTime/84600);
			var hh=Math.floor((RemainingTime-dd*84600)/3600);
			var ff=Math.floor((RemainingTime-dd*84600-hh*3600)/60);
			var ss=Math.floor((RemainingTime-dd*84600-hh*3600-ff*60));
			that.hh = hh;
			that.ff = ff;
			that.ss = ss;

                       	    },1000)
   
                       }

	      }, 
	     updated:function(){
	        
	           
                       
	     }
   };	
</script>
<style type="text/css">
	.CountDown span{
	    padding: 3px;
	    background: red;
	    color: #ffffff;
	    border-radius: 5px;
	    margin: 0 5px;
	}
</style>