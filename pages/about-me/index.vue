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
				cursar um curso de informática pelo <router-link to="/cto" class="underline text-blue-600">Colégio Técnico Opção</router-link>.
				Neste curso técnico aprendi sobre informática em geral com uma grande ênfase em programação,
				principalmente PHP. Antes de finalizar o curso técnico, fui contratado pela
				<router-link to="/cto" class="underline text-blue-600">Fundação Cultural Cassiano Ricardo (FCCR)</router-link>
				como estagiário e onde inicialmente deveria realizar a manutenção de computadores, redes e serviços
				como servidores de telefonia, de e-mail, de VPN e intranet. Após alguns meses exercendo esta função,
				a meu pedido, fui movido para a equipe de desenvolvimento onde deveria contribuir com o desenvolvimento
				de aplicações WEB.
			</p>

			<p>
				<span class="ml-10">Quando</span> finalizei meu ensino técnico decidi seguir na área de informática e
				conseguir um bacharelado pela faculdade <router-link to="/cto" class="underline text-blue-600">UNIP</router-link>.
				Como planejava seguir uma carreira na área de programação, decidi escolher o curso de Ciência da Computação
				sobre Engenharia da Computação pela engenharia não conter tantos assuntos aprofundados sobre computação em si.
				Comecei o curso em janeiro de 2017 e o finalizei em dezembro de 2020 inclusive quanhando um prêmio de primeiro
				lugar na olimpíada de progamação em que participei.
			</p>

			<p>
				<span class="ml-10">Após</span> Realizar 1 ano e 6 mêses de estágio, fui contratado em fevereiro de 2018
				como Analista de Suporte Nível 1 pela <router-link to="/cto" class="underline text-blue-600">TIVIT</router-link>.
				Neste cargo, inicialmente recebi a tarefa de atender e solucionar os problemas de colaboradores do Banco
				Itaú referentes à problemas de informática via telefone. Estes problemas poderiam variar desde problemas
				simples como falhas no Outlook ou conexões com impressoras, até problemas com conexões de VPN, e direcionar
				o colaborador para um atendimento no local por um Suporte Nível 2. Após alguns meses atuando neste suporte,
				fui redesignado para atender o alto escalão do Banco Itaú (provalmente pela minha capacidade de lidar com
				problemas de forma calma mesmo sobre pressão) e além deste suporte de computadores, fiquei encarregado também
				do suporte para telefones celulares e reuniões de vídeo conferência (atendimento necessário por existir
				equipamento especializado para esta função).
			</p>

			<p>
				<span class="ml-10">Como</span> um cargo como Desenvolvedor sempre foi uma prioridade para mim, em
				fevereiro de 2019, deixei meu cargo como Analista de Suporte para trabalhar como um Desenvolvedor Web
				em uma startup chamada <router-link to="/garnon" class="underline text-blue-600">Garnon</router-link>.
				Nesta empresa sempre foi utilizado o Framework <router-link to="/garnon" class="underline text-blue-600">Laravel</router-link>
				ferramenta que dominei em apenas alguns mêses e continuei aperfeiçoando meu conhecimento. Após alguns
				meses de empresa também, foi-se decidido trocar o uso da biblioteca JQuery para utilizar o Framework
				<router-link to="/garnon" class="underline text-blue-600">VueJS</router-link>, ferramenta que também
				dominei com o passar do tempo. Com o passar do tempo, fui sendo capaz também de lidar com tarefas complexas
				como integração com gateways de pagamento, integração com serviços de emissão de notas fiscais e implementação
				de serviços de streaming.
			</p>

			<div>
				<span class="ml-10">Hoje</span>, sou um desenvolvedor Fullstack pela Garnon e minhas responsábilidades incluem:
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
