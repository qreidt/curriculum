<template>
	<div class="flex flex-col md:flex-row h-screen">
		<div class="z-0 flex flex-row w-full md:w-auto bg-gray-50 dark:bg-gray-800 w-1/3 p-4 border-r dark:border-gray-500 border-opacity-60 shadow-xl">
			<div class="flex flex-col w-full space-y-5">
				<div class="flex flex-row flex-none items-center justify-between">
					<a class="flex flex-row items-center dark:text-gray-100 font-semibold" @click="open = !open">
						<img :src="profile_image_path" alt="profile_image" class="rounded-full w-8 h-8" />
						<h1 class="text-2xl ml-2">Caio Reidt</h1>
						<div class="text-xl block md:hidden ml-3">
							<i class="chevron fa fa-chevron-right" :data-open="open" />
						</div>
					</a>

					<button v-if="dark" class="cursor-pointer bg-gray-700 text-gray-50 rounded px-2 py-1 text-xs hover:bg-gray-100 hover:text-gray-700 focus:outline-none" @click="changeTheme">
						<i class="fa fa-sm fa-sun" /> Light Mode
					</button>
					<button v-else class="cursor-pointer bg-gray-100 rounded px-2 py-1 text-xs hover:bg-gray-700 hover:text-yellow-400 focus:outline-none" @click="changeTheme">
						<i class="fa fa-sm fa-moon" /> Dark Mode
					</button>
				</div>

				<div class="z-10 menu-items flex-auto overflow-y-auto -mx-2 border-t md:block" :class="{'block': open, 'hidden': !open}">
					<menu-item
						v-for="(item, i) in items"
						:key="i"
						:active="item.active"
						:content="item"
						:max-tags="3"
						:click="setActive"
						:index="i"
					/>
				</div>
			</div>
		</div>

		<Nuxt class="w-full md:w-2/3 flex flex-row flex-col px-5 md:px-16 pt-8 md:pt-20 overflow-y-auto pb-10 text-gray-600 dark:bg-gray-700 dark:text-gray-200" />

	</div>
</template>

<script>

export default {
	data: () => ({

		dark: false,

		open: true,

		// profile_image_path: 'https://ui-avatars.com/api/?name=Caio+Reidt&bold=true&size=128&rounded=true&background=FFB74D',
		profile_image_path: 'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/104578761_10215856208749652_3950952467235166773_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=coFppHRRD6gAX_3e4ZT&_nc_ht=scontent.fsjk1-1.fna&oh=1033be7dcd8b9a3c89879909c1977144&oe=60466B35',

		items: [
			{
				active: false,
				uppertext: 'May 5',
				title: 'Visual Inspiration',
				subtext: 'Let\'s collect inspiration for our truck and menu designs',
				tags: ['tagname', 'foodtruck', 'design', 'menu', 'plan', 'share'],
				url: '/visual-inspiration'
			},
			{
				active: false,
				uppertext: 'May 5',
				title: 'Locations',
				subtext: '@Steve @Julia - here are sone ideas I have for potential locations. We\'ll need to check with the city to make sure we can park the truck to extended periods of time. I have a call next week to learn more about the policies',
				tags: ['tagname', 'foodtruck', 'design', 'menu', 'plan'],
				url: '/locations'
			},
			{
				active: false,
				uppertext: 'May 5',
				title: 'Business Plan',
				subtext: 'I Wanted to create a note to track our business plan and some to-dos',
				tags: ['tagname', 'foodtruck', 'design', 'menu'],
				url: '/business-plan'
			}
		]
	}),

	computed: {
		activeItem () {
			const activeItem = this.items.find(item => item.active);

			if (!activeItem) return {};
			else return activeItem;
		}
	},

	beforeMount () {

		const active_route = this.items.find(item => item.url === this.$route.path);

		if (active_route) {
			active_route.active = true;
		}
	},

	methods: {
		changeTheme () {
			this.dark = !this.dark;
		},

		setActive (i) {
			this.activeItem.active = false;
			this.items[i].active = true;

			this.$router.push(this.activeItem.url);

			this.open = false;
		}
	},

	head () {
		return {
			htmlAttrs: {
				class: this.dark ? 'dark' : ''
			}
		};
	}

};
</script>

<style scoped>
.menu-items {
	animation: items-down .15s ease;
}

@keyframes items-down {
	0% {
		opacity: 0;
		transform: translateY(-15%);
	}
	100% {
		opacity: 100%;
		transform: translateY(0);
	}
}

.chevron {
	transition: all .15s ease;
}

.chevron[data-open=true] {
	transform: rotate(90deg);
}

</style>
