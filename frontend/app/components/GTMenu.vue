<script setup lang="ts">
const menu = ref<{ icon: string; label: string; path: string }[]>([
  {
    icon: "lucide:layout-dashboard",
    label: "Dashboard",
    path: "/",
  },
  {
    icon: "lucide:phone-call",
    label: "Realizar Chamado",
    path: "/",
  },
  {
    icon: "lucide:history",
    label: "Histórico",
    path: "/",
  },
  {
    icon: "lucide:settings",
    label: "Configurações",
    path: "",
  },
]);
</script>

<template>
  <div class="w-[250px] h-screen bg-white flex flex-col shadow">
    <div class="mb-8 flex justify-start">
      <h1
        class="bg-blue-700 font-bold text-2xl text-white px-2 py-1 mx-auto my-5 round-md"
      >
        CRM
      </h1>
    </div>

    <nav class="container flex-1 mt-8">
      <ul class="flex flex-col justify-center gap-8 mx-4">
        <li
          v-for="item in menu"
          :key="item.path"
          class="text-sm text-gray-500 hover:text-blue-500 font-bold flex items-center gap-2 cursor-pointer"
        >
          <Icon :name="item.icon" size="24" color="blue" />
          <span class="text-sm">{{ item.label }}</span>
        </li>
      </ul>
    </nav>

    <NuxtLink
      class="flex justify-end items-center gap-4 mx-auto my-8"
      to="/login"
    >
      <span class="text-gray-500 font-bold hover:underline">Sair</span>
    </NuxtLink>
  </div>
</template>
