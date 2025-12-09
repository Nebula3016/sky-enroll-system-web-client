<template>
  <el-header :class="[headerRegionCompute.classNames]" :height="elHeaderCompute.height">
    <slot>Header</slot>
  </el-header>
</template>

<script setup lang="ts">
/**
 * @name HeaderRegion
 * @description 头部区域组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */

import { computed } from 'vue';

/* ============================== 组件类型定义 ============================== */
/**
 * @name ElHeaderProps
 * @description 头部组件属性类型定义
 */
interface ElHeaderProps {
  height?: string;
}

/**
 * @name HeaderRegionProps
 * @description 头部区域组件属性类型定义
 */
interface HeaderRegionProps {
  classNames?: string;
}

/* ============================== 定义组件 ============================== */
defineOptions({
  name: 'HeaderRegion',
});

/* ============================== 定义组件状态 ============================== */
const props = defineProps<{
  elHeaderProp?: ElHeaderProps;
  headerRegionProp?: HeaderRegionProps;
}>();

/**
 * @name elHeaderCompute
 * @description 头部组件计算属性
 */
const elHeaderCompute = computed(() => {
  return Object.assign({}, defaultElHeaderProp(), props.elHeaderProp);
});

/**
 * @name headerRegionCompute
 * @description 头部区域组件计算属性
 */
const headerRegionCompute = computed(() => {
  return Object.assign({}, defaultHeaderRegionProp(), props.headerRegionProp);
});

/* ============================== 定义组件生命周期 ============================== */
// 组件挂载初始化周期
(async () => {})();

/* ============================== 组件状态默认值定义 ============================== */
/**
 * @name defaultElHeaderProp
 * @description 头部组件默认属性
 */
function defaultElHeaderProp(): ElHeaderProps {
  return {
    height: '60px',
  };
}

/**
 * @name defaultZzHeaderRegionProp
 * @description 头部区域组件默认属性
 */
function defaultHeaderRegionProp(): HeaderRegionProps {
  return {
    classNames: 'header-region',
  };
}
</script>

<style lang="scss" scoped></style>
