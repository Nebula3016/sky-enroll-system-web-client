<template>
  <el-main :class="[elsMainCompute.classNames]">
    <slot>Main</slot>
  </el-main>
</template>

<script setup lang="ts">
/**
 * @name ElsMainRegion
 * @description 主内容区域组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */

import { computed } from 'vue';

/**
 * @name ElsMainProps
 * @description 主内容区域组件属性类型定义
 */
interface ElsMainProps {
  classNames?: string;
}

defineOptions({
  name: 'ElsMainRegion',
});

const props = defineProps<{
  elsMainProps?: ElsMainProps;
}>();

/**
 * @name elsMainCompute
 * @description 主内容区域组件计算属性
 */
const elsMainCompute = computed(() => {
  return Object.assign({}, defaultElsMainProp(), props.elsMainProps);
});

// 组件挂载初始化周期
(async () => {})();

/**
 * @name defaultElsMainProp
 * @description 主内容区域组件默认属性
 */
function defaultElsMainProp(): ElsMainProps {
  return {
    classNames: 'els-main',
  };
}
</script>

<style lang="scss" scoped></style>
