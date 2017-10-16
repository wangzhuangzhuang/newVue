import App from './App';
import show from './components/show/show.vue';
import details from './components/details/details.vue';
import login from './components/login/login.vue';
import my from './components/my/my.vue';
import set from './components/set/set.vue';
import address from './components/address/address.vue';
import classify from './components/classify/classify.vue';
import ClassifyDetails from './components/classify/ClassifyDetails.vue';
import searchResult from './components/classify/searchResult.vue';

const routers = [{
    path: '/',
    name: 'index',
    component: App,
    children: [{
        path: '/',
        name: "show",
        redirect: "/show",
        component: show
    },{
        path: '/show',
        name: "show",
        component: show
    },{
        path: '/classify',
        name: "classify",
        component: classify
    },{
        path: '/ClassifyDetails',
        name: "ClassifyDetails",
        component: ClassifyDetails
    },{
        path: '/searchResult',
        name: "searchResult",
        component: searchResult
    },{　　
        path: '/details',
        name: "details",
       component: details　　
    }, {
        path: '/login',
        name: "login",
        component: login
    }, {
        path: '/my',
        name: "my",
        component: my
    }, {
        path: '/set',
        name: "set",
        component: set
    }, {　　　　
        path: 'details/:id',
        name: "details",
        component: details　　
    }, {　　　　
        path: '/address',
        name: "address",
        component: address　　
    }]
}]


export default routers