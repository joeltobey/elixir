// main.js
var Vue = require( 'vue' )
var App = require( './components/test.vue' )

new Vue({
	el : 'body',
	components : {
		app : App
	}
})