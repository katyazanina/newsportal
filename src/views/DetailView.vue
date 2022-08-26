<template>
	<section class="section">
		
		<div class="row">
			<div class="col-12 col-lg-9">
				<ATitle :is="1">{{ h1 }}</ATitle>
				<div class="a-article">
					<div class="a-article__img mb-32" v-if="picture">
						<picture v-html="picture"></picture>
						<div class="a-article__wrap d-flex flex-column justify-content-end px-32 py-32">
							<div class="fs-text-2 text-main-white">
								<time v-html="time"></time>
							</div>
						</div>
					</div>

					<article v-html="article"></article>
				</div>
			</div>
		</div>
	</section>

	{{ error }}

	<section></section>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useNewsStore } from "@/stores/NewsStore";
import { useRoute } from "vue-router";

const store = useNewsStore();
const { detail, error } = storeToRefs(store);
const route = useRoute();
const article = ref(null);
const picture = ref(null);
const time = ref(null);
const h1 = ref(null);

async function init() {
	await store.getDetail(route.path);
}

init().finally(() => {
	const el = document.createElement("html");
	el.innerHTML = detail.value;
	article.value = el.querySelector("[name='articleBody']").innerHTML;
	picture.value = el.querySelector("picture").innerHTML;
	time.value = el.querySelector("time").innerHTML;
	h1.value = el.querySelector("h1").textContent;
});
</script>

<style lang="scss">
.a-article {
	font-size: fs(text-1);

	& p {
		margin-bottom: space(16);
		font-size: fs(text-1);
	}

	& h2 {
		font-size: fs(title-3);
		margin-bottom: space(32);
	}

	& strong, b {
		font-weight: bold;
	}

	& blockquote {
		font-style: italic;
		margin-bottom: space(16);
	}

	& hr {
		margin-bottom: space(16);
	}

	& ul {
		list-style: circle;
		& li {
			font-style: italic;
			font-size: fs(text-1);

			&:not(:last-child) {
				margin-bottom: space(16);
			}
		}
		margin-bottom: space(16);
	}

	& figure{
		display: none;
	}

	& section {
		padding: space(32) space(64);
	}

	&__img {
		border-radius: 0.8rem;
		height: 40rem;
		overflow: hidden;
		position: relative;

		& img {
			object-fit: cover;
			object-position: 50% 50%;
			width: 100%;
			height: 100%;
		}

		& picture {
			width: 100%;
		}

		&::before {
			content: "";
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0) 42.25%,
				rgba(0, 0, 0, 0.65) 100%
			);
		}
	}

	&__wrap {
		position: absolute;
		width: 60%;
		height: 100%;
		top: 0;
		left: 0;
	}
}
</style>
