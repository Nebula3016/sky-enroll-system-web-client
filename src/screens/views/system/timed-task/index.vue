<template>
  <div class="timed-task-view global-view"></div>
</template>

<script setup lang="ts">
/**
 * @name TimedTaskView
 * @description 定时任务管理视图组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */

defineOptions({
  name: 'TimedTaskView',
});

import useTimedTaskViewHook from './hook/index.hook.ts';

const {} = useTimedTaskViewHook();
</script>

<style lang="scss" scoped>
@use './style/index.scss' as *;
</style>
