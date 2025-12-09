<template>
  <div class="custom-animation">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'CustomAnimation',
});

const { vueuseMotionProps = ref({}) } = defineProps({
  vueuseMotionProps: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped></style>
