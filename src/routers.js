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
import myOrder   from './components/my/myOrder.vue';
import identity  from './components/my/identity.vue';

const routers = [{
    path: '/',
    component: App,
    children: [{
        path: '',
        redirect: "/show"
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
    },{　　　　
        path: '/myOrder',
        name: "myOrder",
        component: myOrder,
        meta: { login: true }　
    },{　　　　
        path: '/identity',
        name: "identity",
        component: identity,
        meta: { login: true }　
    }]
}]


export default routers


