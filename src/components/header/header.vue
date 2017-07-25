<template>
 <div class="header" v-bind:style="{opacity:number}">
    <div class="left"></div>
      {{text}}
    <div class="right"></div>
 </div>
</template>  
<script>
 export default {
    props:  {
      text: {
        type: String
      }
    },
    data() {
       return {
          scroll: '',
          number:1
       };
    },
    methods: {
       menu() {
        this.scroll = document.body.scrollTop;
        let H = 300;
        this.number =1-(this.scroll/300);
       
       }
    },
    mounted() {
      window.addEventListener('scroll', this.menu);
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
   .header{
   	  width: 100%;
   	  height: 45px;
   	  background: red;
   	  position:fixed;
   	  top:0;
   	  left: 0;
      line-height: 45px;
      text-align: center;
      z-index: 9999999
   }
   .left,.right{
      width: 45px;
      height: 45px;
      background: #000;
      float:left;
   }
   .right{
    float:right;
    background: #686868;
   }
</style>