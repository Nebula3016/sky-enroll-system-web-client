<template>
  <div class="float-bounce-enter" v-motion="vueuseMotionProps">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue';
import { MotionDirective as motion } from '@vueuse/motion';

defineOptions({
  name: 'FloatBounceEnter',
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
    initial: { opacity: 0, y: 100 },
  },
  ...vueuseMotionPropsExternal,
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      delay: vueuseMotionPropsExternal?.enter?.transition?.delay ? vueuseMotionPropsExternal.enter.transition.delay : 1,
    },
  },
}));

onBeforeMount(() => {});
</script>

<style lang="scss" scoped></style>
