<template>
	<div class="">
		<div class="flex flex-row text-gray-700 dark:text-gray-100">
			<h1 class="text-5xl font-semibold">TIVIT</h1>
		</div>

		<hr class="my-5" />

		<div class="space-y-3">

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					Role:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						Level-1 Support
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					From:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						February 2018
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					To:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						February 2019
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					Function:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						Provide phone support, as a third party, for Itaú employees.
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
				<span class="ml-10">TIVIT</span> is a Brazilian multinational specialized in digital solutions, with
				operations in 10 Latin American countries and in 2016, was considered one of the three largest information
				technology service providers in Brazil.
			</p>

			<div class="flex flex-grow h-96 overflow-x-auto space-x-4 mb-4">
				<img class="object-contain float-left max-w-none" src="/tivit2.jpg" alt="TIVIT" />
				<img class="object-contain float-left max-w-none" src="/tivit.jpg" alt="TIVIT" />
			</div>

			<p>
				<span class="ml-10">The</span> primary role assigned to me at TIVIT was to give computer-related support
				to Itaú (one of the biggest banks in Brazil) employees through the phone. Then, a few months in the role,
				I got new assignments, as I would now need to also give iPhone-related support, and assist the management
				of cisco's video-conference specialized tools. Also, this new support would now need to be exclusive only
				to the higher ranks of Itaú.
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
			title: 'Caio Reidt - TIVIT'
		};
	},

	computed: {
		tags () {
			return this.$parent.$parent.activeItem.tags;
		}
	}

};
</script>
