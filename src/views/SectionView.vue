<template>
	<div v-if="content.length">
		<section class="section">
			<ATitle :is="1">{{ code }}</ATitle>

			<div class="row gy-32 gx-32">
				<div
					v-for="(item, i) in content"
					:key="`${item.published_date}-${i}`"
					class="col-12"
					:class="[i !== 0 ? 'col-sm-6 col-lg-3' : 'd-none']"
				>
					<NewsCard v-bind="item" :key="`${item.published_date}-${i}`"></NewsCard>
				</div>
			</div>

			<!-- TODO: getDynamicData -->
			<APagination :offset="20" :max="500"/>
		</section>
	</div>

	<!-- TODO: Add error and loading -->
	<div v-else-if="error">
		<section class="section">
			<span class="fs-title-3 text-center">{{ error }}</span>
		</section>
	</div>
	<div v-else>
		<section class="section">
			<span class="fs-title-3 text-center">Loading...</span>
		</section>
	</div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { useRoute } from "vue-router";

import { storeToRefs } from "pinia";
import { useNewsStore } from "@/stores/NewsStore";

import NewsCard from "@/components/blocks/news-card/NewsCard.vue";
import APagination from "@/components/blocks/APagination.vue";

const store = useNewsStore();
const { content, error } = storeToRefs(store);

const route = useRoute();

const props = defineProps({
	code: {
		type: String,
		required: true,
	},
});


const offset = ref(route.query.offset);
// TODO: getDynamicData 20
async function init() {
	await store.getSection({ path: props.code, query: { limit: Number(offset ) + 20 || 20 } });
}

init();


// TODO : add Pagination
// store.getPagination({
	// 	path: props.code,
	// 	query: { offset: pagination.value }
// });

</script>
