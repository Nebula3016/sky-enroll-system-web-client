/**
 * 图形验证码响应数据接口
 */
export interface GraphCaptchaResponseData {
  graphCaptchaId: string;
  graphCaptchaBase64: string;
  graphCaptchaCode: string;
}

/**
 * 图形验证码存储模型
 */
export interface GraphCaptchaModel {
  id: string;
  code: string;
  base64: string;
  createTime: number;
  expireTime: number;
}

/**
 * 验证码验证请求参数
 */
export interface VerifyCaptchaRequest {
  captchaId: string;
  captchaCode: string;
}

/**
 * API 响应通用格式（继承自 account-login.ts）
 */
export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data?: T;
}
