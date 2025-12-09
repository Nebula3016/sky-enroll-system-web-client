import type {
  ApiResponse,
  UserListQueryParams,
  UserListResponse,
  AddUserRequest,
  EditUserRequest,
  DeleteUserRequest,
  GetUserDetailRequest,
  UserInfo,
  UserStatus,
  GetCurrentUserInfoResponse,
} from './types/user';
import { UserRepository } from './repository';
import { parseToken, isTokenValid } from '../../../utils/token';
import { userService } from './service';

/**
 * 获取用户列表控制器
 * 支持分页、搜索、筛选功能
 * @param req 请求对象
 * @returns 用户列表响应
 */
export function getUserListController(req: { query: UserListQueryParams }): ApiResponse<UserListResponse> {
  try {
    const { query } = req;
    const result = UserRepository.getUserList(query);

    return {
      code: 200,
      message: '获取用户列表成功',
      data: result,
    };
  } catch (error) {
    return {
      code: 500,
      message: '获取用户列表失败',
    };
  }
}

/**
 * 添加用户控制器
 * @param req 请求对象
 * @returns 添加结果
 */
export function addUserController(req: { body: AddUserRequest }): ApiResponse<UserInfo> {
  try {
    const { body } = req;
    const { username, password, nickname, avatar, roles, status } = body;

    // 参数验证
    if (!username || !password || !nickname || !roles || roles.length === 0) {
      return {
        code: 400,
        message: '用户名、密码、昵称和角色为必填项',
      };
    }

    // 检查用户名是否已存在
    if (UserRepository.isUsernameExists(username)) {
      return {
        code: 409,
        message: '用户名已存在',
      };
    }

    // 添加用户
    const newUser = UserRepository.addUser(body);

    // 返回用户信息（不包含密码）
    const { password: _, ...userInfo } = newUser;

    return {
      code: 200,
      message: '添加用户成功',
      data: userInfo as UserInfo,
    };
  } catch (error) {
    return {
      code: 500,
      message: '添加用户失败',
    };
  }
}

/**
 * 编辑用户控制器
 * @param req 请求对象
 * @returns 编辑结果
 */
export function editUserController(req: { body: EditUserRequest }): ApiResponse<UserInfo> {
  try {
    const { body } = req;
    const { id, username } = body;

    // 参数验证
    if (!id) {
      return {
        code: 400,
        message: '用户ID为必填项',
      };
    }

    // 检查用户是否存在
    const existingUser = UserRepository.findById(id);
    if (!existingUser) {
      return {
        code: 404,
        message: '用户不存在',
      };
    }

    // 如果要修改用户名，检查是否重复
    if (username && UserRepository.isUsernameExists(username, id)) {
      return {
        code: 409,
        message: '用户名已存在',
      };
    }

    // 编辑用户
    const updatedUser = UserRepository.editUser(body);

    if (!updatedUser) {
      return {
        code: 500,
        message: '编辑用户失败',
      };
    }

    // 返回用户信息（不包含密码）
    const { password: _, ...userInfo } = updatedUser;

    return {
      code: 200,
      message: '编辑用户成功',
      data: userInfo as UserInfo,
    };
  } catch (error) {
    return {
      code: 500,
      message: '编辑用户失败',
    };
  }
}

/**
 * 删除用户控制器
 * @param req 请求对象
 * @returns 删除结果
 */
export function deleteUserController(req: { body: DeleteUserRequest }): ApiResponse {
  try {
    const { body } = req;
    const { id } = body;

    // 参数验证
    if (!id) {
      return {
        code: 400,
        message: '用户ID为必填项',
      };
    }

    // 检查用户是否存在
    const existingUser = UserRepository.findById(id);
    if (!existingUser) {
      return {
        code: 404,
        message: '用户不存在',
      };
    }

    // 防止删除管理员账户
    if (existingUser.roles.includes('admin')) {
      return {
        code: 403,
        message: '不能删除管理员账户',
      };
    }

    // 删除用户
    const success = UserRepository.deleteUser(id);

    if (!success) {
      return {
        code: 500,
        message: '删除用户失败',
      };
    }

    return {
      code: 200,
      message: '删除用户成功',
    };
  } catch (error) {
    return {
      code: 500,
      message: '删除用户失败',
    };
  }
}

/**
 * 获取当前登录用户详情控制器
 * @param req 请求对象
 * @returns 当前用户详情
 */
export function getCurrentUserController(req: { headers: any }): ApiResponse<UserInfo> {
  try {
    // 从请求头获取 token
    const authorization = req.headers?.authorization || req.headers?.Authorization;

    if (!authorization) {
      return {
        code: 401,
        message: '未提供认证令牌',
      };
    }

    const token = authorization.replace('Bearer ', '');

    // 验证 token
    if (!isTokenValid(token)) {
      return {
        code: 401,
        message: '认证令牌无效或已过期',
      };
    }

    // 解析 token 获取用户信息
    const tokenPayload = parseToken(token);
    if (!tokenPayload) {
      return {
        code: 401,
        message: '认证令牌解析失败',
      };
    }

    // 获取用户详情
    const userInfo = UserRepository.getUserDetail(tokenPayload.userId);

    if (!userInfo) {
      return {
        code: 404,
        message: '用户不存在',
      };
    }

    return {
      code: 200,
      message: '获取当前用户信息成功',
      data: userInfo,
    };
  } catch (error) {
    return {
      code: 500,
      message: '获取当前用户信息失败',
    };
  }
}

/**
 * 获取用户详情控制器
 * @param req 请求对象
 * @returns 用户详情
 */
export function getUserDetailController(req: { query: GetUserDetailRequest }): ApiResponse<UserInfo> {
  try {
    const { query } = req;
    const { id } = query;

    // 参数验证
    if (!id) {
      return {
        code: 400,
        message: '用户ID为必填项',
      };
    }

    // 获取用户详情
    const userInfo = UserRepository.getUserDetail(id);

    if (!userInfo) {
      return {
        code: 404,
        message: '用户不存在',
      };
    }

    return {
      code: 200,
      message: '获取用户详情成功',
      data: userInfo,
    };
  } catch (error) {
    return {
      code: 500,
      message: '获取用户详情失败',
    };
  }
}

/**
 * 获取用户统计信息控制器
 * @param req 请求对象
 * @returns 用户统计信息
 */
export function getUserStatsController(req: any): ApiResponse<any> {
  try {
    const stats = UserRepository.getUserStats();

    return {
      code: 200,
      message: '获取用户统计成功',
      data: stats,
    };
  } catch (error) {
    return {
      code: 500,
      message: '获取用户统计失败',
    };
  }
}

/**
 * 获取当前用户信息控制器
 * 通过请求头中的token解析用户账号进行用户匹配
 * @param req 请求对象
 * @returns 当前用户信息响应
 */
export function getCurrentUserInfoController(req: { headers: any }): GetCurrentUserInfoResponse {
  try {
    // 从请求头获取 token
    const authorization = req.headers?.authorization || req.headers?.Authorization;
    if (!authorization) {
      return {
        code: 0,
        message: '未提供认证令牌',
        data: undefined,
      };
    }

    // 提取token（支持Bearer格式）
    const token = authorization.startsWith('Bearer ') ? authorization.replace('Bearer ', '') : authorization;

    if (!token) {
      return {
        code: 0,
        message: '认证令牌格式错误',
        data: undefined,
      };
    }

    // 调用服务层获取当前用户信息
    return userService.getCurrentUserInfo(token);
  } catch (error) {
    console.error('获取当前用户信息失败:', error);
    return {
      code: 0,
      message: '获取当前用户信息失败',
      data: undefined,
    };
  }
}
