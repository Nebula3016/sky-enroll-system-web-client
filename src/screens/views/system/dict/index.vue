<template>
  <div class="dict-view global-view"></div>
</template>

<script setup lang="ts">
/**
 * @name DictView
 * @description 字典管理视图组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */

defineOptions({
  name: 'DictView',
});

import useDictViewHook from './hook/index.hook.ts';

const {} = useDictViewHook();
</script>

<style lang="scss" scoped>
@use './style/index.scss' as *;
</style>
