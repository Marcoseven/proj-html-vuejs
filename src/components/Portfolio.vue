<template>
	<section id="Portfolio">
		<div id="rowPortfolio" class="row flex-column">
			<div class="row justify-content-between m-5">
				<div class="col-6">
					<h6 id="titlePortfolio">Portfolio</h6>
					<h3><strong>latest</strong> work</h3>
				</div>
				<div class="col-6">
					<i class="far fa-arrow-alt-circle-left"></i>
					<img src="../assets/images/default-skin.png" alt="" />
				</div>
			</div>
			<div class="row flex-nowrap">
				<div class="col-3">
					<div class="text-center">
						<img
							class="w-100 imagePortfolio"
							src="../assets/images/8wa60okr-1-790x576.jpg"
							alt="immagini statiche della sezione Portfolio"
						/>
					</div>
					<div class="d-flex justify-content-between px-3">
						<h6 class="my-3 fw-bolder">Basket of Flower on table</h6>
						<p id="paragraphPortfolio">Branding Strategy</p>
					</div>
				</div>
				<div class="col-3">
					<div class="text-center">
						<img
							class="w-100 imagePortfolio"
							src="../assets/images/DRY-1-790x576.jpg"
							alt="immagini statiche della sezione Portfolio"
						/>
					</div>
					<div class="d-flex justify-content-between px-3">
						<h6 class="my-3 fw-bolder">Purinky Products</h6>
						<p id="paragraphPortfolio">Digital Experience</p>
					</div>
				</div>
				<div class="col-3">
					<div class="text-center">
						<img
							class="w-100 imagePortfolio"
							src="../assets/images/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg"
							alt="immagini statiche della sezione Portfolio"
						/>
					</div>
					<div class="d-flex justify-content-between px-3">
						<h6 class="my-3 fw-bolder">Satisfy Poster</h6>
						<p id="paragraphPortfolio">Branding Strategy</p>
					</div>
				</div>
				<div class="col-3">
					<div class="text-center">
						<img
							class="w-100 imagePortfolio"
							src="../assets/images/84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg"
							alt="immagini statiche della sezione Portfolio"
						/>
					</div>
					<div class="d-flex justify-content-between px-3">
						<h6 class="my-3 fw-bolder">Mock-up</h6>
						<p id="paragraphPortfolio">Experience</p>
					</div>
				</div>
			</div>
			<div class="row justify-content-center mt-5"></div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			portfolio: [
				{
					title: "Basket of Flower on table",
					other: "Branding Strategy",
				},
				{
					title: "Purinky Products",
					other: "Digital Experience",
				},
				{
					title: "Satisfy Poster",
					other: "Branding Startegy",
				},
				{
					title: "Mock-up",
					other: "Experience",
				},
			],
		};
	},
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

#titlePortfolio {
	color: $a_color;
	text-align: left;
}

.imagePortfolio {
	border-radius: 20px;
}

.col-6:nth-child(2) {
	text-align: right;
}

h6,
p {
	margin: 1rem 0 !important;
	color: $black_color;
}

#paragraphPortfolio {
	text-align: right;
}

.circle {
	border: 1px solid #000;
	border-radius: 50%;
	padding: 0.15rem 0.6rem;
}
</style>
