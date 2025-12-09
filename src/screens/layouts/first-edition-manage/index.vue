<template>
  <div class="first-edition-manage-layout">
    <ElsLayoutContainer
      :els-layout-container-props="{
        layoutTypeProp: ContainerLayoutTypeEnum.A_HM,
      }"
    >
      <template #default-aside>
        <ElsAside
          :elAsideProp="{
            width: '220px',
          }"
        >
          <AsideRegion></AsideRegion>
        </ElsAside>
      </template>

      <template #default-header>
        <ElsHeader>
          <HeaderRegion></HeaderRegion>
        </ElsHeader>
      </template>

      <template #default-main>
        <ElsMain>
          <router-view></router-view>
        </ElsMain>
      </template>

      <template #default-footer>
        <ElsFooter>Footer00001</ElsFooter>
      </template>
    </ElsLayoutContainer>
  </div>
</template>

<script setup lang="ts">
import { ElsLayoutContainer, ElsAside, ElsHeader, ElsMain, ElsFooter } from '@/components';
import { ContainerLayoutTypeEnum } from '@/components/element-comps/els-layout-container/index_enum';
import HeaderRegion from './widget/header-region.vue';
import AsideRegion from './widget/aside-region.vue';

defineOptions({
  name: 'FirstEditionManageLayout',
});
</script>

<style lang="scss" scoped>
@use './style/index.scss' as *;
</style>
