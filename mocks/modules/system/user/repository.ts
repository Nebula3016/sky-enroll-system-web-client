import usersData from '../../../database/system-users.json';
import type {
  UserModel,
  UserQueryCondition,
  UserListQueryParams,
  AddUserRequest,
  EditUserRequest,
  UserInfo,
  CurrentUserInfo,
} from './types/user';
import { UserStatus } from './types/user';

/**
 * 用户数据仓库类
 * 负责用户数据的所有CRUD操作
 */
export class UserRepository {
  // 内存中的用户数据（模拟数据库）
  private static users: UserModel[] = [...(usersData as UserModel[])];

  /**
   * 获取所有用户数据
   * @returns 用户列表
   */
  static getAllUsers(): UserModel[] {
    return [...this.users];
  }

  /**
   * 根据用户名查找用户
   * @param username 用户名
   * @returns 用户信息或 null
   */
  static findByUsername(username: string): UserModel | null {
    return this.users.find(user => user.username === username) || null;
  }

  /**
   * 根据用户ID查找用户
   * @param userId 用户ID
   * @returns 用户信息或 null
   */
  static findById(userId: string): UserModel | null {
    return this.users.find(user => user.id === userId) || null;
  }

  /**
   * 分页查询用户列表
   * @param params 查询参数
   * @returns 分页结果
   */
  static getUserList(params: UserListQueryParams) {
    const { page = 1, pageSize = 10, keyword, status } = params;

    let filteredUsers = [...this.users];

    // 关键字搜索（用户名、账号）
    if (keyword && keyword.trim()) {
      const searchKeyword = keyword.trim().toLowerCase();
      filteredUsers = filteredUsers.filter(
        user =>
          user.username.toLowerCase().includes(searchKeyword) || user.nickname.toLowerCase().includes(searchKeyword),
      );
    }

    // 状态筛选
    if (status !== undefined) {
      filteredUsers = filteredUsers.filter(user => user.status === status);
    }

    // 排序（按创建时间倒序）
    filteredUsers.sort((a, b) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime());

    const total = filteredUsers.length;
    const totalPages = Math.ceil(total / pageSize);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const list = filteredUsers.slice(start, end);

    // 移除密码字段
    const safeList: UserInfo[] = list.map(user => {
      const { password, ...userInfo } = user;
      return userInfo as UserInfo;
    });

    return {
      list: safeList,
      total,
      page,
      pageSize,
      totalPages,
    };
  }

  /**
   * 根据条件查询用户
   * @param condition 查询条件
   * @returns 符合条件的用户列表
   */
  static findByCondition(condition: UserQueryCondition): UserModel[] {
    return this.users.filter(user => {
      // 根据ID过滤
      if (condition.id && user.id !== condition.id) {
        return false;
      }

      // 根据用户名过滤
      if (condition.username && user.username !== condition.username) {
        return false;
      }

      // 根据状态过滤
      if (condition.status !== undefined && user.status !== condition.status) {
        return false;
      }

      // 根据角色过滤
      if (condition.roles && condition.roles.length > 0) {
        const hasRole = condition.roles.some(role => user.roles.includes(role));
        if (!hasRole) {
          return false;
        }
      }

      // 根据关键字过滤
      if (condition.keyword && condition.keyword.trim()) {
        const searchKeyword = condition.keyword.trim().toLowerCase();
        const matches =
          user.username.toLowerCase().includes(searchKeyword) || user.nickname.toLowerCase().includes(searchKeyword);
        if (!matches) {
          return false;
        }
      }

      return true;
    });
  }

  /**
   * 添加用户
   * @param userData 用户数据
   * @returns 新增的用户信息
   */
  static addUser(userData: AddUserRequest): UserModel {
    // 生成新的用户ID
    const newId = (Math.max(...this.users.map(u => parseInt(u.id))) + 1).toString();

    const now = new Date().toISOString();
    const newUser: UserModel = {
      id: newId,
      account: '', // 使用username作为account
      username: userData.username,
      password: userData.password,
      nickname: userData.nickname,
      avatar: userData.avatar || '',
      roles: userData.roles,
      status: userData.status ?? UserStatus.NORMAL,
      createTime: now,
      updateTime: now,
    };

    this.users.push(newUser);
    return newUser;
  }

  /**
   * 编辑用户
   * @param userData 用户数据
   * @returns 更新后的用户信息或 null
   */
  static editUser(userData: EditUserRequest): UserModel | null {
    const userIndex = this.users.findIndex(user => user.id === userData.id);

    if (userIndex === -1) {
      return null;
    }

    const existingUser = this.users[userIndex];
    const updatedUser: UserModel = {
      ...existingUser,
      ...(userData.username && { username: userData.username }),
      ...(userData.password && { password: userData.password }),
      ...(userData.nickname && { nickname: userData.nickname }),
      ...(userData.avatar !== undefined && { avatar: userData.avatar }),
      ...(userData.roles && { roles: userData.roles }),
      ...(userData.status !== undefined && { status: userData.status }),
      updateTime: new Date().toISOString(),
    };

    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  /**
   * 删除用户
   * @param userId 用户ID
   * @returns 是否删除成功
   */
  static deleteUser(userId: string): boolean {
    const userIndex = this.users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
      return false;
    }

    this.users.splice(userIndex, 1);
    return true;
  }

  /**
   * 获取用户详情（不包含密码）
   * @param userId 用户ID
   * @returns 用户详情或 null
   */
  static getUserDetail(userId: string): UserInfo | null {
    const user = this.findById(userId);

    if (!user) {
      return null;
    }

    const { password, ...userInfo } = user;
    return userInfo as UserInfo;
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

    // 检查用户状态
    if (user.status !== UserStatus.NORMAL) {
      return null;
    }

    // 验证密码
    if (user.password !== password) {
      return null;
    }

    return user;
  }

  /**
   * 检查用户名是否存在
   * @param username 用户名
   * @param excludeId 排除的用户ID（编辑时使用）
   * @returns 是否存在
   */
  static isUsernameExists(username: string, excludeId?: string): boolean {
    return this.users.some(user => user.username === username && (!excludeId || user.id !== excludeId));
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
    return this.users.filter(user => user.roles.includes(role));
  }

  /**
   * 获取活跃用户数量
   * @returns 活跃用户数量
   */
  static getActiveUserCount(): number {
    return this.users.filter(user => user.status === UserStatus.NORMAL).length;
  }

  /**
   * 获取用户统计信息
   * @returns 用户统计
   */
  static getUserStats() {
    const total = this.users.length;
    const normal = this.users.filter(user => user.status === UserStatus.NORMAL).length;
    const frozen = this.users.filter(user => user.status === UserStatus.FROZEN).length;
    const banned = this.users.filter(user => user.status === UserStatus.BANNED).length;

    return {
      total,
      normal,
      frozen,
      banned,
    };
  }

  /**
   * 根据账号查找用户（支持账号查找）
   * @param account 账号
   * @returns 用户信息或 null
   */
  static findByAccount(account: string): UserModel | null {
    return this.users.find(user => user.account === account) || null;
  }

  /**
   * 根据账号获取当前用户信息（不包含密码）
   * @param account 账号（用户名）
   * @returns 当前用户信息或 null
   */
  static getCurrentUserInfoByAccount(account: string): CurrentUserInfo | null {
    const user = this.findByAccount(account);
    if (!user) {
      return null;
    }

    // 返回不包含密码的用户信息
    return {
      id: user.id,
      username: user.username,
      nickname: user.nickname,
      avatar: user.avatar,
      roles: user.roles,
      status: user.status,
      createTime: user.createTime,
      updateTime: user.updateTime,
    };
  }
}
