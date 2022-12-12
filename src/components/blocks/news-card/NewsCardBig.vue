<template>
	<div class="news-card-big d-flex">
		<ALink :to="{ path: link }">
			<div class="row">
				<div class="col-12 col-md-6 col-lg-9">
					<NewsImageBig :title="title" :date="published_date" :section="section" :image="image"/>
				</div>
				<div class="col-12 col-md-6 col-lg-3">
					<p class="news-card-big__desc fs-subtitle-1 mb-24">
						{{ abstract }}
					</p>
				</div>
			</div>
		</ALink>
	</div>
</template>

<script setup>
import { defineProps } from "vue";

import NewsImageBig from "@/components/blocks/NewsImageBig.vue";

import { DataFromProps } from "@/helpers/getDataFromProps.js";

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
.news-card-big {
	&__desc {
		&::first-line {
			font-size: fs(title-3);
		}
	}

	picture {
		width: 100%;
	}
}
</style>
