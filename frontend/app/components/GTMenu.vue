<script setup lang="ts">
const menu = ref<{ icon: string; label: string; path: string }[]>([
  {
    icon: "lucide:layout-dashboard",
    label: "Dashboard",
    path: "/",
  },
  {
    icon: "lucide:settings",
    label: "Configurações",
    path: ''
  },
]);
</script>

<template>
    <div class="w-[250px]">
     <div class="mb-8">
       <h1 class="bg-blue-700 font-bold text-white px-2 py-1 round-md">CRM</h1>
     </div>
   
      <nav>
        <ul class="mt-8 flex flex-col justify-center gap-2">
          <li 
            v-for="item in menu" :key="item.path"
            class="text-sm text-gray-500 hover:text-blue-500 font-bold flex items-center gap-2"
          > 
            <Icon :name="item.icon" size="24" color="blue" /> 
            <span class="text-sm">{{ item.label }}</span>
          </li>
        </ul>
      </nav>
   </div>
</template>
