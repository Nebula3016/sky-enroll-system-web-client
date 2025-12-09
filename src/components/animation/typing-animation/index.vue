<template>
  <div class="typing-animation">
    <template v-if="TypingAnimationBodyProps.mode === TypingModeEnum.TypingExcessAnimation">
      <TypingExcessAnimation v-bind="TypingExcessAnimationProps"> </TypingExcessAnimation>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { TypingAnimationPropsTypes } from '.';
import { TypingModeEnum } from './index.enum';
import TypingExcessAnimation from './comps/typing-excess-animation.vue';

defineOptions({
  name: 'TypingAnimation',
});

const { TypingAnimationBodyProps = { mode: TypingModeEnum.CustomTyping }, TypingExcessAnimationProps } =
  defineProps<TypingAnimationPropsTypes>();
</script>

<style lang="scss" scoped></style>
