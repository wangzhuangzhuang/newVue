<template>
 <div class="footer">
   <ul class="box">
   	 <li class='box-flex box box-pack-c box-align-c' :class='type == 1? "active" : "" '>
         	 <router-link to="/show">
         	         <img src="../../../static/imgs/showlcon.png">
                           <img src="../../../static/imgs/showUnselected Icon.png">
                          <label>首页</label>
                    </router-link>
   	 </li>
          <li class="box-flex box box-pack-c box-align-c" :class='type == 2? "active" : "" '>
          <router-link to="/classify">
                           <img src="../../../static/imgs/classificationlcon.png">
                           <img src='../../../static/imgs/classificationUnselectedlcon.png' height="39" width="39">
                           <label>分类</label>
                </router-link>
          </li>
   	 <li class="box-flex box box-pack-c box-align-c" :class='type == 3? "active" : "" '>
   	 	  <router-link to="/my">
                           <img src="../../../static/imgs/mylcon.png">
                           <img src="../../../static/imgs/myUnselectedlcon.png">
   	 	         <label>我的</label>
   	 	  </router-link>
   	 </li>
   </ul>
 </div>
</template> 
<script type="text/javascript">
     export default {  
                  props: ['type'],
                  data(){
                        return {
                            
                        }
                  }

     };
</script>
<style>
	.footer{
		position: fixed;
		left: 0;
	         bottom: 0;
	         width: 100%;
	         height:49px;
	         background:#FFFFFF;
                  z-index: 9999;
                  border-top: 1px solid #e6e6e6;
	}
	.footer ul{
		width: 100%;
		height: 100%;
	}
        .footer ul img{
            width: 18px;
            display: block;
            height: auto;
            margin-left: 4px;
            margin-top: 4px;
            margin-bottom: 4px;
        }
        .footer ul label{
         margin: 0;
         font-weight: 400;
         font-size: 12px;
         color: #000;
        }
        .footer ul li img:first-child{
             display: none;
        }
        .footer ul li.active img:first-child{
             display: block;
        }
        .footer ul li.active img:nth-of-type(2){
             display: none;
        }
        .footer ul li.active label{
           color: #fb9600;
        }
</style>