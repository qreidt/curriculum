<template>
	<div class="">
		<div class="flex flex-row text-gray-700 dark:text-gray-100">
			<h1 class="text-5xl font-semibold">Opção Technical College</h1>
		</div>

		<hr class="my-5" />

		<div class="space-y-3">

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					Courses:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						High School and Computer Technician.
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					From:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						January 2013
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					To:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						December 2016
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
				<span class="ml-10">The</span> Colégio Técnico Opção was opened in 2003 with the challenge of offering
				students high-level professional technical training, carried out in line with the job market. Partnerships
				with companies, workshops, events, lectures, extracurricular activities and thematic groups are some of
				the tools created within the school that seek the training of students for the corporate world.
			</p>

			<p>
				<span class="ml-10">There</span>, I learned how to use databases, how computer networks work, how to
				document software, the basics of programming languages like Pascal, JavaScript, C#, Java, and PHP with
				a more in-depth view.
			</p>

			<p>
				<span class="ml-10">Also</span>, there I got the opportunity of creating projects with supervision that
				were a simple mobile game using Unity and C#, and a blog using CodeIgniter and PHP.
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
