<template>
	<section id="Project">
		<div class="container">
			<div class="row align-items-center p-5">
				<div id="imageProject" class="w-50">
					<img
						src="../assets/images/men-data.png"
						alt="immagine artistica di uomo che cerca di vedere l'orizzonte e con dei file accanto"
					/>
				</div>
				<div class="w-50 text-left">
					<h6>Start Your Project</h6>
					<h2 class="fs-1">
						<strong>Grow Your Project</strong> <br />
						With Our Strategy
					</h2>
					<p id="paragraph">
						When, while the lovely valley teems with vapour around meand the
						<br />meridian sun strikes the upper surface .of the impenetrable
						foliage of <br />my trees, and but a few stray gleams steal into the
						inner sanctuary,
					</p>
					<div class="d-flex justify-content-start">
						<button id="buttonTry" class="rounded-pill" type="button">
							Try It Now
						</button>
						<button id="buttonExplore" class="rounded-pill ms-3" type="button">
							Explore More
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";
@import "../assets/scss/variables.scss";

#Project {
	padding: 0.5rem 0;
	background-color: $SiteHeaderProject_backgroundColor;
}

h6,
h2 {
	color: $title_color;
}

#imageProject img {
	width: 75%;
}

#paragraph {
	padding: 2rem 0;
	color: $paragraph_color;
	text-align: left;
}

button {
	padding: 0.5rem 2rem;
	margin: 0!important;
	border: none;
	color: #fff;
}

#buttonTry {
	background-color: $buttonTryServices_backgroundColor;
}

#buttonExplore {
	background-color: $buttonExplore_backgroundColor;
}
</style>
