<template>
  <div class="els-menu-container">
    <!-- 水平布局 -->
    <template v-if="elsMenuContainerProps.layoutPattern === LayoutPatternEnum.Horizontal">
      <HorizontalMenu />
    </template>

    <!-- 垂直布局 -->
    <template v-else-if="elsMenuContainerProps.layoutPattern === LayoutPatternEnum.Vertical">
      <VerticalMenu
        :verticalMenuProps="{
          menuList: elsMenuContainerProps.menuList,
        }"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ElsMenuContainerPropsTypes } from '.';
import { VueTools } from '@/utils';
import { elsMenuContainerPropsDefault } from './default-data';
import { LayoutPatternEnum } from './index.enum';
import HorizontalMenu from './widget/horizontal-menu.vue';
import VerticalMenu from './widget/vertical-menu.vue';

const { computed } = VueTools;

defineOptions({
  name: 'ElsMenuContainer',
});

const props = defineProps<ElsMenuContainerPropsTypes>();

const elsMenuContainerProps = computed(() => ({
  ...elsMenuContainerPropsDefault,
  ...props.elsMenuContainerProps,
}));
</script>

<style lang="scss" scoped>
@use './style/index.scss' as *;
</style>
