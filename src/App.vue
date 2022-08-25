<template>
	<AppLayout>
		<router-view v-slot="{ Component }">
			<!-- <transition> -->
				<component :is="Component" :key="$route.path"></component>
			<!-- </transition> -->
		</router-view>
	</AppLayout>
</template>

<script setup>
import AppLayout from "@/layouts/AppLayout";

import { useNewsStore } from "@/stores/NewsStore";

const store = useNewsStore();

async function init() {
	await store.getMenu();
}

init();

</script>
