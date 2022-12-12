<template>
	<div v-if="content.length">
		<section class="section">
			<ATitle :is="1">Hot Topics</ATitle>

			<NewsCardBig v-bind="content[0]"></NewsCardBig>
		</section>

		<section class="section">
			<ATitle :is="2">Latest News</ATitle>

			<div class="row gy-32 gx-32">
				<div v-for="(item, i) in content" :key="`${item.published_date}-${i}`" class="col-12" :class="[i !== 0 ? 'col-sm-6 col-lg-3' : 'd-none']">
					<NewsCard v-bind="item"></NewsCard>
				</div>
			</div>
		</section>
	</div>
	<!-- TODO: Layout for error and loading -->
	<div v-else-if="error"> 
		<section class="section">
			<span class="fs-title-3 text-center p-fixed">{{ error }}</span>
		</section>
	</div>
	<div v-else>
		<section class="section">
			<span class="fs-title-3 text-center p-fixed">Loading...</span>
		</section>
	</div>

</template>

<script setup>
import { storeToRefs } from "pinia";
import { useNewsStore } from "@/stores/NewsStore";
import NewsCard from "@/components/blocks/news-card/NewsCard.vue";
import NewsCardBig from "@/components/blocks/news-card/NewsCardBig.vue";

// TODO : Add comon initicialization for page

const store = useNewsStore();
const { content, error } = storeToRefs(store);

async function init() {
	await store.getTop("home");
}

init();

</script>
