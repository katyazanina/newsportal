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
					<NewsCard v-bind="item"></NewsCard>
				</div>
			</div>

			<span
				class="fs-title-3 text-center"
				ref="more"
				v-if="pagination !== maxQuantityOfItem"
				>{{error || 'Loading...' }}</span
			>
		</section>
	</div>
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
import { storeToRefs } from "pinia";
import { useNewsStore } from "@/stores/NewsStore";
import { defineProps, ref } from "vue";
import { useRoute,useRouter } from "vue-router";

import NewsCard from "@/components/blocks/NewsCard.vue";

const store = useNewsStore();
const { content, error } = storeToRefs(store);

const route = useRoute();
const router = useRouter();

const props = defineProps({
	code: {
		type: String,
		required: true,
	},
});

const quantityOfItem = 20;
const maxQuantityOfItem = 500;
const more = ref(null);

const pagination = ref(Number(route.query.offset) + quantityOfItem || quantityOfItem);

init().finally(()=>{
	if(more.value) {
		intersectionObserver.observe(more.value);
	}
});

async function init() {
	await store.getSection({ path: props.code, query: { limit: Number(route.query.offset ) + quantityOfItem || quantityOfItem } });
}

const intersectionObserver = new IntersectionObserver((entries) => {
	if (entries[0].intersectionRatio <= 0) return;
	loadMore();
});

async function loadMore() {
	const delay = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

	delay(1800)
		.then(() =>
			store.getSection({
				path: props.code,
				query: { offset: pagination.value }
			})
		).then(() => {
		}).finally(()=>{
			router.push({ query: { offset: pagination.value } });
			const result = pagination.value + quantityOfItem;
			pagination.value = result.value > maxQuantityOfItem ? maxQuantityOfItem : result;
		});
}
</script>
