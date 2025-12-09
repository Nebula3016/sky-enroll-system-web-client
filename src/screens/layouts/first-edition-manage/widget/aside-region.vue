<template>
  <div class="aside-region">
    <!-- 品牌信息 -->
    <div class="brand-info-box">
      <div class="logo-box">
        <img src="@/assets/images/logo.png" alt="品牌logo" title="品牌logo" />
      </div>

      <div class="app-title-box">
        <h1 class="app-title">{{ appTitleCompute }}</h1>
      </div>
    </div>

    <!-- 导航菜单 -->
    <div class="nav-menu-box">
      <ElsMenuContainer
        :els-menu-container-props="{
          menuList: menuStore.menuList,
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import useSystemToolsHook from '@/common/hooks/useSystemToolsHook';
import { VueTools } from '@/utils';
import { ElsMenuContainer } from '@/components';
import { useMenuStore } from '@/stores';

const { computed } = VueTools;

const menuStore = useMenuStore();

defineOptions({
  name: 'AsideRegion',
});

const { getEnvVariable } = useSystemToolsHook();

const appTitleCompute = computed(() => getEnvVariable('VITE_APP_NAME'));
</script>

<style lang="scss" scoped>
.aside-region {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-right: 1px solid #e4e7ed;
}

.brand-info-box {
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  height: 85px;

  .logo-box,
  .app-title-box {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .logo-box {
    flex: 0 0 auto;
    width: 100%;
    height: 60px;

    img {
      width: 50px;
      height: 45px;
    }
  }

  .app-title-box {
    flex: 1 1 auto;
    width: 100%;
    height: auto;
    line-height: 1.2;
  }
}

.nav-menu-box {
  display: inline-flex;
  flex: 1 1 auto;
  width: 100%;
  min-height: 0;
  padding: 10px 0 0;
}

.shrink-nav {
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-top: 1px solid #e4e7ed;
}
</style>
