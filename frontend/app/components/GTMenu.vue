<script setup lang="ts">
import { useBreakpoints } from "~/composables/useBreakpoints";
import { userStore } from "~/stores/user";

const { sm } = useBreakpoints();
const openMenu = ref<boolean>(false);
const { logoff } = userStore();

const menu = ref<{ icon: string; label: string; path: string }[]>([
  {
    icon: "lucide:layout-dashboard",
    label: "Dashboard",
    path: "/",
  },
  {
    icon: "lucide:phone-call",
    label: "Iniciar chamado",
    path: "/iniciar-chamado",
  },
  {
    icon: "lucide:history",
    label: "Histórico",
    path: "/historico",
  },
  {
    icon: "lucide:settings",
    label: "Configurações",
    path: "/configuracoes",
  },
]);
</script>

<template>
  <div>
    <div v-if="sm" class="menu-desktop">
      <div class="mb-8 flex justify-start">
        <h1
          class="bg-blue-700 font-bold text-2xl text-white px-2 py-1 mx-auto my-5 round-md"
        >
          CRM
        </h1>
      </div>

      <nav class="container flex-1 mt-8">
        <ul class="flex flex-col justify-center gap-8 mx-4">
          <NuxtLink
            v-for="item in menu"
            :key="item.path"
            :to="item.path"
            class="text-sm text-gray-500 hover:text-blue-500 font-bold flex items-center gap-2 cursor-pointer"
          >
            <Icon :name="item.icon" size="24" color="blue" />
            <span class="text-sm">{{ item.label }}</span>
          </NuxtLink>
        </ul>
      </nav>

      <div
        class="flex justify-end items-center gap-4 mx-auto my-8 cursor-pointer"
      >
        <span class="text-gray-500 font-bold hover:underline" @click="logoff">
          Sair
        </span>
      </div>
    </div>

    <div v-else class="menu-mobile">
      <Icon
        name="lucide:menu"
        size="20"
        color="blue"
        class="cursor-pointer"
        @click="() => (openMenu = !openMenu)"
      />
    </div>

    <div
      v-if="openMenu && !sm"
      class="absolute top-0 bg-white w-screen h-screen !z-50 p-4 flex flex-col"
    >
      <div class="flex justify-end mb-8">
        <Icon
          name="lucide:x"
          size="24"
          color="blue"
          class="cursor-pointer"
          @click="() => (openMenu = false)"
        />
      </div>

      <nav class="container flex justify-center mt-4 flex-1">
        <ul class="flex flex-col justify-center gap-8 mx-4">
          <NuxtLink
            v-for="item in menu"
            :key="item.path"
            :to="item.path"
            class="text-sm text-gray-500 hover:text-blue-500 font-bold flex items-center gap-2 cursor-pointer"
            @click="() => (openMenu = false)"
          >
            <Icon :name="item.icon" size="24" color="blue" />
            <span class="text-sm">{{ item.label }}</span>
          </NuxtLink>
        </ul>
      </nav>

      <div
        class="flex justify-end items-center gap-4 mx-auto my-8 cursor-pointer"
      >
        <span class="text-gray-500 font-bold hover:underline" @click="logoff">
          Sair
        </span>
      </div>
    </div>
  </div>
</template>
