/**
 * 用户状态枚举
 */
export enum UserStatus {
  BANNED = -1, // 封号
  FROZEN = 0, // 冻结
  NORMAL = 1, // 正常
}

/**
 * 用户信息接口（数据库完整字段）
 */
export interface UserModel {
  id: string;
  account: string;
  username: string;
  password: string;
  nickname: string;
  avatar: string;
  roles: string[];
  status: UserStatus;
  createTime: string;
  updateTime: string;
}

/**
 * 用户信息接口（公开字段，不包含密码）
 */
export interface UserInfo {
  id: string;
  username: string;
  nickname: string;
  avatar: string;
  roles: string[];
  status: UserStatus;
  createTime: string;
  updateTime: string;
}

/**
 * 用户列表查询参数
 */
export interface UserListQueryParams {
  page?: number; // 页码，默认1
  pageSize?: number; // 每页数量，默认10
  keyword?: string; // 搜索关键字（用户名、账号）
  status?: UserStatus; // 用户状态筛选
}

/**
 * 用户列表响应数据
 */
export interface UserListResponse {
  list: UserInfo[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

/**
 * 添加用户请求参数
 */
export interface AddUserRequest {
  username: string;
  password: string;
  nickname: string;
  avatar?: string;
  roles: string[];
  status?: UserStatus;
}

/**
 * 编辑用户请求参数
 */
export interface EditUserRequest {
  id: string;
  username?: string;
  password?: string;
  nickname?: string;
  avatar?: string;
  roles?: string[];
  status?: UserStatus;
}

/**
 * 删除用户请求参数
 */
export interface DeleteUserRequest {
  id: string;
}

/**
 * 获取用户详情请求参数
 */
export interface GetUserDetailRequest {
  id: string;
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
 * 用户查询条件接口
 */
export interface UserQueryCondition {
  id?: string;
  username?: string;
  status?: UserStatus;
  roles?: string[];
  keyword?: string;
}

/**
 * 当前用户信息响应数据
 */
export interface CurrentUserInfo {
  id: string;
  username: string;
  nickname: string;
  avatar: string;
  roles: string[];
  status: UserStatus;
  createTime: string;
  updateTime: string;
}

/**
 * 获取当前用户信息响应
 */
export interface GetCurrentUserInfoResponse extends ApiResponse<CurrentUserInfo> {
  [key: string]: any;
}
