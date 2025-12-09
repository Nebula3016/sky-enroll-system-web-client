<template>
  <div class="fade-in" v-motion="vueuseMotionProps">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue';
import { MotionDirective as motion } from '@vueuse/motion';

defineOptions({
  name: 'FadeIn',
  directives: {
    motion: motion(),
  },
});

const { vueuseMotionProps: vueuseMotionPropsExternal } = defineProps({
  vueuseMotionProps: {
    type: Object,
    default: () => ({}),
  },
});

const vueuseMotionProps = computed(() => ({
  ...{
    initial: { opacity: 0 },
  },
  ...vueuseMotionPropsExternal,
  enter: {
    opacity: 1,
    transition: { duration: 700, ease: 'easeInOut' },
  },
}));

onBeforeMount(() => {});
</script>

<style lang="scss" scoped></style>
