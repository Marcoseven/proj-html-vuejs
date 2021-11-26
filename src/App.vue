<template>
	<div id="app">
		<SiteHeader :navMenuHeader="navMenu" />
		<SiteMain />
		<SiteFooter />
	</div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
	name: "App",
	components: {
		SiteHeader,
		SiteMain,
		SiteFooter,
	},
	data() {
		return {
			navMenu: ["Home", "About", "Services", "Blog", "Contact", "Portfolio"],
		};
	},
};
</script>

<style lang="scss">
@import "./assets/scss/common.scss";
@import "./assets/scss/variables.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
