<template>
  <div class="login-header-container">
    <div class="header-left">
      <img class="header-left-logo" src="@/assets/images/logo.png" alt="星陀螺仪OA系统办公系统" title="logo" />
      <h1 class="header-left-title">星陀螺仪OA协同办公系统</h1>
    </div>

    <div class="header-right"></div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'LoginHeaderSection',
});
</script>

<style lang="scss" scoped>
@use '../style/login-header-section.scss' as *;
</style>
