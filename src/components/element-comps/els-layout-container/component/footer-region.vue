<template>
  <el-footer :class="[footerCompute.classNames]">
    <slot>Footer</slot>
  </el-footer>
</template>

<script setup lang="ts">
/**
 * @name FooterRegion
 * @description 底部区域组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */

import { computed } from 'vue';

/**
 * @name FooterRegionProps
 * @description 底部区域组件属性类型定义
 */
interface FooterRegionProps {
  classNames?: string;
}

/* ============================== 定义组件 ============================== */
defineOptions({
  name: 'FooterRegion',
});

/* ============================== 定义组件状态 ============================== */
const props = defineProps<{
  footerRegionProp?: FooterRegionProps;
}>();

/**
 * @name footerCompute
 * @description 底部区域组件计算属性
 */
const footerCompute = computed(() => {
  return Object.assign({}, defaultFooterRegionProp(), props.footerRegionProp);
});

/* ============================== 定义组件生命周期 ============================== */
// 组件挂载初始化周期
(async () => {})();

/* ============================== 组件状态默认值定义 ============================== */
/**
 * @name defaultFooterRegionProp
 * @description 底部区域组件默认属性
 */
function defaultFooterRegionProp(): FooterRegionProps {
  return {
    classNames: 'footer-region',
  };
}
</script>

<style lang="scss" scoped></style>
