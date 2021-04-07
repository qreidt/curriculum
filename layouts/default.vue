<template>
	<div class="flex flex-col md:flex-row h-screen">
		<div class="z-0 flex flex-row w-full md:w-auto bg-gray-100 dark:bg-gray-800 w-1/3 p-4 md:pr-2.5 md:pb-0 border-r dark:border-gray-500 border-opacity-60 shadow-xl">
			<div class="flex flex-col w-full space-y-5">
				<div class="flex flex-row flex-none items-center justify-between">
					<a class="flex flex-row items-center dark:text-gray-100 font-semibold" @click="open = !open">
						<img
							:src="profile_image_path"
							alt="profile_image"
							class="rounded-full w-8 h-8"
							loading="lazy"
							width="32"
							height="32"
						/>
						<h1 class="text-2xl ml-2">Caio Reidt</h1>
						<div class="text-xl block md:hidden ml-3">
							<i class="chevron fa fa-chevron-right" :data-open="open" />
						</div>
					</a>

					<button v-if="dark" class="cursor-pointer bg-gray-700 font-semibold text-gray-50 rounded px-2 py-1 text-xs hover:bg-gray-100 hover:text-gray-700 focus:outline-none" @click="changeTheme">
						<i class="fa fa-sm fa-sun mr-2" /> Light Mode
					</button>
					<button v-else class="cursor-pointer bg-gray-200 font-semibold rounded px-2 py-1 text-xs hover:bg-gray-700 hover:text-yellow-400 focus:outline-none" @click="changeTheme">
						<i class="fa fa-sm fa-moon mr-2" /> Dark Mode
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

		<Nuxt class="w-full flex flex-row flex-col flex-grow px-5 md:px-16 pt-8 md:pt-20 overflow-y-auto pb-10 bg-gray-50 text-gray-600 dark:bg-gray-700 dark:text-gray-200" />

	</div>
</template>

<script>

export default {
	data: () => ({

		dark: false,

		open: true,

		// profile_image_path: 'https://ui-avatars.com/api/?name=Caio+Reidt&bold=true&size=128&rounded=true&background=FFB74D',
		profile_image_path: '/profile.jpg',

		items: [
			{
				active: false,
				uppertext: 'About Me',
				title: 'Who is Caio',
				subtext: 'Hi, my name is Caio Quincoses Reidt, and if you are here, you probably are looking to know me better as a professional, so I will try to summarize my profile on this page in the best way I can.',
				tags: ['Main', 'History', 'Education', 'Work', 'Learning'],
				url: '/about-me'
			},
			{
				active: false,
				uppertext: 'Work',
				title: 'Cassiano Ricardo Cultural Foundation',
				subtext: 'Founded on March 20, the Cassiano Ricardo Cultural Foundation was created with the intent to foster cultural actions in the city and enable the citizen of São José dos Campos to have access to culture, a fundamental path to human development.',
				tags: ['2016', '2018', 'Internship', 'Support', 'Development'],
				url: '/fccr'
			},
			{
				active: false,
				uppertext: 'Work',
				title: 'TIVIT',
				subtext: 'TIVIT is a Brazilian multinational specialized in digital solutions, with operations in 10 Latin American countries and in 2016, was considered one of the three largest information technology service providers in Brazil.',
				tags: ['2018', '2019', 'Level-1 Support'],
				url: '/tivit'
			},
			{
				active: false,
				uppertext: 'Work',
				title: 'Garnon',
				subtext: 'Garnon is a startup that started in 2018, offering platforms for companies to better manage their businesses and grow bigger. The company\'s rule to get new clients have always been "Only take new clients as long as our relationship can be of investment and not cost.".',
				tags: ['2019', 'Now', 'Full-stack', 'Development'],
				url: '/garnon'
			},
			{
				active: false,
				uppertext: 'Education',
				title: 'Opção Technical College',
				subtext: '',
				tags: ['Computing', '2013', '2016'],
				url: '/cto'
			},
			{
				active: false,
				uppertext: 'Education',
				title: 'UNIP',
				subtext: '',
				tags: ['Computer Science', 'Bachelor', '2017', '2020'],
				url: '/unip'
			}
			// {
			// 	active: false,
			// 	uppertext: 'Work Experience',
			// 	title: 'Laravel',
			// 	subtext: '',
			// 	tags: ['PHP', 'Backend', 'Frontend'],
			// 	url: '/laravel'
			// },
			// {
			// 	active: false,
			// 	uppertext: 'Work Experience',
			// 	title: 'AdonisJS',
			// 	subtext: '',
			// 	tags: ['JavaScript', 'Backend', 'Frontend'],
			// 	url: '/adonis'
			// },
			// {
			// 	active: false,
			// 	uppertext: 'Work Experience',
			// 	title: 'VueJS',
			// 	subtext: '',
			// 	tags: ['JavaScript', 'Frontend'],
			// 	url: '/vuejs'
			// }
		]
	}),

	head () {
		return {
			htmlAttrs: {
				class: this.dark ? 'dark' : ''
			}
		};
	},

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
	}

};
</script>

<style>

::-webkit-scrollbar {
	width: 0.5rem;
	height: 0.5rem;
}

::-webkit-scrollbar-track {
	border-radius: 10px;
	background: rgba(211, 211, 211, 0.1);
}

::-webkit-scrollbar-thumb {
	border-radius: 10px;
	background-color: #d3d3d3;
}

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

.content-table {
	border-collapse: separate;
	border-spacing: 0 1rem;
}

.content-table tr td:first-child {
	width: 1%;
	white-space: nowrap;
}

</style>
