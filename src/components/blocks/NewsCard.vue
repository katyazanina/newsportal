<template>
  <div class="news-card">
	<!-- <router-link :to="{ name: 'detail', params: { code: item.slug_name }}"> -->
		<div class="news-card__img mb-16">
			<img :src="thumbnail_standard || multimedia[0].url" :alt="title" />
		</div>
		
		<p class="fs-subtitle-2 fw-bold mb-24">{{title}}</p>

		<div class="fs-text-2 text-grey-lighten-2">{{ new Date(published_date).toDateString() }} | #{{section}}</div>
	<!-- </router-link> -->
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
	title: {
		type: String,
		required: true
	},
	abstract: {
		type: String,
		// required: true
	},
	thumbnail_standard: {
		type: String,
		// required: true
	},
	multimedia: {
		type: Array,
		default: () => []
	},
	published_date: {
		type: String,
	},
	slug_name: {
		type: String,
		// required: true
	},
	section: {
		type: String,
	}
});

</script>

<style lang="scss">
.news-card {
	&__img {
		border-radius: 0.8rem;
		height: 17.5rem;
		overflow: hidden;

		& img {
			object-fit: cover;
			object-position: 50% 50%;
		}
	}
}
</style>

