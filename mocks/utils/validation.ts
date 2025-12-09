/**
 * 验证工具函数
 */

/**
 * 验证用户名格式
 * @param username 用户名
 * @returns 验证结果
 */
export function validateUsername(username: string): { valid: boolean; message?: string } {
  if (!username) {
    return { valid: false, message: '用户名不能为空' };
  }

  if (username.length < 3 || username.length > 20) {
    return { valid: false, message: '用户名长度必须在3-20个字符之间' };
  }

  return { valid: true };
}

/**
 * 验证密码格式
 * @param password 密码
 * @returns 验证结果
 */
export function validatePassword(password: string): { valid: boolean; message?: string } {
  if (!password) {
    return { valid: false, message: '密码不能为空' };
  }

  if (password.length < 6) {
    return { valid: false, message: '密码长度不能少于6个字符' };
  }

  return { valid: true };
}

/**
 * 验证登录参数
 * @param username 用户名
 * @param password 密码
 * @returns 验证结果
 */
export function validateLoginParams(username: string, password: string): { valid: boolean; message?: string } {
  const usernameResult = validateUsername(username);
  if (!usernameResult.valid) {
    return usernameResult;
  }

  const passwordResult = validatePassword(password);
  if (!passwordResult.valid) {
    return passwordResult;
  }

  return { valid: true };
}
