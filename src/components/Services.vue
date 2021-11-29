<template>
	<section id="Services">
		<div class="container">
			<div class="w-100 text-center">
				<h6 id="titleServices">Our Services</h6>
				<h3><strong>What</strong> We Do</h3>
				<h6>
					When, while the lovely valley teems with vapour around means the
				</h6>
			</div>

			<div class="row mt-5">
				<div class="col-3">
					<div class="text-center">
						<img
							src="../assets/images/Group-247.png"
							alt="immagini artistiche della sezione Services"
						/>
					</div>
					<h4 class="my-3 fw-bolder">Data Analysis</h4>
					<p class="paragraphServices">
						When, while the lovely valley teems with vapour around meand the
						meridian sun strikes the upper
					</p>
				</div>
				<div class="col-3">
					<div class="text-center">
						<img
							src="../assets/images/Group-567.png"
							alt="immagini artistiche della sezione Services"
						/>
					</div>
					<h4 class="my-3 fw-bolder">SEO Optimization</h4>
					<p class="paragraphServices">
						When, while the lovely valley teems with vapour around meand the
						meridian sun strikes the upper
					</p>
				</div>
				<div class="col-3">
					<div class="text-center">
						<img
							src="../assets/images/Group-538.png"
							alt="immagini artistiche della sezione Services"
						/>
					</div>
					<h4 class="my-3 fw-bolder">Security Data</h4>
					<p class="paragraphServices">
						When, while the lovely valley teems with vapour around meand the
						meridian sun strikes the upper
					</p>
				</div>
				<div class="col-3">
					<div class="text-center">
						<img
							src="../assets/images/Group-566.png"
							alt="immagini artistiche della sezione Services"
						/>
					</div>
					<h4 class="my-3 fw-bolder">Branding Strategy</h4>
					<p class="paragraphServices">
						When, while the lovely valley teems with vapour around meand the
						meridian sun strikes the upper
					</p>
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
			services: [
				{
					id: "1",
					title: "Data Analysis",
					text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
				},
				{
					id: "2",
					title: "SEO Optimization",
					text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
				},
				{
					id: "3",
					title: "Security Data",
					text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
				},
				{
					id: "4",
					title: "Branding Strategy",
					text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
				},
			],
		};
	},
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

#Services {
	padding: 0.5rem 0;
}

h3,
h6 {
	color: #000;
}

#titleServices {
	color: $a_color;
	text-align: center;
}

#card {
	margin: 5rem 0;
}

h4 {
	color: $black_color !important;
	text-align: center;
}

.paragraphServices {
	color: $black_color !important;
	text-align: center;
}

#buttonServices {
	background-color: $buttonTryServices_backgroundColor;
	color: #fff;
	padding: 0.5rem 2rem;
	border: none;
	filter: grayscale(10%);
	box-shadow: 0px 0px 25px $buttonTryServices_backgroundColor;
}
</style>
