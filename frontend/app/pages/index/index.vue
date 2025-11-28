<template>
  <div class="container">
    <div class="flex flex-wrap gap-8 mt-8">
      <div class="card flex flex-col gap-4">
        <h3 class="flex items-center gap-2">
          <Icon name="lucide:clipboard-plus" size="24" color="white" />
          Criar chamado
        </h3>

        <p class="flex-1">
          Crie um novo chamado para o seu cliente, com o objetivo de melhorar a
          satisfação do cliente e aumentar a retenção de clientes.
        </p>

        <div class="flex justify-end">
          <nuxt-link to="/iniciar-chamado" class="btn-secondary">
            Criar chamado <Icon name="lucide:plus" size="24" color="white" />
          </nuxt-link>
        </div>
      </div>

      <div class="card flex flex-col gap-4">
        <h3 class="flex items-center gap-2">
          <Icon name="lucide:history" size="24" color="white" />
          Histórico de chamados
        </h3>

        <p class="flex-1">
          Verifique o histórico de chamados para o seu cliente, com o objetivo
          de melhorar a satisfação do cliente e aumentar a retenção de clientes.
        </p>

        <div class="flex justify-end">
          <nuxt-link to="/historico" class="btn-secondary">
            Verificar histórico
            <Icon name="lucide:list-check" size="24" color="white" />
          </nuxt-link>
        </div>
      </div>

      <div class="card flex flex-col gap-4">
        <h3 class="flex items-center gap-2">
          <Icon name="lucide:users" size="24" color="white" />
          Pesquisa de clientes
        </h3>

        <p class="flex-1">
          Pesquise por clientes para o seu negócio, com o objetivo de melhorar a
          satisfação do cliente e aumentar a retenção de clientes.
        </p>

        <div class="flex justify-end">
          <nuxt-link to="/clientes" class="btn-secondary">
            Procurar cliente
            <Icon name="lucide:users" size="24" color="white" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
