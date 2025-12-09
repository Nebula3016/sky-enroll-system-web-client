<template>
  <div class="user-view global-view"></div>
</template>

<script setup lang="ts">
/**
 * @name UserView
 * @description 用户管理视图组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */

defineOptions({
  name: 'UserView',
});

import useUserViewHook from './hook/index.hook.ts';

const {} = useUserViewHook();
</script>

<style lang="scss" scoped>
@use './style/index.scss' as *;
</style>
