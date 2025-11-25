<script setup lang="ts">
const props = defineProps<{
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  underline?: boolean;
}>();

const disabledClass = computed(() => {
  return props.disabled
    ? 'bg-gray-400 text-white font-semibold py-2 px-4 rounded cursor-not-allowed'
    : 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer';
});
</script>

<template>
  <div>
    <button
      :type="type"
      :disabled="disabled"
      :class="[
       disabledClass,
       { 'bg-transparent hover:bg-transparent text-gray-500 font-semibold py-2 px-4 rounded cursor-pointer ': underline }
      ]"
    >
      <slot />
    </button>
  </div>
</template>
