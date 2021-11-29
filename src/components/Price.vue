<template>
	<section id="Price">
		<div id="containerPrice" class="container">
			<div id="rowPortfolio" class="row flex-column">
				<div class="w-100 text-center">
					<h6 id="titlePrice">Price List</h6>
					<h3><strong>Our</strong> Pricing</h3>
					<h6>
						When, while the lovely teems with vapour around meand the meridian
						sun strikes <br />the upper surface.
					</h6>
				</div>
				<div id="rowCard" class="row mt-5">
					<div class="col-4" v-for="card in price" :key="card.title">
						<div id="containerNumber" class="row justify-content-end">
							<span id="contentNumber">{{ card.number }}</span>
						</div>
						<div class="card h-auto text-center p-3">
							<div id="contentCard">
								<div>
									<div>
										<h4>
											<strong>{{ card.strongTitle }}</strong> <br />
											<span class="fs-5">{{ card.title }}</span>
										</h4>
										<h5>
											<span id="dollar" class="fs-6">{{ card.dollar }}</span
											><br />
											<span id="numberLittle">{{ card.numberLittle }}</span
											><br /><span class="fs-6">{{ card.month }}</span>
										</h5>
									</div>
									<div class="pt-3">
										<h6><strong>Creative</strong> Design Enabled</h6>
										<h6><strong>Vibrant</strong> Color Usage</h6>
										<h6><strong>Eye</strong> Catching Design</h6>
										<h6><strong>Extreme</strong> Typography</h6>
										<h6><strong>Exceptional</strong> Designed</h6>
									</div>
									<div class="my-5">
										<button id="buttonTry" class="rounded-pill" type="button">
											Order Now
											<i class="fas fa-arrow-right"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			price: [
				{
					id: 1,
					number: "40",
					strongTitle: "Designing",
					title: "Process",
					dollar: "$",
					numberLittle: "40",
					month: "Per Month",
				},
				{
					id: 2,
					number: "60",
					strongTitle: "Developing",
					title: "Product",
					dollar: "$",
					numberLittle: "60",
					month: "Per Month",
				},
				{
					id: 3,
					number: "80",
					strongTitle: "Supporting",
					title: "Clients",
					dollar: "$",
					numberLittle: "80",
					month: "Per Month",
				},
			],
		};
	},
};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";
@import "../assets/scss/variables.scss";

#Price {
	margin: 5rem 0;
	background-image: linear-gradient(
		to bottom,
		$SiteHeaderProjectPrice_backgroundColor 0%,
		$SiteHeaderProjectPrice_backgroundColor 80%,
		$white_color 80%,
		$white_color 100%
	);
}

#titlePrice {
	color: $a_color;
	text-align: center;
}

#titlePrice + h3 {
	color: $white_color;
}

#titlePrice + h3 + h6 {
	color: $white_color;
}

#contentCard {
	position: relative;
	z-index: 10;
}

.card {
	position: relative;
	border-radius: 20px !important;
	border: 10px solid #000;
	z-index: 10;
}

#dollar {
	position: relative;
	left: -30px;
}

#numberLittle {
	font-size: 80px;
	font-weight: bold;
}

#buttonTry {
	background-color: $buttonTryServices_backgroundColor;
	filter: grayscale(10%);
	box-shadow: 0px 0px 25px #d5416d;
}

#containerNumber {
	text-align: right !important;
	position: relative;
	top: -108px;
	right: 0;
	z-index: 1;
}

#contentNumber {
	font-weight: bold;
	margin: 0 !important;
	font-size: 15rem;
	color: #eaeaea;
	filter: grayscale(10%);
	position: absolute;
	top: 0;
	right: 0;
}

#cardCenter {
	background-color: #d2406e;
}
</style>
