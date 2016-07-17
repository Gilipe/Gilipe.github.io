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
var ContactComponent = Vue.extend({
	template: "#contact",
	data: function() {
		return { class: "contact" }
	}
});

var router = new VueRouter();

router.map({
	'/home': {
		component: HomeComponent
	},
	'/about': {
		component: AboutComponent
	},
	'/contact': {
		component: ContactComponent
	}
});

var App = Vue.extend({});
router.start(App, "#app");