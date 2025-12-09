<template>
  <div class="vue-use-motion">
    <!-- <component :is="vueuseMotionBodyProps.mode" v-bind="isCustomAnimation ? vueuseMotionProps : {}" /> -->

    <template v-if="vueuseMotionBodyProps.mode === VueuseMotionMode.CustomAnimation">
      <CustomAnimation v-bind="vueuseMotionProps">
        <slot></slot>
      </CustomAnimation>
    </template>

    <template v-else-if="vueuseMotionBodyProps.mode === VueuseMotionMode.FloatBounceEnter">
      <FloatBounceEnter :vueuse-motion-props="vueuseMotionProps">
        <slot></slot>
      </FloatBounceEnter>
    </template>

    <template v-else-if="vueuseMotionBodyProps.mode === VueuseMotionMode.FadeIn">
      <FadeIn :vueuse-motion-props="vueuseMotionProps">
        <slot></slot>
      </FadeIn>
    </template>
  </div>
</template>

<script setup lang="ts">
// 上浮弹跳入场 float-bounce-enter
// 自定义动画模式 custom-animation
import type { VueuseMotionPropsTypes } from './index.d';
import { VueuseMotionMode } from './index.enum';
import CustomAnimation from './comps/custom-animation.vue';
import FloatBounceEnter from './comps/float-bounce-enter.vue';
import FadeIn from './comps/fade-in.vue';

defineOptions({
  name: 'VueUseMotion',
});

const { vueuseMotionBodyProps = { mode: VueuseMotionMode.CustomAnimation }, vueuseMotionProps } =
  defineProps<VueuseMotionPropsTypes>();

// 计算 是否是自定义动画模式
// const isCustomAnimation = computed(() => {
//   return vueuseMotionBodyProps.mode === VueuseMotionMode.CustomAnimation;
// });
</script>

<style lang="scss" scoped></style>
