/**
 * 用户状态枚举
 */
export enum UserStatus {
  BANNED = -1,    // 封号
  FROZEN = 0,     // 冻结
  NORMAL = 1      // 正常
}

/**
 * 登录请求参数接口
 */
export interface LoginRequest {
  account: string;  // 改为account字段，支持账号登录
  password: string;
  graphCaptchaId: string;
  graphCaptchaCode: string;
}

/**
 * 用户信息接口
 */
export interface UserInfo {
  id: string;
  username: string;
  account: string;
  nickname: string;
  avatar?: string;
  roles: string[];
}

/**
 * 登录响应数据接口
 */
export interface LoginResponseData {
  userBriefInfo: {
    id: string;
    username: string;
    account: string;
  };
  token: string;
}

/**
 * API 响应通用格式
 */
export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data?: T;
}

/**
 * 用户数据模型（数据库完整字段）
 */
export interface UserModel {
  id: string;
  username: string;
  account: string;
  password: string;
  nickname: string;
  avatar: string;
  roles: string[];
  status: UserStatus;
  createTime: string;
  updateTime: string;
}

/**
 * 用户查询条件
 */
export interface UserQueryCondition {
  id?: string;
  username?: string;
  status?: UserStatus;
  roles?: string[];
}
