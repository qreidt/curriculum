<template>
	<div
		class="block cursor-pointer p-4 space-y-2 border-b dark:text-gray-100"
		:class="active && 'bg-primary-400 bg-opacity-20' || 'hover:bg-gray-100 dark:hover:bg-gray-900'"
		@click="click(index)"
	>
		<div class="flex flex-row">
			<div class="text-gray-400 text-xs uppercase dark:text-gray-200">{{ content.uppertext }}</div>
		</div>

		<div class="flex flex-row pb-1">
			<h1 class="font-semibold dark:text-white">{{ content.title }}</h1>
		</div>

		<div class="flex flex-row">
			<div class="text-sm text-gray-400 dark:text-gray-200">{{ truncatedText }}</div>
		</div>

		<div class="flex flex-row -mx-1 items-center font-semibold">
			<menu-item-tag v-for="(tag, i) in truncatedTags" :key="i" :text="tag" class="mx-1" />
			<div v-if="content.tags.length > maxTags" class="text-xs text-gray-500 dark:text-gray-300">
				+ {{ content.tags.length - maxTags }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MenuItem',
	props: {
		active: {
			type: Boolean,
			default: () => false
		},

		content: {
			type: Object,
			default: () => ({
				title: '',
				subtext: '',
				active: false,
				tags: []
			})
		},

		maxWords: {
			type: Number,
			default: () => 18
		},

		maxCharacters: {
			type: Number,
			default: () => 80
		},

		maxTags: {
			type: Number,
			default: () => 4
		},

		click: {
			type: Function,
			default: () => (_) => {}
		},

		index: {
			type: Number,
			default: 0
		}
	},

	computed: {
		truncatedText () {

			const words = this.content.subtext.split(' ');
			const characters = this.content.subtext.split('');

			if (words.length > this.maxWords) {
				return words.slice(0, this.maxWords).join(' ') + '...';
			}

			if (characters.length > this.maxCharacters) {
				return characters.slice(0, this.maxCharacters).join('') + '...';
			}

			return this.content.subtext;
		},

		truncatedTags () {

			if (this.content.tags.length > this.maxTags) {
				return this.content.tags.slice(0, this.maxTags);
			}

			return this.content.tags;
		}
	}
};
</script>

<style scoped>
.text-xs {
	font-size: 0.65rem !important;
	letter-spacing: 0.05rem;
}
</style>
