<template>

	<div class="headerBox">
		<header v-if='type=="login"' class="header">
			<div class="left register box box-pack-c box-align-c">
				<a href="">注册</a>
			</div>
			<div class="right registerL box box-pack-c box-align-c ">
				<img src="../../../static/images/regin-02.png" @click='back' class="img">
			</div>
		</header>
		<header v-if='type=="details"' v-bind:style="{background:'rgba(255,255,255,'+number+')'}" class="header detailsHeader">
			<div class="left register box box-pack-c box-align-c" @click='back2'>
				<img src="../../../static/images/back-l.png" class="img">
			</div>
			<div class="right box box-pack-c box-align-c">
				<img src="https://ywdev.youngworld.com.cn/html/app/images/dom12-1.png" class="img">
			</div>
		</header>
		<header v-if='type=="graphic"' class="header">
			<div class="left register box box-pack-c box-align-c" @click='hide'>
				<img src="../../../static/images/back-l.png" class="img">
			</div>
			<h4 style="margin:0;line-height:45px" class="text-c">图文详情</h4>

		</header>
		<header v-if='type=="ClassifyDetails"' class="header ClassifyDetails active">
			<div class="left register box box-pack-c box-align-c" @click='back2'>
				<img src="../../../static/images/back-l.png" class="img">
			</div>
			<h4 style="margin:0;line-height:45px" class="text-c">{{text}}</h4>

		</header>
		<header v-if='type=="searchResult"' class="header searchResultHeader active">
			<div class="left register box box-pack-c box-align-c" @click='back2'>
				<img src="../../../static/images/back-l.png" class="img">
			</div>
			<h4 class='searchResultHeader' style="font-size: 12px;font-weight: 400;padding-left: 0;">{{text}}</h4>
		</header>
		<header v-if='type=="myOrder"' class="header ClassifyDetails active">
			<div class="left register box box-pack-c box-align-c" @click='back2'>
				<img src="../../../static/images/back-l.png" class="img">
			</div>
			<h4 style="margin:0;line-height:45px;" class="text-c">{{text}}</h4>
		</header>
	</div>
</template>
<script>
	export default {
		props: {
			type: {
				type: String
			},
			text: {
				type: String
			}
		},
		data() {
			return {
				scroll: '',
				number: 1,
				types: this.type
			};
		},
		methods: {
			menu() {
				this.scroll = window.pageYOffset;
				let H = 300;
				this.number =(this.scroll / 300);
			},
			back() {
		
				this.$destroy();
				this.$router.go(-1);
			},
			hide() {
				this.$emit('hide');
				document.documentElement.scrollTop = document.body.scrollTop =0;
			},
			back2() {
				this.$emit('hide');
				this.$router.go(-1);
			}
		},
		mounted() {
			if(this.types == 'details') {

				window.addEventListener('scroll', this.menu);

			}

		}
	};
</script>
<style lang="less">
	@import '../../assets/less/header.less';
</style>