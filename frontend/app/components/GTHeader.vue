<script setup lang="ts">
const search = ref<string>("");
const user = ref<{ name: string }>({ name: "John Doe" });
</script>

<template>
  <header>
    <div>
      <h3 class="font-bold text-gray-500">Olá, {{ user.name }}</h3>
    </div>

    <div class="w-[400px]">
      <GTInput
        id="search"
        v-model="search"
        type="text"
        placeholder="Procure pelo número da ocorrência"
      />
    </div>

    <nav>
      <ul class="flex items-center gap-2">
        <li class="flex items-center gap-1">
          <Icon name="lucide:settings" size="24" color="blue" />
          <span>test</span>
        </li>
      </ul>
    </nav>
  </header>
</template>
