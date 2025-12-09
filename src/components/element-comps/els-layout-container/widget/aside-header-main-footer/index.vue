<template>
  <!-- 默认布局 -->
  <el-container class="aside-header-main-footer" direction="horizontal">
    <!-- 侧边栏 -->
    <slot name="default-aside">
      <AsideRegion ref="asideRegionRef" :el-aside-prop="{}" :aside-region-prop="{}" />
    </slot>

    <el-container direction="vertical">
      <!-- 头部 -->
      <slot name="default-header">
        <HeaderRegion ref="headerRegionRef" :el-header-prop="{}" :header-region-prop="{}" />
      </slot>

      <!-- 主内容 -->
      <slot name="default-main">
        <MainRegion ref="mainRegionRef" :main-region-prop="{}" />
      </slot>

      <!-- 底部 -->
      <slot name="default-footer">
        <FooterRegion ref="footerRegionRef" :footer-region-prop="{}" />
      </slot>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
/**
 * @name AsideHeaderMainFooter
 * @description 侧边栏+头部+主内容+底部组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */
import { useTemplateRef } from 'vue';
import AsideRegion from '../../component/aside-region.vue';
import HeaderRegion from '../../component/header-region.vue';
import MainRegion from '../../component/main-region.vue';
import FooterRegion from '../../component/footer-region.vue';

defineOptions({
  name: 'AsideHeaderMainFooter',
});

const asideRegionRef = useTemplateRef<InstanceType<typeof AsideRegion>>('asideRegionRef');
const headerRegionRef = useTemplateRef<InstanceType<typeof HeaderRegion>>('headerRegionRef');
const mainRegionRef = useTemplateRef<InstanceType<typeof MainRegion>>('mainRegionRef');
const footerRegionRef = useTemplateRef<InstanceType<typeof FooterRegion>>('footerRegionRef');

defineExpose({
  asideRegionRef,
  headerRegionRef,
  mainRegionRef,
  footerRegionRef,
});

// 组件挂载初始化周期
(async () => {})();
</script>

<style lang="scss" scoped>
.aside-header-main-footer {
  width: 100%;
  height: 100%;
}
</style>
