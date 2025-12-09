<template>
  <div class="role-view global-view"></div>
</template>

<script setup lang="ts">
/**
 * @name RoleView
 * @description 角色管理视图组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */

defineOptions({
  name: 'RoleView',
});

import useRoleViewHook from './hook/index.hook.ts';

const {} = useRoleViewHook();
</script>

<style lang="scss" scoped>
@use './style/index.scss' as *;
</style>
