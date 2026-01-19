<script setup lang="ts">
import { useApi } from "~/composables/useApi";
import type { Task } from "~/types/task";

const { get } = useApi();

const { data } = await get<Task>("/tasks/get-all-task");
</script>

<template>
  <div class="container">
    <h2>Histórico de chamado</h2>
    <div class="card-page flex flex-col gap-4">
      <h2>Ultimos Histórico</h2>

      <table>
        <thead>
          <tr class="border-4 border-b-gray-500 p-2">
            <td class="font-bold">Nome</td>
            <td class="font-bold">Horario</td>
            <td class="font-bold">Tipo</td>
            <td class="font-bold">Setor</td>
            <td class="font-bold">Empresa</td>
            <td class="font-bold">Prioridade</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="info in data" :key="info.task_id" class="py-2">
            <td>{{ info.name }}</td>
            <td>{{ info.created_at }}</td>
            <td>{{ info.typeCall }}</td>
            <td>{{ info.sector }}</td>
            <td>{{ info.company }}</td>
            <td>{{ info.priority }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
