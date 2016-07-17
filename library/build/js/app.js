Vue.use(VueRouter);

var HomeComponent = Vue.extend({
	template: "#home",
	data: function() {
		return { class: "home" }
	}
});
var AboutComponent = Vue.extend({
	template: "#about",
	data: function() {
		return { class: "about" }
	}
});

var router = new VueRouter();

router.map({
	'/home': {
		component: HomeComponent
	},
	'/about': {
		component: AboutComponent
	}
});

var App = Vue.extend({});
router.start(App, "#app");