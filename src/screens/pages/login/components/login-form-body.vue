<template>
  <!-- 登录表单主体 -->
  <div class="login-form-body">
    <!-- 登录表单容器 -->
    <div class="login-form-container">
      <el-row class="form-logo-title">
        <!-- 系统logo -->
        <div class="form-logo">
          <VueUseMotion
            :vueuse-motion-body-props="{
              mode: VueuseMotionMode.FadeIn,
            }"
          >
            <img class="logo" src="@/assets/images/logo.png" alt="logo" />
          </VueUseMotion>
        </div>

        <!-- 系统英文标题 -->
        <div class="form-title">
          <h2>
            <TypingAnimation
              :TypingAnimationBodyProps="{
                mode: TypingModeEnum.TypingExcessAnimation,
              }"
              :TypingExcessAnimationProps="{ strings: 'SKYGYROSCOPE' }"
            />
          </h2>
        </div>
      </el-row>

      <div class="login-form-content">
        <!-- 登录表单 -->
        <el-form ref="loginFormRef" class="login-form" :model="formDataVo" :rules="formRules" label-width="auto">
          <!-- 用户账号 -->
          <VueUseMotion
            :vueuse-motion-body-props="{
              mode: VueuseMotionMode.FloatBounceEnter,
            }"
          >
            <el-form-item label="" prop="account">
              <el-input v-model="formDataVo.account" placeholder="请输入账号" @keyup.enter="handleLoginEvent"></el-input>
            </el-form-item>
          </VueUseMotion>

          <!-- 密码 -->
          <VueUseMotion
            :vueuse-motion-body-props="{
              mode: VueuseMotionMode.FloatBounceEnter,
            }"
            :vueuse-motion-props="{
              enter: {
                transition: {
                  delay: 60,
                },
              },
            }"
          >
            <el-form-item label="" prop="password">
              <el-input
                v-model="formDataVo.password"
                placeholder="请输入密码"
                type="password"
                @keyup.enter="handleLoginEvent"
              ></el-input>
            </el-form-item>
          </VueUseMotion>

          <!-- 验证码 -->
          <VueUseMotion
            :vueuse-motion-body-props="{
              mode: VueuseMotionMode.FloatBounceEnter,
            }"
            :vueuse-motion-props="{
              enter: {
                transition: {
                  delay: 120,
                },
              },
            }"
          >
            <el-form-item label="" prop="graphCaptcha">
              <el-input
                v-model="formDataVo.graphCaptchaCode"
                class="graph-validate-code-input"
                placeholder="请输入验证码"
                @keyup.enter="handleLoginEvent"
              >
                <template #suffix>
                  <el-image :src="formDataVo.graphCaptchaBase64Url" alt="验证码" fit="fill" @click="getGraphCaptcha">
                    <template #error>
                      <span>加载失败</span>
                    </template>
                  </el-image>
                </template>
              </el-input>
            </el-form-item>
          </VueUseMotion>

          <!-- 其它 -->
          <VueUseMotion
            :vueuse-motion-body-props="{
              mode: VueuseMotionMode.FloatBounceEnter,
            }"
            :vueuse-motion-props="{
              enter: {
                transition: {
                  delay: 180,
                },
              },
            }"
          >
            <el-row class="login-form-other">
              <!-- 暂定功能 -->
              <el-col class="remember-me" :span="12">
                <el-checkbox v-model="formDataVo.rememberMe">记住密码</el-checkbox>
              </el-col>

              <el-col class="forget-password" :span="12">
                <RouterLink to="/login">忘记密码？</RouterLink>
              </el-col>
            </el-row>
          </VueUseMotion>

          <!-- 登录按钮 -->
          <VueUseMotion
            :vueuse-motion-body-props="{
              mode: VueuseMotionMode.FloatBounceEnter,
            }"
            :vueuse-motion-props="{
              enter: {
                transition: {
                  delay: 240,
                },
              },
            }"
          >
            <el-form-item class="login-form-submit">
              <el-button class="submit" type="primary" :loading="formUtilsConfig.loginBtnLoading" @click="handleLoginEvent"
                >登录</el-button
              >
            </el-form-item>
          </VueUseMotion>
        </el-form>

        <!-- 其它登录模式 -->
        <VueUseMotion
          :vueuse-motion-body-props="{
            mode: VueuseMotionMode.FloatBounceEnter,
          }"
          :vueuse-motion-props="{
            enter: {
              transition: {
                delay: 300,
              },
            },
          }"
        >
          <el-row class="other-login-pattern">
            <el-button class="other-login-pattern-btn" type="default">手机登录</el-button>
            <el-button class="other-login-pattern-btn" type="default">二维码登录</el-button>
            <el-button class="other-login-pattern-btn" type="default">注册账号</el-button>
          </el-row>
        </VueUseMotion>

        <VueUseMotion
          :vueuse-motion-body-props="{
            mode: VueuseMotionMode.FloatBounceEnter,
          }"
          :vueuse-motion-props="{
            enter: {
              transition: {
                delay: 360,
              },
            },
          }"
        >
          <el-divider content-position="center">第三方登录</el-divider>
        </VueUseMotion>

        <!-- 第三方登录 -->
        <VueUseMotion
          :vueuse-motion-body-props="{
            mode: VueuseMotionMode.FloatBounceEnter,
          }"
          :vueuse-motion-props="{
            enter: {
              transition: {
                delay: 420,
              },
            },
          }"
        >
          <el-row class="third-party-login">
            <el-button class="third-party-login-btn" type="default">
              <span class="iconfont sky-weixin"></span>
            </el-button>
            <el-button class="third-party-login-btn" type="default">
              <span class="iconfont sky-zhifubao"></span>
            </el-button>
            <el-button class="third-party-login-btn" type="default">
              <span class="iconfont sky-qq"></span>
            </el-button>
            <el-button class="third-party-login-btn" type="default">
              <span class="iconfont sky-weibo"></span>
            </el-button>
          </el-row>
        </VueUseMotion>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VueTools } from '@/utils';
import { VueuseMotionMode } from '@/components/animation/vueuse-motion/index.enum';
import { TypingModeEnum } from '@/components/animation/typing-animation/index.enum';
import { getGraphCaptchaApi, getMenuTreeListApi, userAccountLoginApi } from '@/services';
import { useAppStore, useUserStore } from '@/stores';
import { createNotificationService } from '@/common/plugins/el-element';
import useSystemToolsHook from '@/common/hooks/useSystemToolsHook';
import VueUseMotion from '@/components/animation/vueuse-motion/index.vue';
import TypingAnimation from '@/components/animation/typing-animation/index.vue';

const { reactive, useTemplateRef, onBeforeMount, onMounted } = VueTools;

defineOptions({
  name: 'LoginFormBody',
});

const appStore = useAppStore();
const userStore = useUserStore();

// 表单视图对象
const formDataVo = reactive({
  account: '',
  password: '',
  graphCaptchaCode: '',
  graphCaptchaId: '',
  graphCaptchaBase64Url: '',
  rememberMe: false,
});

// 表单工具配置
const formUtilsConfig = reactive({
  // 登录按钮loading状态
  loginBtnLoading: false,
});

// 表单验证规则
const formRules = reactive(getFormRules());

// 登录表单引用
const loginFormRef = useTemplateRef<IElementTypes.FormInstance>('loginFormRef');

const { isDevEnv } = useSystemToolsHook();

// 初始化
async function init() {
  if (isDevEnv()) {
    formDataVo.account = '1892778412';
    formDataVo.password = 'admin666';
  }
}

// 获取图新验证码
const getGraphCaptcha = async (): Promise<void> => {
  try {
    const { data = {} } = await getGraphCaptchaApi();
    formDataVo.graphCaptchaId = data?.graphCaptchaId;
    formDataVo.graphCaptchaBase64Url = data?.graphCaptchaBase64;
    if (isDevEnv()) formDataVo.graphCaptchaCode = data?.graphCaptchaCode;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('获取验证码失败', error);
  }
};

// 提交用户账号登录信息
const submitLoginInfo = async (): Promise<void> => {
  try {
    const loginDataDto: IAuthTypes.LoginRequest = {
      account: formDataVo.account,
      password: formDataVo.password,
      graphCaptchaCode: formDataVo.graphCaptchaCode,
      graphCaptchaId: formDataVo.graphCaptchaId,
    };
    const { data = {} } = await userAccountLoginApi(loginDataDto);
    userStore.setUserToken(data.token);
    userStore.setUserInfo();
    const result = await getMenuTreeListApi();
  } catch (error) {
    return Promise.reject(error);
  }
};

// 数据加载
async function loadData(): Promise<void> {
  try {
    await getGraphCaptcha();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('数据加载失败', error);
  }
}

// 登录处理函数
const handleLoginEvent = async () => {
  if (!loginFormRef.value) throw new Error('loginFormRef.value is null');
  formUtilsConfig.loginBtnLoading = true;
  await loginFormRef.value.validate(async (valid: boolean) => {
    try {
      if (!valid) return;
      await submitLoginInfo();
      createNotificationService({
        title: `登录成功，欢迎您 ${userStore.userInfo?.username ?? ''}`,
        message: '欢迎使用星陀螺仪OA协同办公系统',
        type: 'success',
      });
      appStore.router.replace({ name: 'FirstEditionManage' });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('登录失败', error);
      return;
    } finally {
      formUtilsConfig.loginBtnLoading = false;
    }
  });
};

onMounted(async () => {
  await loadData();
});

onBeforeMount(async () => {
  await init();
});

// 获取表单验证规则
function getFormRules() {
  return {
    account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    graphCaptchaCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
  };
}
</script>

<style lang="scss" scoped>
@use '../style/login-form-body.scss' as *;
</style>
