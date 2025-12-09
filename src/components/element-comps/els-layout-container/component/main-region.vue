<template>
  <el-main :class="[mainCompute.classNames]">
    <slot>Main</slot>
  </el-main>
</template>

<script setup lang="ts">
/**
 * @name MainRegion
 * @description 主内容区域组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */

import { computed } from 'vue';

/**
 * @name MainRegionProps
 * @description 主内容区域组件属性类型定义
 */
interface MainRegionProps {
  classNames?: string;
}

defineOptions({
  name: 'MainRegion',
});

const props = defineProps<{
  mainRegionProp?: MainRegionProps;
}>();

/**
 * @name mainCompute
 * @description 主内容区域组件计算属性
 */
const mainCompute = computed(() => {
  return Object.assign({}, defaultMainRegionProp(), props.mainRegionProp);
});

// 组件挂载初始化周期
(async () => {})();

/**
 * @name defaultMainRegionProp
 * @description 主内容区域组件默认属性
 */
function defaultMainRegionProp(): MainRegionProps {
  return {
    classNames: 'main-region',
  };
}
</script>

<style lang="scss" scoped></style>
