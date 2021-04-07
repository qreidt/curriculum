<template>
	<div class="">
		<div class="flex flex-row text-gray-700 dark:text-gray-100">
			<h1 class="text-5xl font-semibold">Garnon</h1>
		</div>

		<hr class="my-5" />

		<div class="space-y-3">

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					Role:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						Full-stack Developer
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					From:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						February 2019
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					To:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						Currently
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					Function:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						Create and maintain projects using Laravel, Vue, and other tecnologies when needed
					</span>
				</span>
			</div>
		</div>

		<div class="flex flex-row mt-6">
			<div class="-mx-1">
				<menu-item-tag v-for="(tag, i) in tags" :key="i" :text="tag" class="mx-1 my-1.5 float-left" />
			</div>
		</div>

		<hr class="my-5" />

		<div class="space-y-7 md:space-y-10 text-justify font-normal text-lg md:text-xl">

			<p>
				<span class="ml-10">Garnon</span> is a startup that started in 2018, offering platforms for companies to
				better manage their businesses and grow bigger. The company's rule to get new clients have always been
				"Only take new clients as long as our relationship can be of investment and not cost.".
			</p>

			<div class="flex flex-grow h-96 overflow-x-auto space-x-4 mb-4">
				<img class="object-contain float-left max-w-none" src="/garnon1.jpeg" alt="Garnon" />
				<img class="object-contain float-left max-w-none" src="/garnon2.jpeg" alt="Garnon" />
			</div>

			<p>
				<span class="ml-10">In</span> 2019, when I got hired as a Junior Web Developer, my job was to maintain
				existing projects and learn Laravel and VueJS on the way.
			</p>

			<div>
				<p>
					<span class="ml-10">By</span> July 2019, I got promoted to a Junior Full-stack Developer. The role
					change was due to the roles I was about to get assigned to. These roles were:
				</p>
				<ul class="list-disc ml-10 mt-2">
					<li>Create and plan the database relations for new projects or features for existing ones;</li>
					<li>Solve problems involving large quantities of data and complex logics;</li>
					<li>Implement complex services for projects like stream servers;</li>
					<li>Implement features for mobile devices in React Native;</li>
					<li>Work directly with clients;</li>
					<li>Implement new technologies when starting new projects;</li>
					<li>Managing servers and installing projects on these servers.</li>
				</ul>
			</div>

			<p>
				<span class="ml-10">In</span> March 2021, I got promoted to Full-stack Developer, so I could now take
				management on some of the company's projects.
			</p>
		</div>
	</div>
</template>

<script>

import MenuItemTag from '../../components/MenuItemTag';

export default {

	components: {
		'menu-item-tag': MenuItemTag
	},

	data: () => ({

	}),

	head () {
		return {
			title: 'Caio Reidt - Garnon'
		};
	},

	computed: {
		tags () {
			return this.$parent.$parent.activeItem.tags;
		}
	}

};
</script>
