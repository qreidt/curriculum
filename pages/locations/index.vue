<template>
	<div class="">
		<div class="flex flex-row text-gray-700 dark:text-gray-100">
			<h1 class="text-4xl font-semibold">Visual Inspiration</h1>
		</div>

		<div class="flex flex-row mt-6">
			<div class="-mx-1">
				<menu-item-tag v-for="(tag, i) in tags" :key="i" :text="tag" class="mx-1 my-1.5 float-left" />
			</div>
		</div>

		<hr class="my-5" />

		<div class="space-y-4">
			<div class="font-light text-lg">
				Let’s collect inspiration for our truck and menu designs!
			</div>

			<div class="font-bold font-medium text-xl">
				Truck design:
			</div>

			<div class="flex flex-grow h-96 overflow-x-auto space-x-4 mb-4">
				<img class="object-contain float-left" src="https://images.unsplash.com/photo-1611744314001-6f555577e8f4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1300&q=80" alt="img1" />
				<img class="object-contain float-left" src="https://images.unsplash.com/photo-1611396000732-f8c9a933424f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" alt="img2" />
				<img class="object-contain float-left" src="https://images.unsplash.com/photo-1612094264491-73d6c8758510?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" alt="img3" />
				<img class="object-contain float-left" src="https://images.unsplash.com/photo-1471666875520-c75081f42081?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1438&q=80" alt="img4" />
			</div>

			<div class="font-light text-lg">
				We want our customers to congregate outside of the truck and feel comfortable hanging out with us!
			</div>

			<div class="font-light text-lg">
				Some ideas for how we can do this:
				<ul class="list-disc ml-8 mt-2">
					<li>A big window so we can greet customers with smiling faces</li>
					<li>An overhang so customers won’t have to squint or shield their eyes from the sun</li>
					<li>A collapsible shelf along the side of the truck for sauces/napkins/utensils</li>
					<li>Some cafe lights to draw attention to the truck</li>
					<li>Food containers that are easy to hold!</li>
				</ul>
			</div>

			<div>
				<span class="font-bold">@Steve</span> - would we be able to set up some tables and chairs? It’d be great if our customers could sit and eat!
			</div>

			<div class="font-bold font-medium text-xl">
				Menu design:
			</div>

			<div>
				We should keep the menu simple - just a few different kinds of tacos. We’ll need options for dietary restrictions too. Do you have any ideas for this, <strong>@Julia?</strong>
			</div>

			<div>
				As far as design, I was thinking a big chalkboard menu. Here are some inspiration photos I found:
			</div>

			<div class="flex flex-grow h-96 overflow-x-auto space-x-4 mb-4">
				<img class="object-contain float-left" src="https://images.unsplash.com/photo-1611532736419-bfe35e04dd78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="img1" />
				<img class="object-contain float-left" src="https://images.unsplash.com/photo-1608699565448-9492aaf3c708?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1420&q=80" alt="img2" />
				<img class="object-contain float-left" src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1346&q=80" alt="img3" />
			</div>

		</div>
	</div>
</template>

<script>

export default {

	data: () => ({

	}),

	computed: {
		tags () {
			return this.$parent.$parent.activeItem.tags;
		}
	}

};
</script>
