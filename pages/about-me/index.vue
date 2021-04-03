<template>
	<div class="">
		<div class="flex flex-row text-gray-700 dark:text-gray-100">
			<h1 class="text-5xl font-semibold">Quem sou</h1>
		</div>

		<hr class="my-5" />

		<div class="space-y-3">

			<div>
				<span class="font-bold text-gray-600">
					Meu Nome:
					<span class="font-semibold ml-2 text-gray-500">
						Caio Quincoses Reidt
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600">
					Nacionalidade:
					<span class="font-semibold ml-2 text-gray-500">
						Brasileiro/Estadunidense
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600">
					Cargo Atual:
					<span class="font-semibold ml-2 text-gray-500">
						Fullstack Developer at Garnon
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600">
					E-mail:
					<span class="font-semibold ml-2 text-gray-500">
						caioreidt@gmail.com
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600">
					Celular:
					<span class="font-semibold ml-2 text-gray-500">
						+55 12 98868-2858
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600">
					Endereço:
					<span class="font-semibold ml-2 text-gray-500">
						Vista Verde - São José dos Campos - Brasil
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600">
					Data de Nascimento:
					<span class="font-semibold ml-2 text-gray-500">
						14/08/1998
					</span>
				</span>
			</div>

			<div>
				<span class="font-bold text-gray-600">
					Github:
					<a href="https://github.com/qreidt" class="underline font-semibold ml-2 text-gray-500">
						github.com/qreidt
					</a>
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
				<span class="ml-10">Olá</span>, meu nome é Caio Quincoses Reidt e se você está aqui, provavelmente deve
				estar procurando me conhecer melhor, então vou tentar resumir meu perfil da melhor maneira possível
				nesta página.
			</p>

			<p>
				<span class="ml-10">Trabalho</span> com computadores desde 2016 e hoje sou graduado em ciência da computação.
				Sempre me senti fascinado em como cumputadores podem nos adjudar a superar mesmo os nossos maiores obstáculos.
				Hoje trabalho como um Desenvolvedor Fullstack na empresa Garnon e temos como objetivo trabalhar para
				ajudar outros a superarem seus problemas e todos crescermos juntos com isto. Nesta trilha, me tornei um
				entusiasta de tecnologia que adora UNIX, Data Analysis, Engenharia e Ciência, entre outros assuntos.
			</p>

			<p>
				<span class="ml-10">Comecei</span> a me interessar pela área de informática em 2013 quando comecei a
				cursar um curso de informática pelo <router-link to="/cto" class="underline">Colégio Técnico Opção</router-link>.
				Neste curso técnico aprendi sobre informática em geral com uma grande ênfase em programação,
				principalmente PHP. Antes de finalizar o curso técnico, fui contratado pela
				<router-link to="/cto" class="underline">Fundação Cultural Cassiano Ricardo (FCCR)</router-link>
				como estagiário e onde inicialmente deveria realizar a manutenção de computadores, redes e serviços
				como servidores de telefonia, de e-mail, de VPN e intranet. Após alguns meses exercendo esta função,
				a meu pedido, fui movido para a equipe de desenvolvimento onde deveria contribuir com o desenvolvimento
				de aplicações WEB.
			</p>

			<div>
				<span class="ml-10">Sou</span> um desenvolvedor Fullstack pela Garnon e minhas responsábilidades incluem:
				<ul class="list-disc ml-6 mt-2">
					<li>Desenvolver APIs REST</li>
					<li>Desenvolver arquiteturas de interface de sistema</li>
					<li>Arquitetar bases de dados e suas regras de negócio</li>
					<li>Implementar novas tecnologias em projetos existentes quando possível</li>
					<li>Implementar soluções de problemas quando detectadas</li>
					<li>Configuração de Servidores e Deploy de aplicações</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

export default {

	data: () => ({}),

	computed: {
		tags () {
			return this.$parent.$parent.activeItem.tags;
		}
	}

};
</script>
