<template>
  <div class="header-region">
    <!-- 视图菜单路径及系统配置及用户信息 -->
    <div class="system-config-info-box">
      <!-- 视图菜单路径 -->
      <div class="view-menu-path"></div>

      <!-- 系统配置及用户信息 -->
      <div class="system-config-user-info">
        <el-button type="primary" @click="handleLogoutHelp">退出登录</el-button>
      </div>
    </div>

    <!-- 系统面包屑 -->
    <div class="system-breadcrumb"></div>
  </div>
</template>

<script setup lang="ts">
import { handleLogoutHelp } from '@/common';

defineOptions({
  name: 'HeaderRegion',
});
</script>

<style lang="scss" scoped>
.header-region {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 85px;
  border-top: none;
  border-bottom: 1px solid #e4e7ed;
}

.system-config-info-box {
  display: inline-flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 50px;
  padding: 0 15px;
  border-bottom: 1px solid #e4e7ed;

  .view-menu-path,
  .system-config-user-info {
    display: inline-flex;
    flex-wrap: nowrap;
    flex: 1 1 0;
    align-items: center;
  }

  .system-config-user-info {
    justify-content: flex-end;
  }
}

.system-breadcrumb {
  display: inline-flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 35px;
  padding: 0 15px;
}
</style>
