<template>
	<div id="SiteHeader">
		<div class="container">
			<nav class="d-flex justify-content-between align-items-center">
				<div>
					<a class="text-decoration-none" href="#">
						<img
							src="../assets/images/white-logo-2.png"
							alt="immagine del logo di Phlox Corporate"
						/>
					</a>
				</div>
				<div>
					<ul class="d-flex align-items-center">
						<li
							v-for="(value, key, index) in navMenuHeader"
							:key="index"
							:class="key"
						>
							<a href="#">{{ value.toUpperCase() }}</a>
						</li>

						<li>
							<button id="buttonSignIn" class="rounded-pill" type="button">
								Sign In
							</button>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		navMenuHeader: Array,
	},
};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";
@import "../assets/scss/variables.scss";

#SiteHeader {
	height: auto;
	padding: 0.5rem 0;
	background-color: $SiteHeaderProject_backgroundColor;
}

ul {
	margin: 0 !important;
	padding: 0 !important;
	list-style: none;
	li {
		padding: 0 1rem;
		a {
			text-decoration: none;
			color: #fff;
			&:hover {
				color: $a_color;
			}
		}
	}
}

#buttonSignIn {
	background-color: $buttonSignIn_backgroundColor;
	color: #fff;
	padding: 0.5rem 2rem;
	border: none;
}
</style>
