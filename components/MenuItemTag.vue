<template>
	<div class="text-xs bg-orange-100 text-orange-400 py-0.5 px-1 rounded uppercase">#{{ text }}</div>
</template>

<script>
export default {
	name: 'MenuItemTag',
	props: {
		text: {
			type: String,
			default: () => ''
		}
	}
};
</script>

<style scoped>
	.text-xs {
		font-size: 0.7rem !important;
		letter-spacing: 0.05rem;
	}
</style>
