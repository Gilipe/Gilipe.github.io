Vue.use(VueRouter);
Vue.use(VueResource);

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
	data: function () {
		return {
			name: '',
			email: '',
			subject: '',
			message: '',
			maxLength: 200
		}
	},
	methods: {
		isValidName: function () {
			var valid = ((this.name.length > 3) && (this.name.length <= 30)) && (this.name.trim() !== "");
			console.log('valid name: ' + valid);
			return valid;
		},
		isValidEmail: function () {
			var valid = this.email.indexOf('@') > 0;
			console.log('valid name: ' + valid);
			return valid;
		},
		isValidSubject: function () {
			var valid = (this.subject.length > 0) && (this.subject.length <= 45);
			console.log('valid name: ' + valid);
			return valid;
		},
		isValidMessage: function () {
			var valid = (this.message.length > 0) && (this.message.length <= this.maxLength);
			console.log('valid name: ' + valid);
			return valid;
		},
		submitForm: function () {
			console.log("submitting messaging...");
			
			var submission = {
				"name": [this.name],
				"email": [this.email],
				"subject": [this.subject],
				"message": [this.message],
			};
			
			var url = 'https://script.google.com/macros/s/AKfycbybZF0dV8GK8gUXUZXDc_ADC-H1Sj8r3Nuvr7OK5T00aIx0Q25N/exec';
			var xhr = new XMLHttpRequest();
			
			xhr.open('POST', url);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.onreadystatechange = function () {
				console.log(xhr.status, xhr.statusText);
				console.log(xhr.responseText);
				return;
			}
			
			var encoded = Object.keys(submission).map(function(k) {
				return encodeURIComponent(k) + '=' + encodeURIComponent(submission[k])
			}).join('&');
			xhr.send(encoded);
		}
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