<template>
	<section class="section">
		<ATitle :is="1">Hot Topics</ATitle>

		<NewsCardBig v-bind="content[0]"></NewsCardBig>

		<ATitle :is="2">Latest News</ATitle>

		<div class="row gy-32 gx-32">
			<div v-for="(item, i) in content" :key="item.slug_name" class="col-12" :class="[i !== 0 ? 'col-sm-6 col-lg-3' : '']">
				<NewsCard v-bind="item" v-if="i !== 0"></NewsCard>
			</div>
		</div>
	</section>
	
	<div> {{ error }}</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useNewsStore } from "@/stores/NewsStore";
import NewsCard from "@/components/blocks/NewsCard.vue";

const store = useNewsStore();
const { content, error } = storeToRefs(store);

async function init() {
	await store.getTop("home");
}

init();

</script>
