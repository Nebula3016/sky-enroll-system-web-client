<template>
  <el-breadcrumb
    :class="[elsBreadcrumbCompute.classNames]"
    :separator="elBreadcrumbCompute.separator"
    :separator-icon="elBreadcrumbCompute.separatorIcon"
  >
    <template #default>
      <slot name="breadcrumb-default">
        <el-breadcrumb-item
          v-for="(item, index) in elsBreadcrumbCompute.routeHistorList"
          :key="index"
          :to="item.to"
          :replace="elBreadcrumbItemCompute.replace"
        >
          <slot name="breadcrumb-item" :item="item">
            {{ item.name }}
          </slot>
        </el-breadcrumb-item>
      </slot>
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
/**
 * @name ElsBreadcrumb
 * @description 面包屑导航组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */

import type { ElsBreadcrumbProps, ElBreadcrumbProps, ElBreadcrumbItemProps } from './type';
import { computed } from 'vue';

defineOptions({
  name: 'ElsBreadcrumb',
});

const props = defineProps<{
  elsBreadcrumbProps?: ElsBreadcrumbProps;
  elBreadcrumbProps?: ElBreadcrumbProps;
  elBreadcrumbItemProps?: ElBreadcrumbItemProps;
}>();

/**
 * @name elsBreadcrumbCompute
 * @description 面包屑导航组件计算属性
 */
const elsBreadcrumbCompute = computed(() => {
  return Object.assign({}, defaultElsBreadcrumbProp(), props.elsBreadcrumbProps);
});

/**
 * @name elBreadcrumbCompute
 * @description el-breadcrumb组件计算属性
 */
const elBreadcrumbCompute = computed(() => {
  return Object.assign({}, defaultElBreadcrumbProp(), props.elBreadcrumbProps);
});

/**
 * @name elBreadcrumbItemCompute
 * @description el-breadcrumb-item组件计算属性
 */
const elBreadcrumbItemCompute = computed(() => {
  return Object.assign({}, defaultElBreadcrumbItemProp(), props.elBreadcrumbItemProps);
});

// 组件挂载初始化周期
(async () => {})();

/**
 * @name defaultElsBreadcrumbProp
 * @description 面包屑导航组件默认属性
 */
function defaultElsBreadcrumbProp(): ElsBreadcrumbProps {
  return {
    classNames: 'els-breadcrumb',
    routeHistorList: [],
  };
}

/**
 * @name defaultElBreadcrumbProp
 * @description el-breadcrumb组件默认属性
 */
function defaultElBreadcrumbProp(): ElBreadcrumbProps {
  return {
    separator: '/',
  };
}

/**
 * @name defaultElBreadcrumbItemProp
 * @description el-breadcrumb-item组件默认属性
 */
function defaultElBreadcrumbItemProp(): ElBreadcrumbItemProps {
  return {
    replace: false,
  };
}
</script>

<style lang="scss" scoped></style>
