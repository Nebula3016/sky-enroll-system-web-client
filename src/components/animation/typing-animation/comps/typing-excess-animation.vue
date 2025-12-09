<template>
  <div class="typing-excess-animation"></div>
</template>

<script setup lang="ts">
import type { TypingAnimationPropsTypes } from '..';
import { onBeforeMount, onMounted, ref, nextTick } from 'vue';
import { TypeItTools } from '@/utils/index.ts';

defineOptions({
  name: 'TypingExcessAnimation',
});

const {
  element = '.typing-excess-animation',
  speed = 100,
  strings = '自定义打字机内容',
} = defineProps<TypingAnimationPropsTypes['TypingExcessAnimationProps']>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TypeItInstance = ref<any>(null);

async function init() {
  await nextTick(() => {
    TypeItInstance.value = new TypeItTools.default(element, {
      strings,
      speed,
      cursor: false,
    }).go();
  });
}

onBeforeMount(async () => {
  await init();
});

onMounted(async () => {});
</script>

<style lang="scss" scoped></style>
