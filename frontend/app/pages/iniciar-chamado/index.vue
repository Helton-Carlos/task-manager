<script setup lang="ts">
const name = ref<string>("John Doe");
const today = new Date(Date.UTC(96, 11, 1, 0, 0, 0));
const typeCall = ref<string>("Financeiro");
const sector = ref<string>("");
const company = ref<string>("");
const priority = ref<string>("");

const companyOption = [
  { value: "suco", name: "Caso do suco" },
  { value: "logistica", name: "Dia de logistica" },
];

const statusOption = [
  { value: "sem", name: "Sem prioridade" },
  { value: "baixo", name: "Baixa" },
  { value: "medio", name: "Médio" },
  { value: "alta", name: "Alta" },
  { value: "altíssima", name: "Altíssima" },
];

const sectorOption = [
  { value: "atendimento", name: "Atendimento ao Cliente (SAC)" },
  { value: "help_desk", name: "Help Desk / Suporte Técnico" },
  { value: "service_desk", name: "Service Desk" },
  { value: "comercial", name: "Comercial / Vendas" },
  { value: "financeiro", name: "Financeiro / Cobrança" },
  { value: "administrativo", name: "Administrativo" },
  { value: "rh", name: "Recursos Humanos (RH)" },
  { value: "ti", name: "Tecnologia da Informação (TI)" },
  { value: "desenvolvimento", name: "Desenvolvimento / Engenharia" },
  { value: "marketing", name: "Marketing" },
  { value: "logistica", name: "Logística / Operações" },
  { value: "cs", name: "Customer Success (Sucesso do Cliente)" },
];
</script>

<template>
  <div class="container">
    <h2>Criar chamado</h2>

    <div class="card-page flex flex-col gap-4">
      <h2>Preencha o formulário</h2>

      <div class="flex flex-wrap gap-4">
        <GTInput
          label-title="Colaborador"
          :model-value="name"
          type="text"
          placeholder="digite seu nome"
        />

        <GTSelect
          id="empresa"
          class="flex-1"
          label-title="Empresa"
          :model-value="company"
          placeholder="ex: casa do suco"
          :options="companyOption"
        />

        <GTInput
          label-title="Dia do atendimento"
          :model-value="today"
          type="date"
        />
      </div>

      <div class="flex gap-4">
        <GTInput
          label-title="Tipo de atendimento"
          :model-value="typeCall"
          type="text"
          placeholder="Financeiro"
        />

        <GTSelect
          id="status"
          class="flex-1"
          label-title="Status de prioridade"
          :model-value="priority"
          placeholder="ex: sem prioridade"
          :options="statusOption"
        />

        <GTSelect
          id="setores"
          class="flex-1"
          label-title="Possível Setores"
          :model-value="sector"
          placeholder="ex: Desenvolvimento"
          :options="sectorOption"
        />
      </div>

      <div>
        <GTButton to="/iniciar-chamado">
          <span>Criar chamado</span>
          <Icon name="lucide:plus" size="24" color="white" />
        </GTButton>
      </div>
    </div>
  </div>
</template>
