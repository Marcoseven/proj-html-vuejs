import Vue from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
})
.$mount("#app");
