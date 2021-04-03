const {add} =require('./mathUtil.js')
require('./css/normal.css')
console.log(add(20,30));
import Vue from 'vue'
const app=new Vue({
	el:'#app',
	template:`
	<div>
	<h2>{{message}}</h2>
	</div>
	`,
	data:{
		message:'hello webpack'
	}
})