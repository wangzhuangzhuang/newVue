<template>
	<div class="login_box">
		<headerHtml  :type=type ref="header"></headerHtml>
          <div class="logoImg">
                 <div></div>
           </div>
           <form class="MyForm box mt-30 box-pack-c vvv">
               <ul>
                  <li class="box box-pack-c box-align-c userNameLi">
                    <input type="text" class="Mytext userName" placeholder="请输入手机号" v-model='userName'>
                  </li>
                  <li class="box box-pack-c box-align-c Mypassword">
                    <input type="password" class="Mytext Mypassword" placeholder="请输入密码" v-model='Mypassword' >
                    <a href="javascript:;" class="pasBtn" id="pasBtn"></a>
                  </li>
                  <li class="loginBtn box box-pack-c box-align-c" @click='login'>登录</li>
                  <li class="forgetBtn box box-pack-c box-align-c"><a href="forgetPass.html">忘记密码</a></li>
               </ul>
         </form>
         <transition name="bounceUp">
              <div v-show="bool" style="color:#fff" class="Prompt text-c">{{PromptText}}</div>
         </transition>

	</div>
</template>	
<script type="text/ecmascript-6">
  import headerHtml from '../header/header.vue';
  import Global from '../function/Global.vue';
  import url from '../../Api/url.js';
  export default {
  	
  	 data() {
               return {
                   type:'login',
                   userName:'',
                   Mypassword:'',
                   bool:false,
                   PromptText:''
               };
      },
     mounted(){
         
     },
     methods:{
          login(){
                let userName = this.userName.trim();
                let Mypassword = this.Mypassword.trim();
                let data = {
                   user_phone:userName,
                   user_pwd:Mypassword
                };
               if(userName.length == 0 || Mypassword == 0){
                  this.bool = true;
                  this.PromptText = '请输入账号密码';
                  let that = this;
                  setTimeout(function(){
                     that.bool = false;
                  },1500)
                  return false;
               }
               let that = this;
               this.$http.post(url.url+"login",data,{emulateJSON:true}).then(
                          function (res) {
                                  let data = res.body.data;
                                  if( res.body.code == '10000'){
                                      that.$emit('loginData',data,function(){});
                                      Global.Cookie.set('id',data.user_id);
                                       var redirect = this.$route.query.redirect;
                                      //that.$router.go(-1);  
                                      that.$router.replace({path:redirect});
                                  }else{
                                  	
                                  	this.bool = true;
                  					this.PromptText = res.body.msg;
                  					setTimeout(function(){
				                     	that.bool = false;
				                    },1500)
                                  }
                                
                          },function (res) {
                          // 处理失败的结果
                          }
               );
          }
     },
     components: {
          headerHtml
     }
     
  }
</script>  
<style type="text/css">
    .MyForm .userNameLi{
      background: url(../../../static/images/regin-03.png) no-repeat 20px center;
      background-size: 16px auto;
    }
   .login_box{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: url('../../../static/images/login_back.png') no-repeat;
      background-position: center center;
      background-size: cover;
   }
   .logoImg{
    width: 100%;
    margin-top:50px;
   }
   .logoImg div{
      width: 85px;
      height: 90px;
      margin: 0 auto;
      background: url('../../../static/images/regin-04.png') no-repeat center center;
      background-size: 100% 100%;
   }
 .MyForm ul{
  width: 73.6%;
 }
   .MyForm li{
        border: 1px solid #FFF;
        border-radius: 17px;
        height: 34px;
        width: 100%;
        max-height: 50px;
        background-size: 100% 100%;
        margin-bottom:20px;
        position: relative;
        color: #fff;
   }
   .MyForm li input{
        width: 65%;
        display: block;
        height: 80%;
        border: 0;
        outline: 0;
        background: rgba(0,0,0,0);
        color: #fff;
    }
    .MyForm .loginBtn{
          border: none;
          background: rgba(255,186,0,.8);
          margin-bottom: .1rem;
          overflow: hidden;
          -webkit-box-pack: center;
          box-pack: center;
          -moz-box-pack: center;
          -ms-box-pack: center;
          -o-box-pack: center;
          color: #FFF;
          font-size: .2rem;
    }
    .MyForm .forgetBtn{
          background: 0;
          border: 0;
          -webkit-box-align: center;
          box-align: center;
          -moz-box-align: center;
          -ms-box-align: center;
          -o-box-align: center;
    }
    
</style>