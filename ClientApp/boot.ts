import './css/site.css';
import 'bootstrap';
import "@babel/polyfill";
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/home/home.vue.html').default },
    { path: '/counter', component: require('./components/counter/counter.vue.html').default },
    { path: '/fetchdata', component: require('./components/fetchdata/fetchdata.vue.html').default }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html').default)
});
