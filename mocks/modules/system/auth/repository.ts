import type { UserModel, UserQueryCondition } from './types/account-login';
import type { GraphCaptchaModel } from './types/graph-captcha';
import usersData from '../../../database/system-users.json';
import { UserStatus } from './types/account-login';
import * as svgCaptcha from 'svg-captcha';

/**
 * 用户数据仓库类
 * 负责用户数据的查询操作，类似于数据库查询层
 */
export class repositoryService {
  // 内存存储验证码数据
  private static captchaStorage: Map<string, GraphCaptchaModel> = new Map();

  /**
   * 生成图形验证码
   * @returns 验证码信息
   */
  static generateGraphCaptcha(): GraphCaptchaModel {
    // 生成验证码
    const captcha = svgCaptcha.create({
      size: 5, // 验证码长度
      ignoreChars: '0o1il', // 忽略容易混淆的字符
      noise: 2, // 干扰线条数
      color: true, // 彩色验证码
      background: '#f0f0f0', // 背景色
      width: 120,
      height: 45,
    });

    const captchaId = this.generateUniqueId();
    const currentTime = Date.now();
    const expireTime = currentTime + 5 * 60 * 1000; // 5分钟过期

    const captchaModel: GraphCaptchaModel = {
      id: captchaId,
      code: captcha.text.toLowerCase(), // 转为小写便于比较
      base64: `data:image/svg+xml;base64,${Buffer.from(captcha.data).toString('base64')}`,
      createTime: currentTime,
      expireTime: expireTime,
    };

    // 存储到内存中
    this.captchaStorage.set(captchaId, captchaModel);

    // 清理过期的验证码
    this.cleanExpiredCaptcha();

    return captchaModel;
  }

  /**
   * 验证图形验证码
   * @param captchaId 验证码ID
   * @param inputCode 用户输入的验证码
   * @returns 验证结果
   */
  static verifyCaptcha(captchaId: string, inputCode: string): boolean {
    const captcha = this.captchaStorage.get(captchaId);

    if (!captcha) {
      return false; // 验证码不存在
    }

    if (Date.now() > captcha.expireTime) {
      this.captchaStorage.delete(captchaId); // 删除过期验证码
      return false; // 验证码已过期
    }

    const isValid = captcha.code === inputCode.toLowerCase();

    if (isValid) {
      this.captchaStorage.delete(captchaId); // 验证成功后删除验证码
    }

    return isValid;
  }

  /**
   * 生成唯一ID
   * @returns 唯一标识符
   */
  private static generateUniqueId(): string {
    return `captcha_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * 清理过期的验证码
   */
  private static cleanExpiredCaptcha(): void {
    const currentTime = Date.now();
    for (const [id, captcha] of this.captchaStorage.entries()) {
      if (currentTime > captcha.expireTime) {
        this.captchaStorage.delete(id);
      }
    }
  }
  /**
   * 获取所有用户数据
   * @returns 用户列表
   */
  static getAllUsers(): UserModel[] {
    return usersData as UserModel[];
  }

  /**
   * 根据用户名查找用户
   * @param username 用户名
   * @returns 用户信息或 null
   */
  static findByUsername(username: string): UserModel | null {
    const users = this.getAllUsers();
    return users.find(user => user.username === username) || null;
  }

  /**
   * 根据用户ID查找用户
   * @param userId 用户ID
   * @returns 用户信息或 null
   */
  static findById(userId: string): UserModel | null {
    const users = this.getAllUsers();
    return users.find(user => user.id === userId) || null;
  }

  /**
   * 根据条件查询用户
   * @param condition 查询条件
   * @returns 符合条件的用户列表
   */
  static findByCondition(condition: UserQueryCondition): UserModel[] {
    const users = this.getAllUsers();

    return users.filter(user => {
      // 根据ID过滤
      if (condition.id && user.id !== condition.id) {
        return false;
      }

      // 根据用户名过滤
      if (condition.username && user.username !== condition.username) {
        return false;
      }

      // 根据状态过滤
      if (condition.status && user.status !== condition.status) {
        return false;
      }

      // 根据角色过滤
      if (condition.roles && condition.roles.length > 0) {
        const hasRole = condition.roles.some(role => user.roles.includes(role));
        if (!hasRole) {
          return false;
        }
      }

      return true;
    });
  }

  /**
   * 验证用户登录凭据
   * @param username 用户名
   * @param password 密码
   * @returns 用户信息或 null
   */
  static validateCredentials(username: string, password: string): UserModel | null {
    const user = this.findByUsername(username);

    if (!user) {
      return null;
    }

    // 验证密码
    if (user.password !== password) {
      return null;
    }

    return user;
  }

  /**
   * 根据账号验证用户凭据
   * @param account 账号
   * @param password 密码
   * @returns 用户信息或 null
   */
  static validateCredentialsByAccount(account: string, password: string): UserModel | null {
    const user = this.findByAccount(account);

    if (!user) {
      return null;
    }

    // 验证密码
    if (user.password !== password) {
      return null;
    }

    return user;
  }

  /**
   * 根据账号查找用户
   * @param account 账号
   * @returns 用户信息或 null
   */
  static findByAccount(account: string): UserModel | null {
    const users = this.getAllUsers();
    return users.find(user => user.account === account) || null;
  }

  /**
   * 检查用户是否存在
   * @param username 用户名
   * @returns 是否存在
   */
  static exists(username: string): boolean {
    return this.findByUsername(username) !== null;
  }

  /**
   * 根据角色获取用户列表
   * @param role 角色名
   * @returns 具有该角色的用户列表
   */
  static findByRole(role: string): UserModel[] {
    const users = this.getAllUsers();
    return users.filter(user => user.roles.includes(role));
  }

  /**
   * 获取活跃用户数量
   * @returns 活跃用户数量
   */
  static getActiveUserCount(): number {
    const users = this.getAllUsers();
    return users.filter(user => user.status === UserStatus.NORMAL).length;
  }
}
