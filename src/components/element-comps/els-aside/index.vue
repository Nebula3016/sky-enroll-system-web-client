<template>
  <el-aside :class="[elsAsideCompute.classNames]" :width="elAsideCompute.width">
    <slot>Aside</slot>
  </el-aside>
</template>

<script setup lang="ts">
/**
 * @name ElsAsideRegion
 * @description 侧边栏区域组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */

import { computed } from 'vue';

/**
 * @name ElAsideProps
 * @description 侧边栏组件属性类型定义
 */
interface ElAsideProps {
  width?: string;
}

/**
 * @name ElsAsideRegionProps
 * @description 侧边栏区域组件属性类型定义
 */
interface ElsAsideRegionProps {
  classNames?: string;
}

defineOptions({
  name: 'ElsAsideRegion',
});

const props = defineProps<{
  elAsideProp?: ElAsideProps;
  elsAsideRegionProp?: ElsAsideRegionProps;
}>();

/**
 * @name elAsideCompute
 * @description 侧边栏组件计算属性
 */
const elAsideCompute = computed(() => {
  return Object.assign({}, defaultElAsideProp(), props.elAsideProp);
});

/**
 * @name elsAsideCompute
 * @description 侧边栏组件计算属性
 */
const elsAsideCompute = computed(() => {
  return Object.assign({}, defaultElsAsideRegionProp(), props.elsAsideRegionProp);
});

// 组件挂载初始化周期
(async () => {})();

/**
 * @name defaultElAsideProp
 * @description 侧边栏组件默认属性
 */
function defaultElAsideProp(): ElAsideProps {
  return {
    width: '200px',
  };
}

/**
 * @name defaultElsAsideRegionProp
 * @description 侧边栏组件默认属性
 */
function defaultElsAsideRegionProp(): ElsAsideRegionProps {
  return {
    classNames: 'els-aside-region',
  };
}
</script>

<style lang="scss" scoped>
:deep(.els-aside) {
  overflow: hidden;
}
</style>
