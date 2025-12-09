import { repositoryService } from './repository';
import type { LoginRequest, LoginResponseData, UserModel } from './types/account-login';
import { createHmac } from 'crypto';

/**
 * 认证服务层
 * 处理用户登录相关的业务逻辑
 */
export class AuthService {
  /**
   * JWT 密钥
   */
  private static readonly JWT_SECRET = 'your-secret-key-here';

  /**
   * Token 过期时间（24小时，毫秒）
   */
  private static readonly TOKEN_EXPIRES_IN = 24 * 60 * 60 * 1000;

  /**
   * 用户登录
   * @param loginData 登录请求数据
   * @returns 登录响应数据
   */
  static login(loginData: LoginRequest): LoginResponseData {
    const { account, password, graphCaptchaId, graphCaptchaCode } = loginData;
    // 1. 验证验证码
    // const isCaptchaValid = repositoryService.verifyCaptcha(graphCaptchaId, graphCaptchaCode);
    // if (!isCaptchaValid) {
    //   throw new Error('验证码错误或已过期');
    // }

    // 2. 验证用户凭据（使用account字段）
    const user = repositoryService.validateCredentialsByAccount(account, password);
    if (!user) {
      throw new Error('账号或密码错误');
    }

    // 3. 检查用户状态
    if (user.status !== 1) {
      if (user.status === 0) {
        throw new Error('用户账号已被冻结');
      } else if (user.status === -1) {
        throw new Error('用户账号已被封禁');
      }
    }

    // 4. 生成 JWT Token
    const token = this.generateToken(user);

    // 5. 返回登录响应数据
    return {
      userBriefInfo: {
        id: user.id,
        username: user.username,
        account: user.account,
      },
      token,
    };
  }

  /**
   * 生成 JWT Token (简化版本)
   * @param user 用户信息
   * @returns JWT Token
   */
  private static generateToken(user: UserModel): string {
    const header = {
      alg: 'HS256',
      typ: 'JWT',
    };

    const payload = {
      userId: user.id,
      username: user.username,
      account: user.account,
      roles: user.roles,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor((Date.now() + this.TOKEN_EXPIRES_IN) / 1000),
    };

    // 简化的JWT生成（仅用于mock环境）
    const headerBase64 = this.base64UrlEncode(JSON.stringify(header));
    const payloadBase64 = this.base64UrlEncode(JSON.stringify(payload));
    const signature = this.createSignature(`${headerBase64}.${payloadBase64}`);

    return `${headerBase64}.${payloadBase64}.${signature}`;
  }

  /**
   * Base64 URL 编码
   * @param str 字符串
   * @returns Base64 URL 编码结果
   */
  private static base64UrlEncode(str: string): string {
    return Buffer.from(str).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  }

  /**
   * 创建签名（简化版本）
   * @param data 数据
   * @returns 签名
   */
  private static createSignature(data: string): string {
    // 简化的签名生成（仅用于mock环境）
    return createHmac('sha256', this.JWT_SECRET)
      .update(data)
      .digest('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
  }

  /**
   * 验证 Token（简化版本）
   * @param token JWT Token
   * @returns 是否有效
   */
  static verifyToken(token: string): boolean {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        return false;
      }

      const [headerBase64, payloadBase64, signature] = parts;
      const expectedSignature = this.createSignature(`${headerBase64}.${payloadBase64}`);

      if (signature !== expectedSignature) {
        return false;
      }

      const payload = JSON.parse(Buffer.from(payloadBase64, 'base64').toString());
      const now = Math.floor(Date.now() / 1000);

      return payload.exp > now;
    } catch {
      return false;
    }
  }
}

export const authService = AuthService;
