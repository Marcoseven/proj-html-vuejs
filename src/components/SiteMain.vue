<template>
	<div id="SiteMain">
		<Jumbotron />
		<Services />
		<Project />
	</div>
</template>

<script>
import Jumbotron from "./Jumbotron";
import Services from "./Services";
import Project from "./Project";

export default {
	name: "App",
	components: {
		Jumbotron,
		Services,
		Project,
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
