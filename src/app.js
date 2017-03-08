'use strict'

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './App.vue';
import Foo from './Foo.vue';
import Bar from './Bar.vue';

var routes = [
	{ path: "/", redirect: "/foo" },
	{ path: '/foo', component: Foo },
	{ path: '/bar', component: Bar }
];

var router = new VueRouter({
	routes: routes
});

new Vue({
	el: '#app',
	router: router,
	render: h => h(App)
});
