<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  underline?: boolean;
}>();

const buttonClass = computed(() => {
  if (props.disabled) {
    return "bg-gray-400 text-white font-semibold py-2 px-4 rounded cursor-not-allowed";
  }

  if (props.underline) {
    return "text-gray-600 hover:text-gray-800 font-semibold py-2 rounded cursor-pointer underline hover:no-underline";
  }

  return "btn-primary";
});
</script>

<template>
  <div>
    <button :type="type" :disabled="disabled" :class="buttonClass">
      <slot />
    </button>
  </div>
</template>
