import App from './App';
import details from './components/details/details.vue';
import login from './components/login/login.vue';
import my from './components/my/my.vue';
import show from './components/show/show.vue';
import set from './components/set/set.vue';
import address from './components/address/address.vue';
const routers = [
  {
    path: '/',
    name: 'index',
    component: App,
    children:[
       { 
	　　　　  path: '/', 
	         name:"details",
	         redirect:"/details",
	 　　　   component: details 
　　     },
       { 
	　　　　  path: '/details', 
	         name:"details",
	 　　　   component: details 
　　            },
        {
        	path: '/login',
        	name:"login", 
            component: login
        },
        {
        	path: '/show',
        	name:"show", 
            component: show
        },
        {
        	path: '/my',
        	name:"my", 
            component: my
        },
        {
        	path: '/set',
        	name:"set", 
            component: set
        },
        { 
	　　　　  path: 'details/:id', 
	         name:"details",
	 　　　   component: details 
　　     },
        { 
	　　　　  path: '/address', 
	         name:"address",
	 　　　    component: address 
　　      }
    ]
  }
]


export default routers