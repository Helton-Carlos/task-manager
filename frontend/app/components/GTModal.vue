<script setup lang="ts">
const modal = ref<boolean>(false);

function openModal() {
  modal.value = true;
}

function closeModal() {
  modal.value = false;
}

defineExpose({
  openModal,
  closeModal,
});
</script>

<template>
  <div v-if="modal" class="background-modal fixed inset-0 z-50">
    <div class="flex items-center justify-center min-h-screen p-4">
      <div class="mx-auto max-w-lg w-full rounded-xl bg-white shadow-xl">
        <div class="p-4 border-b">
          <slot name="title" />
        </div>

        <div class="p-8">
          <slot name="body" />
        </div>

        <div class="p-4 border-t flex justify-end gap-2">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>
