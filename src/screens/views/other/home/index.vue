<template>
  <div class="home-view global-view">home</div>
</template>

<script setup lang="ts">
/**
 * @name HomeView
 * @description 其他首页视图组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */

defineOptions({
  name: 'HomeView',
});

import useHomeViewHook from './hook/index.hook.ts';

const {} = useHomeViewHook();
</script>

<style lang="scss" scoped>
@use './style/index.scss' as *;
</style>
