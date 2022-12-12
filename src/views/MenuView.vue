<template>
	<section class="section" v-if="menu">

		<!-- TODO: Add component navigation -->
		<nav class="a-menu">
			<ul class="row gx-64 gy-16">	
				<li v-for="item in menu" :key="item.section" class="col-auto fs-title-3 a-menu__item">
					<ALink
						:to="{
							name: 'section',
							params: { code: item.section },
						}"
						>{{ item.display_name }}</ALink
					>
				</li>
			</ul>
		</nav>
	</section>


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

// TODO: initizialization
const store = useNewsStore();
const { menu, error } = storeToRefs(store);
</script>


<style lang="scss">
.a-menu {
	&__item {
		transition: transform 0.2s;
		@media(hover:hover) {
			&:hover {
				font-style: italic;
				transform: translate3d(1.5rem,0,0);
			}
		}
	}
}
</style>