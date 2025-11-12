<script setup lang="ts">
defineProps<{
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}>();
</script>

<template>
  <div>
    <button
      :type="type"
      :class="[
        disabled
          ? 'bg-gray-400 text-white font-semibold py-2 px-4 rounded cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer',
      ]"
    >
      <slot />
    </button>
  </div>
</template>
