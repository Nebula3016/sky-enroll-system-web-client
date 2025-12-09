export interface LoginFormDataVoInterface {
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
  /** 验证码 */
  graphCaptcha: string;
  /** 验证码图片 base64 编码 */
  graphCaptchaBase64Url: string;
  /** 记住密码 */
  rememberMe: boolean;
}
