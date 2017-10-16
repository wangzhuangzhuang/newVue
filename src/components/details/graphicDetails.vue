<template>

     <transition name="fade">

	     <div class='graphic' v-show='bool'>
	     	 
	             <headerHtml :type="type" v-on:hide="hide"></headerHtml> 
 		<div class="graphicImg" v-html='dataImg'>
 		</div>	
	     </div>

      </transition>	     

</template>

<script type="text/javascript">
      import headerHtml from '../header/header.vue';
      export default {
  
    data() {
       return {
          type:"graphic",
          bool:false,
          dataImg:""
       };
    },
    beforeMount(){
    },
    
    mounted(){
        
    },
    updated:function(){
    	      
    },
    methods:{
       
          show(goods_id){
          	    this.bool = true;
          	    this.$http.post("https://ywapi.youngworld.com.cn/server.php/list_twxq",{'goods_id':goods_id},{emulateJSON:true}).then(
	            function (res) {
	                   this.dataImg = res.body.data[0].goods_grapic_contents
	            },function (res) {
	            // 处理失败的结果
	            }
	    );
          },
          hide(){
                    	   this.bool = false;
          }
  
    },
  
    components: {
     headerHtml
    }
  };

</script>

<style type="text/css">

      .graphic{
      	position: absolute;
      	background: #fff;
      	z-index: 99999999999;
      	top: 0;
      	bottom: 0;
      	left: 0;
      	right: 0;
      }
      .graphicImg{
      	margin-top: 45px;
      }
    .graphicImg img{
    	width: 100%;
    	height: auto;
    	display: block;
    }
    .graphicImg p{
    	margin: 0;
    }
</style>	