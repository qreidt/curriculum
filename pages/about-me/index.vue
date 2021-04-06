<template>
	<div class="">
		<div class="flex flex-row text-gray-700 dark:text-gray-100">
			<h1 class="text-5xl font-semibold">About Me</h1>
		</div>

		<hr class="my-5" />

		<div class="space-y-3">

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					My Name:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						Caio Quincoses Reidt
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					Nationality:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						American/Brazilian
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					Current Position:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						Full Stack Developer at Garnon
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					E-mail:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						caioreidt@gmail.com
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					Cell phone:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						+55 12 98868-2858
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					Address:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						Vista Verde - São José dos Campos - Brasil
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					Birth date:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						14/08/1998
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					Github:
					<a href="https://github.com/qreidt" target="_blank" class="underline font-semibold ml-2 text-gray-500 dark:text-gray-100">
						github.com/qreidt
					</a>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600 dark:text-gray-200">
					Spoken Languages:
					<span class="font-semibold ml-2 text-gray-500 dark:text-gray-100">
						Portuguese, English
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
				<span class="ml-10">Hi</span>, my name is Caio Quincoses Reidt, and if you are here, you probably are
				looking to know me better as a professional, so I will try to summarize my profile on this page in the
				best way I can. Also, I have distributed links that take to another page, listed on the menu on the right,
				for a more profound explanation on the topics I judged more interesting for your understanding about me.
				If you want to see the source code for the page you are reading now, you can find it
				<a href="https://github.com/qreidt/my-bio" class="underline text-primary-400" target="_blank">on it's github page</a>
			</p>

			<p>
				<span class="ml-10">I</span> have been working with computers since 2016, and now I am a computer science
				bachelor. I have always been fascinated by how computers can help us overcome our biggest obstacles. Now
				I work as a Full Stack developer at the startup Garnon, and our goal is to work to help others overcome
				their problems, and we all grow together with it. In this path, I have become a technology enthusiast who
				loves UNIX, Data Analysis, Engineering, and Science, among others.
			</p>

			<p>
				<span class="ml-10">Tools</span>, Languages, and Frameworks I know how to work with are Git, Visual Studio
				Code, IntelliJ IDEs, Windows, Linux (CentOS and Ubuntu/Mint), PHP, JavaScript, TypeScript, Laravel, VueJS,
				AdonisJS and SCRUM.
			</p>

			<h1 class="font-bold text-3xl">Education</h1>
			<ul class="list-disc ml-10">
				<li><b>2013 - 2016:</b> Computer technician course at Opção Technical College</li>
				<li><b>2017 - 2020:</b> Computer Science bachelor’s degree at UNIP</li>
				<li><b>Future:</b> Planning a postgraduate degree in Big Data.</li>
			</ul>

			<h1 class="font-bold text-3xl">Work</h1>
			<ul class="list-disc ml-10">
				<li><b>2016 - 2018:</b> Internship at Cassiano Ricardo Cultural Foundation</li>
				<li><b>2018 - 2019:</b> Level-1 Support at TIVIT</li>
				<li><b>2019 - Now:</b> Full Stack Developer at Garnon</li>
			</ul>

			<h1 class="font-bold text-3xl">My History</h1>

			<p>
				<span class="ml-10">I</span>I started to get interested in the Computing area in 2013 when I started
				taking the computing course at the “Opção Technical College”. There, I have learned about general
				computing with an emphasis on programming, especially PHP.
			</p>

			<p>
				<span class="ml-10">Before</span> graduating, I was hired by the Cassiano Ricardo Cultural Foundation as
				an intern where I should initially accomplish computer maintenance, network, and services like telephony,
				e-mail, VPN, and internet servers. After a few months in this function, by my request, I was moved to
				the developing team where I should contribute to the WEB applications development.
			</p>

			<p>
				<span class="ml-10">After</span> graduating from my technical course, I decided to follow the area and
				get a bachelor’s degree at UNIP. As I was planning to get a career in the system development area. I
				chose the computing science course over the engineering one because engineering does not have so many
				programming subjects itself. I began the course in January 2017 and graduated in December 2020, also
				winning the first-place prize at the programming Olympics I participated in, in 2018.
			</p>

			<p>
				<span class="ml-10">After</span> being an intern for one year and six months, I was hired in February
				2018 as a Level-1 Support Analyst at TIVIT. In this job, I initially got the task to attend and solve
				the Itaú Bank’s employees’ problems referring to technical problems on the phone. These problems could
				vary from simple problems like Outlook fails or connections with printers, until problems with VPN
				connections, and direct the contributor to a local attendance by a Level-2 Support. After a few months
				in that support, I was reassigned to the bank’s high ranking (probably due to my capacity to deal with
				problems in a calm way even under pressure) and beyond these computer supports, I was also in charge of
				the support for cell phones and video meetings (attendance needed for existing skilled equipment to this
				function).
			</p>

			<p>
				<span class="ml-10">As</span> a job as a developer was always a priority for me, in February 2019, I
				left my job as a Support Analyst to work as a Web Developer at a startup named Garnon. There, Laravel
				Framework was Always used, a tool which I dominated in just a few months and kept on perfecting my
				knowledge. After a few months, it was decided to switch the JQuery library to use Framework VueJS, a
				tool which I also dominated overtime. After a while, I was also able to deal with complex tasks such as
				integration with payment gateways, services of invoice emission, highly complex algorithms to automatically
				contact 50K+ end-users daily (by multiple communication channels), and even streaming services implementation.
			</p>

			<h1 class="font-bold text-3xl">Now</h1>
			<div>
				<span class="ml-10">Nowadays</span>, I am a Full Stack developer by Garnon and my responsibilities include:
				<ul class="list-disc ml-10 mt-2">
					<li>Developing REST APIs;</li>
					<li>Developing system interfaces for end-users;</li>
					<li>Architecting databases and their business rules;</li>
					<li>Implementing new technologies in existing projects whenever it is possible;</li>
					<li>Implementing problem solutions when detected;</li>
					<li>Deploying production servers and application settings.</li>
				</ul>
			</div>

			<h1 class="font-bold text-3xl">What I am learning</h1>

			<div>
				<p class="font-bold">C++:</p>
				<p>
					<span class="ml-10">It</span> is a compiled language and, comparatively, closer to the hardware level and
					low-level languages, which means that is also faster compared to most languages. I tend to practice it
					when learning algorithms.
				</p>
				<p>
					<span class="ml-10">Currently</span>, I am learning to implement the Ant Colony optimization to pathfinding
					and implementing a fast solution to the knapsack problem.
				</p>
			</div>

			<div>
				<p class="font-bold">Elixir:</p>
				<p>
					<span class="ml-10">A</span> programmin language built on top of the Erlang VM that connects functional
					programming with immutable states and an actor-based approach to concurrency. Learning functional
					programming makes you a better programmer, especially if you are used to working only with
					object-oriented languages, because it gives you a new perspective on programming, forcing your brain
					to go into overdrive.
				</p>
				<p>
					<span class="ml-10">Currently</span>, I am learning it while implementing an advanced financial management app.
				</p>
			</div>

			<div>
				<p class="font-bold">Python:</p>
				<p>
					<span class="ml-10">The</span> python language is one of the most accessible programming languages
					available because it has simplified syntax and is not complicated, which gives more emphasis on natural
					language. While it is a comparatively slow language, it is also a great glue language, which means that
					it is a great language to be used to connect tools written in other programming languages, which is the
					case of many vastly used libraries.
				</p>
				<p>
					<span class="ml-10">Currently</span>, I am using it to learn data analysis techniques and machine learning
					both subjects that I am highly interested in.
				</p>
			</div>
		</div>
	</div>
</template>

<script>

import MenuItemTag from '../../components/MenuItemTag';

export default {

	components: {
		'menu-item-tag': MenuItemTag
	},

	data: () => ({}),

	head () {
		return {
			title: 'Caio Reidt - About Me'
		};
	},

	computed: {
		tags () {
			return this.$parent.$parent.activeItem.tags;
		}
	}

};
</script>
