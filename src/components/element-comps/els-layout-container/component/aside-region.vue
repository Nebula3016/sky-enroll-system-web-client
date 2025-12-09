<template>
  <el-aside :width="elAsideCompute.width" :class="[asideRegionCompute.classNames]">
    <slot>Aside</slot>
  </el-aside>
</template>

<script setup lang="ts">
/**
 * @name AsideRegion
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
 * @name AsideRegionProps
 * @description 侧边栏区域组件属性类型定义
 */
interface AsideRegionProps {
  classNames?: string;
}

/* ============================== 定义组件 ============================== */
defineOptions({
  name: 'AsideRegion',
});

/* ============================== 定义组件状态 ============================== */
const props = defineProps<{
  elAsideProp?: ElAsideProps;
  asideRegionProp?: AsideRegionProps;
}>();

/**
 * @name elAsideCompute
 * @description 侧边栏组件计算属性
 */
const elAsideCompute = computed(() => {
  return Object.assign({}, defaultElAsideProp(), props.elAsideProp);
});

/**
 * @name asideRegionCompute
 * @description 侧边栏区域组件计算属性
 */
const asideRegionCompute = computed(() => {
  return Object.assign({}, defaultAsideRegionProp(), props.asideRegionProp);
});

/* ============================== 定义组件生命周期 ============================== */
// 组件挂载初始化周期
(async () => {})();

/* ============================== 组件状态默认值定义 ============================== */
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
 * @name defaultAsideRegionProp
 * @description 侧边栏区域组件默认属性
 */
function defaultAsideRegionProp(): AsideRegionProps {
  return {
    classNames: 'aside-region',
  };
}
</script>

<style lang="scss" scoped></style>
