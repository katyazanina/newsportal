<template>
	<div class="news-img-big mb-16">
		<slot name="picture">
			<img v-if="image" :src="image" :alt="title" />
			<NewsImageEmpty v-else/>
		</slot>
		
		<div class="news-img-big__wrap d-flex flex-column justify-content-end px-32 py-32">
			<slot name="content">
				<p class="fs-title-3 fw-bold text-main-white mb-24">
					{{ title }}
				</p>
				<!-- TODO: add HElpers -->
				<div class="fs-text-2 text-main-white">
					{{ new Date(published_date).toDateString() }} | 
					#{{ section }}
				</div>
			</slot>
		</div>
	</div>
</template>

<script setup>
import { defineProps } from "vue";

import NewsImageEmpty from "@/components/blocks/NewsImageEmpty.vue";

defineProps({
	image: {
		type: String,
	},
	title: {
		type: String,
	},
	published_date: {
		type: String,
	},
	section: {
		type: String,
	},
});
</script>

<style lang="scss">
.news-img-big {
	position: relative;

	border-radius: $radius;

	height: 40rem;

	overflow: hidden;

	& img {
		object-fit: cover;
		object-position: 50% 50%;

		width: 100%;
		height: 100%;
	}

	&::before {
		content: "";
		
		position: absolute;
		
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;
		
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0) 42.25%,
			rgba(0, 0, 0, 0.65) 100%
		);
	}
	
	&__wrap {
		position: absolute;
		
		top: 0;
		left: 0;

		width: 60%;
		height: 100%;
	}
}

</style>