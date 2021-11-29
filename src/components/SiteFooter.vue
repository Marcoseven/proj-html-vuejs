<template>
	<div id="SiteFooter">
		<div class="container">
			<div
				id="rowInput"
				class="row align-items-center justify-content-between p-5"
			>
				<div class="col-6">
					<h2>We Offer Awesome Services</h2>
					<h6>
						When ,while lovely valley teem swith vapour around meand meridian
						sun strikes the uppper surface.
					</h6>
				</div>
				<div class="col-6 text-left position-relative">
					<form action="">
						<label for="" class="w-100"></label>
						<input
							type="text"
							name=""
							id=""
							class="text-left rounded-pill text-left w-75"
							placeholder="Enter Your Email Address"
						/>
						<button
							id="button"
							type="button"
							class="rounded-pill p-3 ms-1 border-none"
						>
							Subscribe
						</button>
					</form>
				</div>
			</div>
			<div class="row">
				<div
					class="col-3"
					v-for="(value, key, index) in colFirstFooter"
					:key="index"
				>
					<div class="py-5">
						<img src="../assets/images/white-logo-2.png" alt="" />
					</div>
					<div>
						<p>{{ value.text }}</p>
					</div>
				</div>
				<div class="col-3">
					<ul>
						<li>
							<h6>Quick Links</h6>
						</li>
						<li v-for="(value, key, index) in links" :key="index" :class="key">
							<a href="#">{{ value.toUpperCase() }}</a>
						</li>
					</ul>
				</div>
				<div class="col-3">
					<ul>
						<li>
							<h6>Resources</h6>
						</li>
						<li
							v-for="(value, key, index) in resources"
							:key="index"
							:class="key"
						>
							<a href="#">{{ value.toUpperCase() }}</a>
						</li>
					</ul>
				</div>
				<div class="col-3">
					<ul v-for="(value, key, index) in contacts" :key="index" :class="key">
						<li>
							<h6>Contact Us</h6>
						</li>
						<li>
							<a href="#">Address: {{ value.address }}</a> <br />
						</li>
						<li>
							<a href="#">Phone: {{ value.phone }}</a>
						</li>
						<li>
							<a href="#">Email: {{ value.email }}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<hr />
		<div class="row">
			<div
				id="rights"
				class="col-6 ps-5 pe-0"
				v-for="right in rights"
				:key="right"
			>
				<p>{{ right.text }}</p>
			</div>
			<div class="col-6 socials pe-3 text-right">
				<div class="social">
					<div>
						<i class="fab fa-instagram"></i>
					</div>
					<div>
						<i class="fab fa-linkedin-in"></i>
					</div>
					<div>
						<i class="fab fa-facebook-f"></i>
					</div>
					<div>
						<i class="fab fa-twitter"></i>
					</div>
				</div>
				<div>
					<div>
						<i class="far fa-arrow-alt-circle-up"></i>
					</div>
					<div>
						<i class="far fa-comment"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		colFirstFooter: Array,
		links: Array,
		resources: Array,
		contacts: Array,
		rights: Array,
	},
};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";
@import "../assets/scss/variables.scss";
#SiteFooter {
	height: auto;
	margin-top: 5rem;
	background-image: linear-gradient(
		to top,
		$SiteHeaderProjectPrice_backgroundColor 0%,
		$SiteHeaderProjectPrice_backgroundColor 80%,
		$white_color 80%,
		$white_color 100%
	);
}

#rowInput {
	background-image: linear-gradient(to right, #b6246e 0%, #ee5f66 100%);
	border-radius: 20px;
}

input {
	width: 25%;
	padding: 1.5rem;
	text-align: left;
	border: none;
}

#button {
	position: absolute;
	top: 35%;
	right: 3%;
	color: $white_color;
	background-color: #185795;
}

p {
	color: #81829a !important;
	text-align: left !important;
}

ul {
	margin: 0 !important;
	padding: 0 !important;
	list-style: none;
	li {
		padding: 1rem;
		h6 {
			color: $white_color;
		}
		a {
			text-decoration: none;
			color: #81829a;
			&:hover {
				color: $a_color;
			}
		}
	}
}

hr {
	height: 1px;
	color: #fff;
}

#rights p {
	color: #fff !important;
}
</style>
