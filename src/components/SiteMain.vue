<template>
	<div id="SiteMain">
		<Jumbotron />
		<Services />
		<Project />
		<Portfolio />
		<Price />
		<Blog />
		<Testimonial />
	</div>
</template>

<script>
import Jumbotron from "./Jumbotron";
import Services from "./Services";
import Project from "./Project";
import Portfolio from "./Portfolio";
import Price from "./Price";
import Blog from "./Blog";
import Testimonial from "./Testimonial";

export default {
	name: "App",
	components: {
		Jumbotron,
		Services,
		Project,
		Portfolio,
		Price,
		Blog,
		Testimonial,
	},
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

#SiteMain {
	height: auto;
}
</style>
