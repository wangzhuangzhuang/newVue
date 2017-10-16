<template ref="as">
  <div class="good">
     <div v-show="Load">
            <LoadAnimation></LoadAnimation>
       </div>
      <headerHtml :type="type"></headerHtml>
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
      	<!-- {{$route.query}} -->
        <section class='back-f pb-10'> 
                <h4 class="sp-title pl-10 TitleStyle mb-10 pt-10">{{data.goods_name}}</h4>
                <div class="pl-10"><span  class='Presentprice'>￥{{data.app_price}}</span><del style="margin-left: 15px;" class='Originalprice'>￥{{data.market_price}}</del></div>
                <div v-if="data.general_trade == 2" class="pl-10 mt-10" style="color: #666">跨境电商综合税11.9% ：免税费</div>
                <div v-if="data.general_trade == 3" class="pl-10 mt-10" style="color: #666">进口税 ：免税费</div>
                <div style="color: #666" class="pl-10 mt-10">
               	 运费：￥{{data.freight}} (以实际结算运费价为主)
               </div>
               <div class="pl-10 mt-10" v-if='data.trip' style="color: #666">
                   <h3>{{data.trip}}</h3>
                   <div class="shipmentsImg">
                         <img v-if="data.support_channel == '中国海关'" src="../../../static/images/shipments2.png">
                         <img v-if="data.support_channel != '中国海关'" src="../../../static/images/shipments1.png">
                   </div>
                   <div class="shipmentsText">
                        <span class="text-c active" v-if="data.support_channel == '中国海关'">{{data.support_status}}</span>
                        <span class="text-c" v-if="data.support_channel == '中国海关'">{{data.support_channel}}</span>
                        <span class="text-c active" v-if="data.support_channel != '中国海关'">{{data.support_status}}</span>
                        <span class="text-c active" v-if="data.support_channel != '中国海关'">{{data.support_channel}}</span>
                        <span class="text-c">{{data.harvest_address}}</span>
                   </div>
               </div>
       </section>
       <div style="height:30px;" class="favorable box">
                <li class="box-flex box box-pack-c box-align-c">
                    <img src="../../../static/images/dom15.png" >
                    正品保证假一赔十
                </li>
                <li class="box-flex box box-pack-c box-align-c">
                   <img src="../../../static/images/dom16.png" >
                   保税仓发货
                </li>
                <li class="box-flex box box-pack-c box-align-c">
                   <img src="../../../static/images/dom17.png" >
                   支持7天退货
                </li>
       </div>  
       <div class="pt-10 pb-10 box box-pack-j  back-f mb-10" @click='graphicFn'>
            <div class="box box-align-c pl-10">
                    <span>图文详情</span>
            </div>
            <div class="box box-align-c">
                   <span class='Arrow'></span>
            </div>
       </div>
      <!--  用户评价 -->
       <div class='evaluate back-f mb-10'  >
            <h2>用户评价（{{data.evaluate_num}}）</h2>
            <div v-if="data.user_evaluation && data.user_evaluation.length >= 1">
               <section class="evaluateList" v-for="value in data.user_evaluation">
                    <header class="tuwen box box box-pack-j">
                           <div class="box box-pack-c box-align-c"><img :src="value.user_image">{{value.user_nickname}}</div>
                           <span class="goquan">{{value.evaluate_time | formatDateS}}</span>                    
                    </header>
                    <p class="pb-10">{{value.evaluate_desc}}</p>
                </section>
            </div>
            <div class="spquan" v-if="data.user_evaluation && data.user_evaluation.length >= 1"><a href="#" class="url_btn">查看全部评论</a></div>
       </div>
       <div class="evaluate mb-10 back-f">
            <h2>{{data.goods_brand?data.goods_brand.brand_mark_name:""}}</h2>
            <dl class="spBrandBox box mt-10 box-align-c">
                <dt class="brand_logo_url"><img :src="data.goods_brand?data.goods_brand.brand_logo_url:''" class="img"></dt>
                <dd class="brand_logo_brand_num">
                  <p>关注人数：<span>{{data.goods_brand?data.goods_brand.brand_num:""}}</span>&nbsp;&nbsp;商品数：
                               <span class="brand_goods_num">{{data.goods_brand?data.goods_brand.brand_goods_num:""}}</span>
                  </p>
                </dd>
            </dl>
       </div>
       <div class=' back-f'>
       	 <h4 class="h4 pl-10 pt-10">大家还买了什么</h4>
       	 <div class='o-h pl-10 pr-10'>
       	 	
       	 	  <dl class="sp-dl" v-for="val in data.everybody_buys">
       	 	     <router-link :to="'/details/'+val.goods_id" @click.native="flushCom">
       	 	  
			       	 	  	<dt>
			       	 	  		<img :src="val.goods_main_url" class="img"/>
			       	 	  	</dt>
			       	 	  	<dd>
			       	 	  		<h5 class="mt-10 mb-10">{{val.goods_name}}</h5>
			       	 	  		<p><span class="price f12">￥{{val.app_price}}</span><del class="original-price f12">￥{{val.market_price}}</del></p>
			       	 	  	</dd>
       	 	  		
       	 	  	 </router-link>
       	 	  </dl>
       	 	
       	 </div>
       	<!--   <router-link to="/address">
       	 <button>地址</button>
       	  </router-link> -->
       </div>
      <!--  <img v-for="img in imgs" :src="img" />-->
     
      </div>
      <div class='footter box'>
          <div class="box-flex pl-10 box box-align-c price f16">
            ￥{{data.app_price}}
          </div>
          <div class="goBtn text-c">
              立即购买
          </div>
      </div>
      <div>
          <graphicDetails ref='graphic'></graphicDetails>
      </div>
  </div>
   
</template>  
<script type="text/ecmascript-6">
    import headerHtml from '../header/header.vue';
    import $ from '../../../static/js/jquery.js';
    import Global from '../function/Global.vue';
    import swiper from '../../../static/js/swiper.min.js'; 
    import graphicDetails from './graphicDetails.vue';
    import LoadAnimation from '../function/LoadAnimation.vue';
    import url from '../../Api/url.js';
    import {formatDate}  from '../../common/formatDate.js';
    export default {

        data() {
            return {
                scroll: '',
                data:"",
                type:"details",
                user_id:'',
                goods_id:'',
                Load:true,
                swiper:null
            };
        },

        beforeMount(){

        },

        mounted(){
            let goods_id = this.$route.params.id;
            this.init(goods_id);
        },
        updated:function(){

        },
        methods:{

            init(goods_id){
                this.user_id =  Global.Cookie.get('user_id');
                let that = this;

                let data = {
                    'goods_id' : goods_id
                };
                if( this.user_id !=''){
                    data.user_id =  this.user_id;
                };    

                this.$http.post(url.url+"product_details",data,{emulateJSON:true}).then(
                    function (res) {
                        that.data = res.body.data;
                        that.$nextTick(function(){
                            that.swiper = new swiper('.swiper-container', {
                                autoplay: 5000,//可选选项，自动滑动
                            });
                            /*that.mySwiper.destroy(true);*/
                            $('html,body').scrollTop(0);
                            this.Load = false;
                        })
                    },function (res) {
                    // 处理失败的结果
                    }
                );
            },
            chilFn (msg) {
                alert(msg)
            },
            flushCom () {
            　  this.$router.go(0);  
            },
            graphicFn(){
                this.$refs.graphic.show(this.$route.params.id);
            },
            getStatus (urlStr) {
                var urlStrArr = urlStr.split('/')
                return urlStrArr[urlStrArr.length - 1]
            }
        },
        watch: {
            '$route' (to, from) {
                $(".swiper-wrapper").css("transform","translate3d(0px,0px,0px)");
                this.swiper.destroy(true);
                this.Load = true;
                this.init(this.$route.params.id);
                //this.init(this.getStatus(this.$route.path));
            }
        },
        filters: {
            formatDateS(time) {
                var date = new Date(time*1);
                return formatDate(date,"yyyy-MM-dd hh:mm");
            }
        },
        components: {
            headerHtml,
            graphicDetails,
            LoadAnimation
        }

    };
</script>
<style  lang='less' scoped>
    .swiperImg{
        width: 100%;
        overflow: hidden;
    }

    .swiperImg img{
        display: block;
        width: 100%;
        height: auto;
    }

    .sp-dl{
        width: 32%;
        float: left;
        margin-right: 2%;
        margin-bottom: 2%;
    }
    .sp-dl:nth-of-type(3n){
        margin-right: 0;
    }
    .sp-dl dt {
        text-align: center;
    }
    .sp-dl dt img{
        display: block;
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
    h4{
    text-align:left
    }
    .package{
        background:#FFFFFF;
        padding: 5px 0;
        border-right: none;
        border-left: none;
    }
    .footter{
        width: 100%;
        height: 45px;
        position: fixed;
        border-top: 1px solid #cccccc;
        left: 0px;
        bottom: 0px;
        background: #f8f8f8;
    }
    .sp-content{
        padding-bottom: 45px;
    }
    .goBtn{
        width: 100px;
        background: #F99800;
        line-height: 45px;
        color: #fff;
    }
    .vipBox{
        font-weight: bolder;
        font-size: 18px;
        color: red;
    }
    .imgLabel{
        display: block;
        width: 24px;
        height: 24px;
        margin-left: 10px;
    }
    .imgLabel img{
        border-radius: 100%;
    }
    .imgLabel+span{
        margin-left: 15px;
    }
    .Arrow{
        background: url('../../../static/images/Arrow.png') no-repeat right center;
        background-size: 8px auto;
        margin-right: 10px;
        padding-right: 15px;
    }
    .evaluate{
        padding: 10px;
    } 
    .shipmentsImg{
        margin-top: 10px;
        img{
            width: 2.68rem;
            margin: 0 auto;
            display: block;
        }
    }
    .shipmentsText{
        overflow: hidden;
        margin-top: 10px;
        span{
            display: block;
            float:left;
            width: 33.33%;
        }
        span.active{
            color: #ff9600;
        }
    }
    .favorable{
        img{
            display: block;
            width: 15px;
            height: auto;
            margin-right: 5px;
        }
    }
    .brand_logo_url{
        width: 60px;
        height: 60px;
    }
    .brand_logo_brand_num{
        margin-left: 20px;
    }
    .evaluateList{
        border-bottom: 1px solid #E6E6E6;
        .tuwen {
            width: 100%;
            padding: 0.09rem 0;
            -webkit-box-sizing: content-box;
            img{
                width: 0.24rem;
                height: 0.24rem;
                border-radius: 100%;
                overflow: hidden;
                margin-right:10px;
                display: block;
            }
        }
    }
    .evaluateList:last-child{
        border-bottom: none;
    }
    .spquan {
        width: 0.88rem;
        height: 0.36rem;
        text-align: center;
        line-height: 0.36rem;
        border-radius: 0.05rem;
        border: 1px solid #FFAB72;
        margin: 15px auto;
        margin-bottom: 0;
        a{color: #ff9600}
    }
</style>