<template>
    <div class="swiper-container">
                    <div class="swiper-wrapper">
                    
                           <div class="swiper-slide"  v-for="v in bannner">
                                   <img  :data-src="v.banner_img" class="lazy img" src='../../../static/images/defaultBanner.png'>
                           </div>      

                    </div>
          </div>
</template> 
<script type="text/ecmascript-6">
    import swiper from '../../../static/js/swiper.min.js'; 
   export default {  
      props: ['bannner'],
      data(){
         return {
             bannners: this.bannner
         }
      },
     mounted(){
            
         
                  let mySwiper = new swiper('.swiper-container', {
                           autoplay: 5000,//可选选项，自动滑动
                     });
                    
                
        },
        methods:{
          select(){
              
              
          }
        }, 
        updated:function(){
            

    },
     

   };

</script>
<style type="text/css">
      .swiper-container img{
           display: block;
           width: 100%;
           height: auto;
      }

</style>