import type { ApiResponse, LoginRequest, LoginResponseData } from './types/account-login';
import type { GraphCaptchaResponseData } from './types/graph-captcha';
import { authService } from './service';
import { repositoryService } from './repository';

/**
 * 账号登录控制器
 * @param req 请求对象，包含 body 参数
 * @returns 登录响应结果
 */
export function accountLoginController(req: { body: LoginRequest }): ApiResponse<LoginResponseData> {
  try {
    const { body } = req;
    const { account, password, graphCaptchaId, graphCaptchaCode } = body;

    // 参数验证
    if (!account || !password || !graphCaptchaId || !graphCaptchaCode) {
      return {
        code: 0,
        message: '请填写完整的登录信息',
      };
    }

    // 调用服务层处理登录逻辑
    const loginResult = authService.login(body);

    // 登录成功
    return {
      code: 1,
      message: '登录成功',
      data: loginResult,
    };
  } catch (error) {
    // 处理业务异常
    console.error('登录失败:', error);
    const errorMessage = error instanceof Error ? error.message : '登录失败';
    return {
      code: 0,
      message: errorMessage,
    };
  }
}

/**
 * 获取图形验证码控制器
 * @param req 请求对象
 * @returns 图形验证码响应结果
 */
export function getGraphCaptchaController(req: any): ApiResponse<GraphCaptchaResponseData> {
  try {
    // 生成图形验证码
    const captcha = repositoryService.generateGraphCaptcha();

    return {
      code: 1,
      message: '获取验证码成功',
      data: {
        graphCaptchaId: captcha.id,
        graphCaptchaBase64: captcha.base64,
        graphCaptchaCode: captcha.code, // 注意：生产环境中不应该返回验证码答案
      },
    };
  } catch (error) {
    console.error('生成验证码失败:', error);
    return {
      code: 500,
      message: '生成验证码失败，请稍后重试',
    };
  }
}
