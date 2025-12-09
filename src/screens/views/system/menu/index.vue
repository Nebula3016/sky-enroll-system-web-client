<template>
  <div class="menu-view global-view"></div>
</template>

<script setup lang="ts">
/**
 * @name MenuView
 * @description 菜单管理视图组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */

defineOptions({
  name: 'MenuView',
});

import useMenuViewHook from './hook/index.hook.ts';

const {} = useMenuViewHook();
</script>

<style lang="scss" scoped>
@use './style/index.scss' as *;
</style>
