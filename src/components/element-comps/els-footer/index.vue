<template>
  <el-footer :class="[elsFooterCompute.classNames]">
    <slot>Footer</slot>
  </el-footer>
</template>

<script setup lang="ts">
/**
 * @name ElsFooterRegion
 * @description 底部区域组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */

import { computed } from 'vue';

/**
 * @name ElsFooterRegionProps
 * @description 底部区域组件属性类型定义
 */
interface ElsFooterRegionProps {
  classNames?: string;
}

defineOptions({
  name: 'ElsFooterRegion',
});

const props = defineProps<{
  elsFooterRegionProp?: ElsFooterRegionProps;
}>();

/**
 * @name elsFooterCompute
 * @description 底部区域组件计算属性
 */
const elsFooterCompute = computed(() => {
  return Object.assign({}, defaultElsFooterRegionProp(), props.elsFooterRegionProp);
});

// 组件挂载初始化周期
(async () => {})();

/**
 * @name defaultElsFooterRegionProp
 * @description 底部区域组件默认属性
 */
function defaultElsFooterRegionProp(): ElsFooterRegionProps {
  return {
    classNames: 'els-footer-region',
  };
}
</script>

<style lang="scss" scoped></style>
