<template>
	<section class="section">
		<div class="row">
			<div class="col-12 col-lg-9">
				<!-- TODO: Fix update component on route -->
				<AArticle v-if="detail" :detail="detail" :key="detail"/>
			</div>
		</div>
	</section>

	<!-- TODO: Add error and loading -->
</template>

<script setup>
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useNewsStore } from "@/stores/NewsStore";
import AArticle from "@/components/blocks/AArticle.vue";

// TODO : Add comon initicialization for page

const store = useNewsStore();
const { detail } = storeToRefs(store);
const route = useRoute();

async function init() {
	await store.getDetail(route.path);
}

init();
</script>