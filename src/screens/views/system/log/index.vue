<template>
  <div class="log-view global-view"></div>
</template>

<script setup lang="ts">
/**
 * @name LogView
 * @description 日志管理视图组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */

defineOptions({
  name: 'LogView',
});

import useLogViewHook from './hook/index.hook.ts';

const {} = useLogViewHook();
</script>

<style lang="scss" scoped>
@use './style/index.scss' as *;
</style>
