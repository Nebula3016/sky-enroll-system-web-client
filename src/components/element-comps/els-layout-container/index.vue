<template>
  <div class="els-layout-container">
    <el-config-provider namespace="els" :locale="zhCn">
      <slot :name="ContainerLayoutTypeEnum.CUSTOM" v-if="layoutTypeCompute === true" />

      <slot name="default" v-else>
        <component :is="layoutTypeCompute">
          <!-- 传递侧边栏插槽到子组件 -->
          <template #default-aside>
            <slot name="default-aside" />
          </template>

          <!-- 传递头部插槽到子组件 -->
          <template #default-header>
            <slot name="default-header" />
          </template>

          <!-- 传递主内容插槽到子组件 -->
          <template #default-main>
            <slot name="default-main" />
          </template>

          <!-- 传递底部插槽到子组件 -->
          <template #default-footer>
            <slot name="default-footer" />
          </template>
        </component>
      </slot>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
/**
 * @name ElsLayoutContainer
 * @description 自定义布局容器组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-21
 */
/* ============================== 引入依赖 ============================== */
import type { ElsLayoutContainerProps } from '.';
import { computed } from 'vue';
import { zhCn } from '@/common';
import { ContainerLayoutTypeEnum } from './index_enum';
import ElsAsideHeaderMainFooter from './widget/aside-header-main-footer/index.vue';
import ElsAsideHeaderMain from './widget/aside-header-main/index.vue';
import ElsHeaderAsideMainFooter from './widget/header-aside-main-footer/index.vue';
import ElsHeaderAsideMain from './widget/header-aside-main/index.vue';
import ElsHeaderMainFooter from './widget/header-main-footer/index.vue';
import ElsHeaderMain from './widget/header-main/index.vue';

/* ============================== 定义组件 ============================== */
defineOptions({
  name: 'ElsLayoutContainer',
});

/* ============================== 定义组件状态 ============================== */
const props = defineProps<{
  elsLayoutContainerProps?: ElsLayoutContainerProps;
}>();

/* ============================== 定义组件计算属性 ============================== */
/**
 * @name elsLayoutContainerCompute
 * @description 自定义布局容器组件计算属性
 */
const elsLayoutContainerCompute = computed(() => {
  return Object.assign({}, defaultElsLayoutContainerProps(), props.elsLayoutContainerProps);
});

/**
 * @name layoutTypeCompute
 * @description 布局类型计算属性
 */
const layoutTypeCompute = computed(() => {
  if (elsLayoutContainerCompute.value.layoutTypeProp === ContainerLayoutTypeEnum.A_HMF) {
    return ElsAsideHeaderMainFooter;
  } else if (elsLayoutContainerCompute.value.layoutTypeProp === ContainerLayoutTypeEnum.A_HM) {
    return ElsAsideHeaderMain;
  } else if (elsLayoutContainerCompute.value.layoutTypeProp === ContainerLayoutTypeEnum.H_AMF) {
    return ElsHeaderAsideMainFooter;
  } else if (elsLayoutContainerCompute.value.layoutTypeProp === ContainerLayoutTypeEnum.H_AM) {
    return ElsHeaderAsideMain;
  } else if (elsLayoutContainerCompute.value.layoutTypeProp === ContainerLayoutTypeEnum.HMF) {
    return ElsHeaderMainFooter;
  } else if (elsLayoutContainerCompute.value.layoutTypeProp === ContainerLayoutTypeEnum.HM) {
    return ElsHeaderMain;
  } else {
    return true;
  }
});

/* ============================== 定义组件生命周期 ============================== */
// 组件挂载初始化周期
(async () => {})();

/* ============================== 组件状态默认值定义 ============================== */
/**
 * @name defaultZzLayoutContainerProps
 * @description 自定义布局容器组件默认属性
 */
function defaultElsLayoutContainerProps(): ElsLayoutContainerProps {
  return {
    layoutTypeProp: ContainerLayoutTypeEnum.A_HMF,
  };
}
</script>

<style lang="scss" scoped>
@use './style/index.scss' as *;
</style>
