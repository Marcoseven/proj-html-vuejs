<template>
	<div id="SiteMain">
		<div class="jumbotron">
			<div class="container p-5 d-flex justify-content-between">
				<div class="d-flex flex-column justify-content-evenly py-5">
					<div>
						<h1>
							<span class="fw-bold"> Business Planning </span> <br />
							<span class="fw-normal">Digital Technology</span> <br />
							<span class="fw-bold">Modern Solution !</span>
						</h1>
					</div>
					<div>
						<p>
							When, while the lovely valley teems with vapour around <br />
							meand the meridian sun strikes the upper surface.
						</p>
					</div>
					<div class="d-flex justify-content-start">
						<button id="buttonTry" class="rounded-pill" type="button">
							Try It Now
						</button>
						<button id="buttonExplore" class="rounded-pill ms-3" type="button">
							Explore More
						</button>
					</div>
				</div>
				<div class="text-end">
					<img
						class="w-75"
						src="../assets/images/header.png"
						alt="immagine artistica di uomo in un ufficio vicino a una scrivania"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";
@import "../assets/scss/variables.scss";

#SiteMain {
	height: auto;
}

.jumbotron {
	padding: 0.5rem 0;
	background-color: $SiteHeader_backgroundColor;
}

h1 {
	color: #fff;
}

p {
	color: $paragraph_color;
}

button {
	padding: 0.5rem 2rem;
	border: none;
	color: #fff;
}

#buttonTry {
	background-color: $buttonTry_backgroundColor;
}

#buttonExplore {
	background-color: $buttonExplore_backgroundColor;
}
</style>
