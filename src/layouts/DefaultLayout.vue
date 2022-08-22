<template>
	<AppHeader/>
	<main>
		<div class="container">
			<slot/>
		</div>
	</main>
	<AppFooter/>
</template>

<script>

export default {
	name: "DefaultLayout",
};
</script>
