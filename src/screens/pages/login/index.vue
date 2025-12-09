<template>
  <!-- 登录页面 -->
  <div class="login-view">
    <!-- 登录头部区域 -->
    <div class="login-header-container">
      <LoginHeaderSection></LoginHeaderSection>
    </div>

    <!-- 登录主体区域 -->
    <div class="login-body">
      <div class="login-show-picture">
        <LoginPictureSvg width="530" height="330" viewBox="0 0 897.318 556.975" />
      </div>

      <!-- 登录表单主体 -->
      <div class="login-container">
        <LoginFormBody></LoginFormBody>
      </div>
    </div>

    <!-- 登录底部区域 -->
    <div class="login-footer-container">
      <LoginFooterSection></LoginFooterSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoginHook from './hook/index.hook.ts';
import LoginPictureSvg from '@/assets/images/login/undraw_work-together_0f8c.svg';
import LoginHeaderSection from './components/login-header-section.vue';
import LoginFormBody from './components/login-form-body.vue';
import LoginFooterSection from './components/login-footer-section.vue';

defineOptions({
  name: 'LoginView',
});

const {} = useLoginHook();
</script>

<style lang="scss" scoped>
@use './style/index.scss' as *;
</style>
