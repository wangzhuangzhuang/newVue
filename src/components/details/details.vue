<template ref="as">
  <div class="good">
      <headerHtml :text="text"></headerHtml>
      <div class="swiperImg">
          <div class="swiper-container">
              <div class="swiper-wrapper">
              <div class="swiper-slide"  v-for="food in data.goods_photo">
                  <img :src="food.goods_main_url" >
                </div>
               
              </div>
          </div>
      </div>
      <div class="sp-content">
      	{{$route.query}}
        <h4 class="sp-title">{{data.goods_name}}</h4>
        <div><span style="color: red;">￥{{data.app_price}}</span><del style="margin-left: 15px;">{{data.market_price}}</del></div>
       
       <div style="margin-top: 10px;">
       	<span style="color: red;">VIP:</span>
       	<router-link to="/login">
                  <span style="padding: 5px 8px; background: red;color: #FFFFFF"> 登录</span>
        </router-link>
       </div>
       <div style="color: #C0C0C0;margin-top: 10px;">
       	 运费：{{data.freight}} (以实际结算运费价为主)
       </div>
       <div>
       	 <h4>大家还买了什么</h4>
       	 <div>
       	 	
       	 	  <dl class="sp-dl" v-for="val in data.everybody_buys">
       	 	     <router-link :to="'/details/'+val.goods_id" @click.native="flushCom">
       	 	  
			       	 	  	<dt>
			       	 	  		<img :src="val.goods_main_url" />
			       	 	  	</dt>
			       	 	  	<dd>
			       	 	  		<h5>{{val.goods_name}}</h5>
			       	 	  		<p>￥{{val.app_price}}<del>￥{{val.market_price}}</del></p>
			       	 	  	</dd>
       	 	  		
       	 	  	 </router-link>
       	 	  </dl>
       	 	
       	 </div>
       	  <router-link to="/address">
       	 <button>地址</button>
       	  </router-link>
       </div>
      <!--  <img v-for="img in imgs" :src="img" />-->
     
      </div>
      <footerHTML></footerHTML>
  </div>
  
</template>  
<script type="text/ecmascript-6">
 import headerHtml from '../header/header.vue';
 import footerHTML from '../footer/footer.vue';
 import swiper from '../../../static/js/swiper.min.js'; 
  export default {
  	/* props:['datas'],*/
  	props:['imgs'],
    data() {
       return {
          scroll: '',
          data:"",
          text:"首页"
       };
    },
    beforeMount(){
    // console.log(this.$el) 
    },
    
    mounted(){
  
     let that = this;
     let good_id = this.$route.params.id;
     this.$http.post("https://ywapi.youngworld.com.cn/server.php/product_details",{goods_id:good_id},{emulateJSON:true}).then(
            function (res) {
           
              that.data = res.body.data;
		          that.$nextTick(function(){
		            let mySwiper = new swiper('.swiper-container', {
		                     autoplay: 5000,//可选选项，自动滑动
		               })
		          })
            },function (res) {
            // 处理失败的结果
            }
        );
        
        
        	
        
        	
        
      /*let that = this;
      $.ajax({
        url:"https://ywapi.youngworld.com.cn/server.php/product_details",
        type:"post",
        data:{
          goods_id:605
        },
        dataType:"json",
        success:function(e){
          
        }
      });*/
     
      
    },
    updated:function(){
    	      
    },
    methods:{
	      chilFn (msg) {
	　　　　     alert(msg)
	　　      },
				flushCom () {
					　this.$router.go(0);  
				}
    },
    components: {
     headerHtml,
     footerHTML
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "/static/css/swiper.min.css";
    @import "/static/css/bootstrap.min.css";
    
   .good{
   	  height: 1000px;
   }
   .swiperImg{
    width: 100%;
    padding-top: 45px;
    overflow: hidden;
   }
   .swiperImg img{
        display: block;
        width: 100%;
        height: auto;
   }
   .sp-content{
   	padding: 0 10px;
   }
   .sp-dl{
   	    width: 33.33%;
        float: left;
   }
   .sp-dl dt {
    text-align: center;
}
.sp-dl dt img{
	    width: 74px;
    height: 74px;
    display: block;
    margin: 0 auto;
}
.sp-dl dd {
    width: 80%;
    margin: 0 auto;
}
.sp-dl dd h5{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    font-size: 14px;
}
.sp-dl dd p{
	font-size: 14px;
}
</style>