 


var  url = '';
if (process.env.NODE_ENV == 'development') {
           url =  'https://ywapi.youngworld.com.cn/server.php/';
}else if(process.env.NODE_ENV == 'production'){
	url = 'https://ywapi.youngworld.com.cn/server.php/';
	// baseUrl = 'http://cangdu.org:8001';
}
export default
	{
	 url
	}