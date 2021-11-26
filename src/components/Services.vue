<template>
	<section id="Services">
		<div class="container">
			<div class="w-100 text-center">
				<h6>Our Services</h6>
				<h3><strong>What</strong> We Do</h3>
				<h6>
					When, white the lovely valley teems with vapour around means the
				</h6>
			</div>

			<div class="row mt-5">
				<div
					class="col-3"
					v-for="service in services"
					:image="service.image"
					:key="service.title"
				>
					<div class="text-center">
						<img
							:src="service.image"
							alt="immagini artistiche della sezione Services"
						/>
					</div>
					<h4 class="my-3 fw-bolder">{{ service.title }}</h4>
					<p>{{ service.text }}</p>
				</div>
			</div>
			<div class="text-center mt-5">
				<button id="buttonServices" class="rounded-pill" type="button">
					View All Services
				</button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			card: "",
			services: [
				{
					image: "/img/Group-247.0dfcab28.png",
					title: "Data Analysis",
					text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
				},
				{
					image: "/img/Group-567.3532312c.png",
					title: "SEO Optimization",
					text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
				},
				{
					image: "/img/Group-538.8a34ed91.png",
					title: "Security Data",
					text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
				},
				{
					image: "/img/Group-566.3489d071.png",
					title: "Branding Strategy",
					text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
				},
			],
		};
	},
};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";
@import "../assets/scss/variables.scss";

#Services {
	padding: 0.5rem 0;
}

h3,
h6 {
	color: #000;
}

h6:first-child {
	color: $a_color !important;
	text-align: center;
}

#card {
	margin: 5rem 0;
}

h4,
p {
	text-align: center;
	color: $paragraphServices_color;
}

#buttonServices {
	background-color: $buttonTryServices_backgroundColor;
	color: #fff;
	padding: 0.5rem 2rem;
	border: none;
}
</style>
