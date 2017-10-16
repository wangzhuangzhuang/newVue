<script type="text/javascript">
   
           import LazyLoadImg from '../../../static/js/lazy-load-img.min.js';
	const Cookie ={

		set: function (name, value, days) {

		var d = new Date;

		d.setTime(d.getTime() + 24*60*60*1000*days);

		window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();

		},

		get: function (name) {

		var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');

		return v ? v[2] : null;

		},

		delete: function (name) {

		this.set(name, '', -1);

		}
	};

	const reset = {

		LazyLoadImg:function(obj){
			 var lazyLoadImg = new LazyLoadImg({
			                    el: document.querySelector(obj),
			                    time: 300, // 设置一个检测时间间隔
			                    complete: true, //页面内所有数据图片加载完成后，是否自己销毁程序，true默认销毁，false不销毁
			                    position: { // 只要其中一个位置符合条件，都会触发加载机制
			                      top: 0, // 元素距离顶部
			                      right: 0, // 元素距离右边
			                      bottom: 0, // 元素距离下面
			                      left: 0 // 元素距离左边
			                    },
			                    before: function () { // 图片加载之前执行方法
			                    },
			                    success: function (el) { // 图片加载成功执行方法
			                      el.classList.add('success')
			                    },
			                    error: function (el) { // 图片加载失败执行方法
			                    }
			 })
		}

	};




      export default
	{
	 Cookie,
	 reset
	}

</script>