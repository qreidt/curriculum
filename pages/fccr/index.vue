<template>
	<div class="">
		<div class="flex flex-row text-gray-700 dark:text-gray-100">
			<h1 class="text-5xl font-semibold">Cassiano Ricardo Cultural Foundation</h1>
		</div>

		<hr class="my-5" />

		<div class="space-y-3">

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					Role:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						Intern
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					From:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						August 2016
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					To:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						February 2018
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					Function:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						Provide support for employee computers, servers and websites
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
				<span class="ml-10">Founded</span> on March 20<sup>th</sup>, 1986, the Cassiano Ricardo Cultural Foundation
				was created with the intent to foster cultural actions in the city and enable the citizen of São José
				dos Campos to have access to culture, a fundamental path to human development.
			</p>

			<div class="flex flex-grow h-96 overflow-x-auto space-x-4 mb-4">
				<img class="object-contain float-left max-w-none" src="/fccr1.jpeg" alt="Cassiano Ricardo Cultural Foundation" />
				<img class="object-contain float-left max-w-none" src="/fccr2.jpg" alt="Cassiano Ricardo Cultural Foundation" />
			</div>

			<div>
				<p>
					<span class="ml-10">My</span> function as an intern was to solve problems on employee's computers
					(such as "It won't turn on" or "My printer is not working"). Also, I had to work on managing many
					servers, which were:
				</p>
				<ul class="list-disc ml-10 mt-2">
					<li><b>Asterisk</b>: responsible for the company's virtual telephone lines;</li>
					<li><b>Active Directory</b>: service for the user management on Windows Systems;</li>
					<li><b>PFSense</b>: Firewall and Proxy services for the company's private network and branches VPNs;</li>
					<li><b>Intranet</b>: Web Service available for employees to open tickets and exchange files;</li>
					<li><b>Zimbra</b>: responsible for the e-mail management inside the company.</li>
				</ul>
			</div>

			<p>
				<span class="ml-10">After</span> a few months, I asked to go over to the Development Team, which was
				responsible for handling the company's institutional page using PHP,  Joomla, and JQuery, while also
				creating new Python scripts for automation.
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
			title: 'Caio Reidt - Cassiano Ricardo Cultural Foundation'
		};
	},

	computed: {
		tags () {
			return this.$parent.$parent.activeItem.tags;
		}
	}

};
</script>
