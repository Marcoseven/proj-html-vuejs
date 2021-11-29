<template>
	<section id="Blog">
		<div class="container">
			<div class="row">
				<div class="w-100 text-center">
					<h6 id="titleBlog">Blog</h6>
					<h3><strong>Latest</strong> Posts</h3>
					<h6>
						When, while the lovely teems with vapour around meand the meridian
						sun strikes <br />the upper surface.
					</h6>
				</div>
			</div>
			<div id="rowCardsBlog" class="row flex-wrap">
				<div class="col-5 m-0" v-for="post in posts" :key="post.title">
					<div id="cardFirst" class="card">
						<img
							src="../assets/images/headway-537308-unsplash-1380x703.jpg"
							alt=""
						/>
					</div>
					<div id="rowFirstCard" class="row cardText flex-nowrap">
						<div class="w-75 ps-3 pe-0">
							<p class="paragraphBlog">{{ post.date }}</p>
							<h5>
								<strong>{{ post.title }}</strong>
							</h5>
							<p class="paragraphBlog">{{ post.text }}</p>
						</div>
						<div class="w-25 ps-0 pe-3">
							<button type="submit" class="buttonBlog rounded-pill">
								{{ post.button }}
							</button>
						</div>
					</div>
				</div>
				<div class="colDouble p-1" v-for="post in doublePost" :key="post.title">
					<div
						class="
							h-100
							row
							flex-column flex-nowrap
							align-items-start
							justify-content-start
							cardTextDouble
							p-5
						"
					>
						<div class="w-75 p-0">
							<p class="paragraphBlog">{{ post.date }}</p>
							<h5>
								<strong>{{ post.title }}</strong>
							</h5>
							<p class="paragraphBlog">{{ post.text }}</p>
						</div>
						<div class="text-left p-0">
							<button type="submit" class="buttonBlog rounded-pill">
								{{ post.button }}
							</button>
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
			posts: [
				{
					id: "1",
					date: "April 21, 2019 - by Paul",
					title: "Amazon gets CCI nod to acquire 49% stake in",
					text: "When, while the lovely valley teems with vapour around me, and the meridian sun s...",
					button: "Read More",
				},
			],
			doublePost: [
				{
					id: "1",
					date: "April 21, 2019 - by Paul",
					title:
						"Clearing Corporations get SEBI nod to invest in overnight funds",
					text: "When, while the lovely valley teems with vapour around me, and the meridian sun s...",
					button: "Read More",
				},
				{
					id: "2",
					date: "April 21, 2019 - by Paul",
					title:
						"Shabnam Dhillion, wife of RSSB chief Gurinder Dhillon, passer away in London",
					text: "When, while the lovely valley teems with vapour around me, and the meridian sun s...",
					button: "Read More",
				},
			],
		};
	},
};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";
@import "../assets/scss/variables.scss";

#Blog {
	margin: 3rem 0;
}

#titleBlog {
	color: $a_color;
	text-align: center;
}

#rowCardsBlog {
	margin: 0 -1rem;
}

#cardFirst img {
	border-radius: 20px;
}

.col-5,
.colDouble {
	position: relative;
}

.paragraphBlog {
	color: $white_color;
	text-align: left;
}

#rowFirstCard {
	align-items: last baseline;
}

.cardText {
	position: absolute;
	bottom: 0;
	color: #fff !important;
	text-align: left;
}

.cardTextDouble {
	position: absolute;
	top: 0%;
	color: #fff !important;
}

.buttonBlog {
	color: #000;
	background-color: #fff;
}

.colDouble {
	width: 28% !important;
	background-color: #0c194f;
	margin: 0 0.5rem !important;
	border-radius: 20px;
}
</style>
