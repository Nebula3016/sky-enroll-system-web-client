<template>
  <el-row class="vertical-menu">
    <el-menu v-bind="elMenuProps" :collapse="isCollapse">
      <template v-for="route in menuListCompute" :key="route.path">
        <template v-if="route.meta.type === SystemRouterTypeEnum.ROOT">
          <template v-for="subRoute in menuChildrenListCompute(route.children)" :key="subRoute.path">
            <routerLink class="menu-item-link" :to="subRoute.path">
              <el-menu-item v-bind="elMenuItemProps" :index="subRoute.name" :disabled="subRoute.meta.isDisabled">
                {{ subRoute.meta.title }}
              </el-menu-item>
            </routerLink>
          </template>
        </template>

        <template v-else-if="route.meta.type === SystemRouterTypeEnum.CATALOG">
          <el-sub-menu v-bind="elSubMenuProps" :index="route.name" :disabled="route.meta.isDisabled">
            <template #title>{{ route.meta.title }}</template>

            <template #default>
              <template v-for="subRoute in menuChildrenListCompute(route.children)" :key="subRoute.path">
                <routerLink class="menu-item-link" :to="subRoute.path">
                  <el-menu-item v-bind="elMenuItemProps" :index="subRoute.name" :disabled="subRoute.meta.isDisabled">
                    {{ subRoute.meta.title }}
                  </el-menu-item>
                </routerLink>
              </template>
            </template>
          </el-sub-menu>
        </template>

        <template v-else-if="route.meta.type === SystemRouterTypeEnum.MENU">
          <routerLink class="menu-item-link" :to="route.path">
            <el-menu-item v-bind="elMenuItemProps" :index="route.name" :disabled="route.meta.isDisabled">
              {{ route.meta.title }}
            </el-menu-item>
          </routerLink>
        </template>

        <template v-else>
          <routerLink class="menu-item-link" :to="route.path">
            <el-menu-item v-bind="elMenuItemProps" :index="route.name" :disabled="route.meta.isDisabled">
              {{ route.meta.title }}
            </el-menu-item>
          </routerLink>
        </template>
      </template>
    </el-menu>

    <!-- 收缩菜单 -->
    <div class="shrink-nav">
      <el-button type="default" @click="toggleCollapse">收缩</el-button>
    </div>
  </el-row>
</template>

<script setup lang="ts">
import type { VerticalMenuPropsTypes } from '..';
import { VueTools } from '@/utils';
import { SystemRouterTypeEnum } from '@/router/router.enum';
import {
  verticalMenuPropsDefault,
  elMenuPropsDefault,
  elSubMenuPropsDefault,
  elMenuItemGroupPropsDefault,
  elMenuEventPropsDefault,
  elMenuItemPropsDefault,
} from '../default-data';
import useVerticalMenuHook from '../hook/useVerticalMenuHook';

const { computed } = VueTools;

defineOptions({
  name: 'VerticalMenu',
});

const props = defineProps<VerticalMenuPropsTypes>();

const verticalMenuProps = computed(() => ({
  ...verticalMenuPropsDefault,
  ...props.verticalMenuProps,
}));
const elMenuProps = computed(() => ({
  ...elMenuPropsDefault,
  ...elMenuEventPropsDefault,
  ...props.elMenuProps,
  ...props.elMenuEventProps,
}));
const elMenuItemProps = computed(() => ({
  ...elMenuItemPropsDefault,
  ...props.elMenuItemProps,
}));
const elSubMenuProps = computed(() => ({
  ...elSubMenuPropsDefault,
  ...props.elSubMenuProps,
}));
const elMenuItemGroupProps = computed(() => ({
  ...elMenuItemGroupPropsDefault,
  ...props.elMenuItemGroupProps,
}));

const menuListCompute = computed(() => {
  return verticalMenuProps.value.menuList.sort((a, b) => {
    return a.meta.order - b.meta.order;
  });
});
const menuChildrenListCompute = computed(() => {
  return (menuChildList: any[]) => {
    return menuChildList.sort((a, b) => {
      return a.meta.order - b.meta.order;
    });
  };
});

const { isCollapse, toggleCollapse } = useVerticalMenuHook();

(async () => {})();
</script>

<style lang="scss" scoped>
@use '../style/vertical-menu.scss' as *;
</style>
