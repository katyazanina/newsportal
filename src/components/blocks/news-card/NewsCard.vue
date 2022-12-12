<template>
	<div class="news-card">
		<ALink :to="{ path: link }">
			<div class="news-card__img mb-16">
				<img v-if="image" :src="image" :alt="title" />
				<NewsImageEmpty v-else class="mb-16"/>
			</div>
			
			<p class="fs-subtitle-2 fw-bold mb-24">{{ title }}</p>
			<div class="fs-text-2 text-grey-lighten-2">
				<!-- TODO: add HElpers -->
				{{ new Date(published_date).toDateString() }} | 
				#{{ section }}
			</div>
		</ALink>
	</div>
</template>

<script setup>
import { defineProps } from "vue";
import { DataFromProps } from "@/helpers/getDataFromProps.js";
import NewsImageEmpty from "@/components/blocks/NewsImageEmpty.vue";

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	abstract: {
		type: String,
	},
	multimedia: {
		type: Array,
		default: () => [],
	},
	published_date: {
		type: String,
	},
	slug_name: {
		type: String,
	},
	section: {
		type: String,
	},
	url: {
		type: String,
		required: true,
	},
});

const data = new DataFromProps(props);
const image = data.getImage();
const link = data.getLink();
</script>

<style lang="scss">
.news-card {
	&__img {
		border-radius: $radius;

		height: 17.5rem;

		overflow: hidden;

		& img {
			object-fit: cover;
			object-position: 50% 50%;

			width: 100%;
			height: 100%;
		}
	}

	&__img--empty {
		display: flex;
		align-items: center;
		justify-content: center;

		background-color: color(main-black);
	}
}
</style>
