<template>
	<section class="Testimonial">
		<div class="container">
			<div class="row mb-5">
				<div class="w-100 text-center">
					<h6 id="titleBlog">Testimonial</h6>
					<h3><strong>What</strong> People Say</h3>
					<h6>
						When, while the lovely teems with vapour around meand the meridian
						sun strikes <br />the upper surface.
					</h6>
				</div>
			</div>
			<div class="row mb-5">
				<div class="col-4">
					<div
						id="circle"
						class="card row align-center justify-content-between"
					>
						<div id="circle">
							<span>
								<img
									src="../assets/images/szabo-viktor-1266895-unsplash-1024x1024.png"
									alt="immagine statica"
								/>
							</span>
						</div>
						<div class="my-5">
							<div>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
							</div>
							<p>
								When, while lovely valley teems with vapour around meand
								meridian sun strikes the upper impenetrable foliage of my trees,
								and but a thousand.
							</p>
						</div>
						<div class="text-center">
							<h6>
								<strong>Michkel Anegl</strong>
							</h6>
							<h6>Marketing Management</h6>
						</div>
					</div>
				</div>
				<div class="col-4">
					<div
						id="circle"
						class="card row align-center justify-content-between"
					>
						<div id="circle">
							<span>
								<img
									src="../assets/images/philipe-cavalcante-539505-unsplash-1024x1024.png"
									alt="immagine statica"
								/>
							</span>
						</div>
						<div class="my-5">
							<div>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
							</div>
							<p>
								When, while lovely valley teems with vapour around meand
								meridian sun strikes the upper impenetrable foliage of my trees,
								and but a thousand.
							</p>
						</div>
						<div class="text-center">
							<h6>
								<strong>Michkel Anegl</strong>
							</h6>
							<h6>Marketing Management</h6>
						</div>
					</div>
				</div>
				<div class="col-4">
					<div
						id="circle"
						class="card row align-center justify-content-between"
					>
						<div id="circle">
							<span>
								<img
									src="../assets/images/fabio-spinelli-695744-unsplash-1024x1024.png"
									alt="immagine statica"
								/>
							</span>
						</div>
						<div class="my-5">
							<div>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
							</div>
							<p>
								When, while lovely valley teems with vapour around meand
								meridian sun strikes the upper impenetrable foliage of my trees,
								and but a thousand.
							</p>
						</div>
						<div class="text-center">
							<h6>
								<strong>Michkel Anegl</strong>
							</h6>
							<h6>Marketing Management</h6>
						</div>
					</div>
				</div>
			</div>
			<div class="row mt-5">
				<div class="cardDown">
					<img src="../assets/images/client-1-1.png" alt="" />
				</div>
				<div class="cardDown">
					<img src="../assets/images/clienty-2.png" alt="" />
				</div>
				<div class="cardDown">
					<img src="../assets/images/clienty-4.png" alt="" />
				</div>
				<div class="cardDown">
					<img src="../assets/images/client-5.png" alt="" />
				</div>
				<div class="cardDown">
					<img src="../assets/images/clienty-3.png" alt="" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			testimonial: [
				{
					id: "1",
					star: "",
					text: "When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand.",
					strongTitle: "Michkel Anegl",
					title: "Marketing Management",
				},
				{
					id: "2",
					star: "",
					text: "When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand.",
					strongTitle: "Michkel Anegl",
					title: "Marketing Management",
				},
				{
					id: "3",
					star: "",
					text: "When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand.",
					strongTitle: "Michkel Anegl",
					title: "Marketing Management",
				},
			],
		};
	},
};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";
@import "../assets/scss/variables.scss";

#Testimonial {
	margin: 3rem 0;
}

#circle {
	border-radius: 50%;
	border: 5px solid #b6256f;
	padding: 1rem 0.5rem;
	text-align: center;
}

#circle img {
	width: 75%;
}

p {
	color: $black_color !important;
	text-align: center !important;
}

.col-4,
.card {
	border: none !important;
}

.cardDown {
	width: calc(100% / 5) !important;
	text-align: center;
}
</style>
