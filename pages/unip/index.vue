<template>
	<div class="">
		<div class="flex flex-row text-gray-700 dark:text-gray-100">
			<h1 class="text-5xl font-semibold">UNIP</h1>
		</div>

		<hr class="my-5" />

		<div class="space-y-3">

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					Course:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						Computer Science Bachelor's Degree.
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					From:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						January 2017
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					To:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						December 2020
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
				<span class="ml-10">The</span> Paulista University, UNIP started operations on November 09th, 1988. It
				was established based on the Paulista Unified Institute (Instituto Unificado Paulista – IUP), and the
				Paulista Engineering Teaching Institute (Instituto de Ensino de Engenharia Paulista – IEEP). Thanks to
				its development since then, UNIP, through a modern academic proposal, has been expanding its activities
				to many different campuses, seeking to prepare highly qualified human resources as requested by the
				policies of national development.
			</p>

			<div class="flex flex-grow h-96 overflow-x-auto space-x-4 mb-4">
				<img class="object-contain float-left max-w-none" src="/unip1.jpg" alt="Garnon" />
				<img class="object-contain float-left max-w-none" src="/unip2.jpg" alt="Garnon" />
			</div>

			<p>
				<span class="ml-10">In</span> my first two years studying there, I got a more in-depth view of
				Object-Oriented Languages such as C# and Java, which were the mandatory languages to use in any
				homework-related projects. These projects were usually assigned every six months and required the
				students to put into practice what they've learned through the semester. Some of those were:
				cryptographing messages, using sockets to create real-time chat applications, face-recognizing security,
				and mobile apps.
			</p>

			<p>
				<span class="ml-10">On</span> the other half through my graduation course, the classes were about more
				theoretical subjects, such as how CPUs work and how clusters have to manage processes.
			</p>

			<p>
				<span class="ml-10">As</span> my final project for the course, my team and I decided to approach a
				relatively new technology called CUDA. CUDA is a technology developed by Nvidia to allow developers to
				use their GPUs for calculation-intensive applications such as Machine Learning, and Data Analysis. The
				objective of the project was to measure how much faster a Data Analysis task could be using CUDA over
				the traditional CPU. As an environment, the team decided to use Google's Colab Platform, which offered
				an Intel Xeon CPU and an Nvidia Quadro GPU freely. On performing a  Data Analysis task on 500MB of data,
				we concluded that processing data with CUDA Technology resulted in an average of 80% faster results.
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
			title: 'Caio Reidt - UNIP'
		};
	},

	computed: {
		tags () {
			return this.$parent.$parent.activeItem.tags;
		}
	}

};
</script>
