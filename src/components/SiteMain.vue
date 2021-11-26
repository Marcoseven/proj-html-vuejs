<template>
	<div id="SiteMain">
		<Jumbotron />
		<Services />
	</div>
</template>

<script>
import Jumbotron from "./Jumbotron";
import Services from "./Services";

export default {
	name: "App",
	components: {
		Jumbotron,
		Services,
	},
};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";
@import "../assets/scss/variables.scss";

#SiteMain {
	height: auto;
}
</style>
