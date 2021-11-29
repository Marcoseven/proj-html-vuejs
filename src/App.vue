<template>
	<div id="app">
		<div class="socials">
			<div class="social_icon">
				<i class="fab fa-facebook-f"></i>
			</div>
			<div class="social_icon">
				<i class="fab fa-twitter"></i>
			</div>
			<div class="social_icon">
				<i class="fab fa-instagram"></i>
			</div>
		</div>
		<SiteHeader :navMenuHeader="navMenu" />
		<SiteMain />
		<SiteFooter
			:colFirstFooter="colFooter"
			:links="link"
			:resources="resource"
			:contacts="contact"
			:rights="right"
		/>
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
			colFooter: [
				{
					id: "1",
					image: "",
					text: "When ,while lovely valley teems vapour aroundmeand meridian sun strikes the upper impenetrable sun strikes the uppper surface.",
				},
			],
			link: ["Services", "Contact", "Blog"],
			resource: [
				"Art Design",
				"Computer",
				"IT News",
				"Networking",
				"Web Security",
			],

			contact: [
				{
					address:
						"Patricia C. Amedee 4401 Waldeck Street Grapevine Nahville, Tx 76051",
					phone: "+99 (0) 101 0000 888",
					email: "Info@yourdomain.com",
				},
			],
			right: [
				{
					text: "© 2020 Phlox. All Rights Reserved.",
				},
			],
		};
	},
};
</script>

<style lang="scss">
@import "./assets/scss/common.scss";
@import "./assets/scss/variables.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
