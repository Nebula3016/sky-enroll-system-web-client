<template>
  <!-- 头部+主内容布局 -->
  <el-container class="header-main" direction="vertical">
    <!-- 头部 -->
    <slot name="default-header">
      <HeaderRegion ref="headerRegionRef" :el-header-prop="{}" :header-region-prop="{}" />
    </slot>

    <!-- 主内容 -->
    <slot name="default-main">
      <MainRegion ref="mainRegionRef" :main-region-prop="{}" />
    </slot>
  </el-container>
</template>

<script setup lang="ts">
/**
 * @name HeaderMain
 * @description 头部+主内容组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */
/* ============================== 引入依赖 ============================== */
import { useTemplateRef } from 'vue';
import HeaderRegion from '../../component/header-region.vue';
import MainRegion from '../../component/main-region.vue';

defineOptions({
  name: 'HeaderMain',
});

/* ============================== 定义组件状态 ============================== */
const headerRegionRef = useTemplateRef<InstanceType<typeof HeaderRegion>>('headerRegionRef');
const mainRegionRef = useTemplateRef<InstanceType<typeof MainRegion>>('mainRegionRef');

/* ============================== 定义组件状态/方法暴露 ============================== */
defineExpose({
  headerRegionRef,
  mainRegionRef,
});

/* ============================== 定义组件生命周期 ============================== */
// 组件挂载初始化周期
(async () => {})();
</script>

<style lang="scss" scoped>
.header-main {
  width: 100%;
  height: 100%;
}
</style>
