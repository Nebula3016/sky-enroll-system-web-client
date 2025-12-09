<template>
  <el-header :class="[elsHeaderCompute.classNames]" :height="elHeaderCompute.height">
    <slot>Header</slot>
  </el-header>
</template>

<script setup lang="ts">
/**
 * @name ElsHeaderRegion
 * @description 头部区域组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */

import { computed } from 'vue';

/**
 * @name ElsHeaderProps
 * @description 头部组件属性类型定义
 */
interface ElHeaderProps {
  height?: string;
}

/**
 * @name ElsHeaderRegionProps
 * @description 头部区域组件属性类型定义
 */
interface ElsHeaderRegionProps {
  classNames?: string;
}

defineOptions({
  name: 'ElsHeaderRegion',
});

const props = defineProps<{
  elHeaderProp?: ElHeaderProps;
  elsHeaderRegionProp?: ElsHeaderRegionProps;
}>();

/**
 * @name elHeaderCompute
 * @description 头部组件计算属性
 */
const elHeaderCompute = computed(() => {
  return Object.assign({}, defaultElHeaderProp(), props.elHeaderProp);
});

/**
 * @name elsHeaderCompute
 * @description 头部区域组件计算属性
 */
const elsHeaderCompute = computed(() => {
  return Object.assign({}, defaultElsHeaderRegionProp(), props.elsHeaderRegionProp);
});

// 组件挂载初始化周期
(async () => {})();

/**
 * @name defaultElsHeaderRegionProp
 * @description 头部区域组件默认属性
 */
function defaultElsHeaderRegionProp(): ElsHeaderRegionProps {
  return {
    classNames: 'els-header-region',
  };
}

/**
 * @name defaultElHeaderProp
 * @description 头部组件默认属性
 */
function defaultElHeaderProp(): ElHeaderProps {
  return {
    height: '50px',
  };
}
</script>

<style lang="scss" scoped></style>
