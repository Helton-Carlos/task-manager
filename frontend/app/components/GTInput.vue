<script setup lang="ts">
defineProps<{
  labelTitle?: string;
  id?: string;
  modelValue: string | number;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}>();
</script>

<template>
  <div>
    <label :for="id" v-if="labelTitle">{{ labelTitle }}</label>
    <input
      :id="id"
      :type="type || 'text'"
      :placeholder="placeholder || ''"
      :disabled="disabled || false"
      :value="modelValue"
      class="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</template>
