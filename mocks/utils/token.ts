/**
 * JWT Token 工具函数
 */

/**
 * 生成简单的 JWT Token（模拟）
 * @param userId 用户ID
 * @param username 用户名
 * @returns JWT Token 字符串
 */
export function generateToken(userId: string, username: string): string {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(
    JSON.stringify({
      userId,
      username,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 24小时过期
    })
  );
  const signature = btoa(`${header}.${payload}.mock-signature`);
  return `${header}.${payload}.${signature}`;
}

/**
 * 解析 Token（模拟）
 * @param token JWT Token
 * @returns 解析后的用户信息
 */
export function parseToken(token: string): { userId: string; username: string } | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    const payload = JSON.parse(atob(parts[1]));
    return {
      userId: payload.userId,
      username: payload.username,
    };
  } catch {
    return null;
  }
}

/**
 * 验证 Token 是否过期
 * @param token JWT Token
 * @returns 是否有效
 */
export function isTokenValid(token: string): boolean {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return false;

    const payload = JSON.parse(atob(parts[1]));
    const currentTime = Math.floor(Date.now() / 1000);

    return payload.exp > currentTime;
  } catch {
    return false;
  }
}
