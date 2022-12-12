<template>
	<ATitle :is="1" v-html="h1" />

	<div class="a-article">
		<NewsImageBig v-if="picture" class="mb-32">
			<template #picture>
				<picture v-html="picture"></picture>
			</template>

			<template #content>
				<div class="fs-text-2 text-main-white">
					<time v-html="time"></time>
				</div>
			</template>
		</NewsImageBig>

		<article v-html="article"></article>
	</div>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";

import NewsImageBig from "@/components/blocks/NewsImageBig.vue";

const props = defineProps({
	detail: {
		type: String,
	},
});

const article = ref(null);
const picture = ref(null);
const time = ref(null);
const h1 = ref(null);

//  TODO: Fix update component on route
onMounted(() => {
	// TODO: Add function Parse HTML
	const el = document.createElement("html");
	el.innerHTML = props.detail;

	// TODO: SET One function
	article.value = el.querySelector("[name='articleBody']")?.innerHTML;
	picture.value = el.querySelector("picture")?.innerHTML;
	time.value = el.querySelector("time")?.innerHTML;
	h1.value = el.querySelector("h1")?.innerHTML;

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

	& strong,
	b {
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

	& figure {
		display: none;
	}

	& section {
		padding: space(32) space(64);
	}
}
</style>
