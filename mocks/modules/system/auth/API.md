# 认证模块 API 文档

## 概述

认证模块提供用户登录认证相关的接口服务。

## 基础信息

- **模块路径**: `/modules/system/auth`
- **基础URL**: `/mock-api`
- **负责人**: 系统管理员
- **版本**: v1.1.0

## 接口列表

### 1. 获取图形验证码

#### 基本信息

- **接口名称**: 获取图形验证码
- **接口路径**: `/mock-api/graph-captcha`
- **请求方法**: `GET`
- **接口描述**: 生成图形验证码，返回验证码ID、Base64图片数据和验证码文本

#### 请求参数

##### 请求头 (Headers)

```
Content-Type: application/json
```

##### 请求参数

无需请求参数

##### 请求示例

```bash
GET /mock-api/graph-captcha
```

#### 响应参数

##### 响应格式

| 字段名 | 类型 | 描述 |
|--------|------|------|
| code | number | 响应状态码 |
| message | string | 响应消息 |
| data | object | 响应数据 |

##### 成功响应 (1)

```json
{
  "code": 1,
  "message": "获取验证码成功",
  "data": {
    "graphCaptchaId": "captcha_1704067200000_abc123def",
    "graphCaptchaBase64": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIi4uLg==",
    "graphCaptchaCode": "a2b3"
  }
}
```

##### 错误响应

###### 服务器错误 (500)

```json
{
  "code": 500,
  "message": "生成验证码失败，请稍后重试"
}
```

#### 状态码说明

| 状态码 | 说明 |
|--------|------|
| 1 | 获取验证码成功 |
| 500 | 服务器内部错误 |

#### 业务逻辑

1. **验证码生成**：使用svg-captcha库生成4位字符验证码
2. **图片转换**：将SVG转换为Base64格式
3. **存储管理**：将验证码信息存储在内存中，设置5分钟过期时间
4. **自动清理**：定期清理过期的验证码数据
5. **返回结果**：返回验证码ID、图片数据和验证码文本

#### 验证码特性

- **长度**: 4位字符
- **字符集**: 排除易混淆字符（0o1il）
- **有效期**: 5分钟
- **图片尺寸**: 120x40像素
- **干扰线**: 2条
- **颜色**: 彩色验证码
- **背景色**: #f0f0f0

#### 调用示例

##### cURL

```bash
curl -X GET \
  http://localhost:3000/mock-api/graph-captcha \
  -H 'Content-Type: application/json'
```

##### JavaScript (Fetch)

```javascript
const response = await fetch('/mock-api/graph-captcha', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
});

const result = await response.json();
console.log(result);
```

##### Axios

```javascript
const response = await axios.get('/mock-api/graph-captcha');
console.log(response.data);
```

### 2. 用户登录

#### 基本信息

- **接口名称**: 用户登录
- **接口路径**: `/mock-api/account-login`
- **请求方法**: `POST`
- **接口描述**: 用户账号密码登录，验证成功后返回 JWT Token 和用户信息

#### 请求参数

##### 请求头 (Headers)

```
Content-Type: application/json
```

##### 请求体 (Body)

| 参数名 | 类型 | 必填 | 描述 | 示例 |
|--------|------|------|------|------|
| username | string | ✓ | 用户名 | "admin" |
| password | string | ✓ | 密码 | "admin666" |
| graphCaptchaId | string | ✓ | 图形验证码ID | "captcha_1234567890_abc123" |
| graphCaptchaCode | string | ✓ | 图形验证码 | "ABCD" |

##### 请求示例

```json
{
  "username": "admin",
  "password": "admin666",
  "graphCaptchaId": "captcha_1234567890_abc123",
  "graphCaptchaCode": "ABCD"
}
```

#### 响应参数

##### 响应格式

| 字段名 | 类型 | 描述 |
|--------|------|------|
| code | number | 响应状态码 |
| message | string | 响应消息 |
| data | object | 响应数据（可选） |

##### 成功响应 (200)

```json
{
  "code": 1,
  "message": "登录成功",
  "data": {
    "userBriefInfo": {
      "id": "1",
      "username": "admin",
      "account": "admin@system.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

##### 错误响应

###### 参数验证失败

```json
{
  "code": 0,
  "message": "请填写完整的登录信息"
}
```

###### 验证码错误

```json
{
  "code": 0,
  "message": "验证码错误或已过期"
}
```

###### 用户名或密码错误

```json
{
  "code": 0,
  "message": "用户名或密码错误"
}
```

###### 账户被禁用

```json
{
  "code": 0,
  "message": "用户账号已被冻结"
}
```

###### 账户被封禁

```json
{
  "code": 0,
  "message": "用户账号已被封禁"
}
```

#### 状态码说明

| 状态码 | 说明 |
|--------|------|
| 1 | 操作成功 |
| 0 | 操作失败 |

#### 业务逻辑

1. **参数验证**：检查用户名、密码、验证码ID和验证码是否完整
2. **验证码验证**：验证图形验证码是否正确且未过期
3. **用户验证**：验证用户名和密码是否正确
4. **状态检查**：检查用户账户状态是否正常
5. **Token生成**：使用JWT生成访问令牌
6. **返回结果**：返回用户简要信息和访问令牌
4. **状态检查**：检查用户账户状态是否正常
5. **Token生成**：生成JWT Token
6. **返回结果**：返回Token和用户信息

#### 用户状态枚举

| 值 | 状态 | 描述 |
|----|----- |------|
| -1 | BANNED | 封号 |
| 0 | FROZEN | 冻结 |
| 1 | NORMAL | 正常 |

#### 调用示例

##### cURL

```bash
curl -X POST \
  http://localhost:3000/mock-api/account-login \
  -H 'Content-Type: application/json' \
  -d '{
    "username": "admin",
    "password": "admin666",
    "graphCaptchaId": "captcha_1234567890_abc123",
    "graphCaptchaCode": "ABCD"
  }'
```

##### JavaScript (Fetch)

```javascript
const response = await fetch('/mock-api/account-login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'admin',
    password: 'admin666',
    graphCaptchaId: 'captcha_1234567890_abc123',
    graphCaptchaCode: 'ABCD'
  })
});

const result = await response.json();
console.log(result);
```

##### Axios

```javascript
const response = await axios.post('/mock-api/account-login', {
  username: 'admin',
  password: 'admin666',
  graphCaptchaId: 'captcha_1234567890_abc123',
  graphCaptchaCode: 'ABCD'
});

console.log(response.data);
```

## 数据模型

### GraphCaptchaResponseData

```typescript
interface GraphCaptchaResponseData {
  graphCaptchaId: string;      // 验证码ID
  graphCaptchaBase64: string;  // Base64格式的验证码图片
  graphCaptchaCode: string;    // 验证码文本（仅用于测试）
}
```

### GraphCaptchaModel

```typescript
interface GraphCaptchaModel {
  id: string;          // 验证码ID
  code: string;        // 验证码文本
  base64: string;      // Base64格式图片
  createTime: number;  // 创建时间戳
  expireTime: number;  // 过期时间戳
}
```

### LoginRequest

```typescript
interface LoginRequest {
  username: string;        // 用户名
  password: string;        // 密码
  graphCaptchaId: string;  // 图形验证码ID
  graphCaptchaCode: string; // 图形验证码
}
```

### LoginResponseData

```typescript
interface LoginResponseData {
  userBriefInfo: {
    id: string;      // 用户ID
    username: string; // 用户名
    account: string;  // 用户账号
  };
  token: string;     // JWT Token
}
```

### UserInfo

```typescript
interface UserInfo {
  id: string;        // 用户ID
  username: string;  // 用户名
  account: string;   // 用户账号
  nickname: string;  // 昵称
  avatar?: string;   // 头像URL（可选）
  roles: string[];   // 角色列表
}
```

### ApiResponse

```typescript
interface ApiResponse<T = any> {
  code: number;      // 状态码
  message: string;   // 消息
  data?: T;          // 数据（可选）
}
```

## 注意事项

1. **验证码安全性**: 
   - 验证码在生产环境中不应返回明文答案
   - 建议使用HTTPS传输验证码图片
   - 验证码应设置合理的过期时间（当前为5分钟）

2. **验证码使用**:
   - 每个验证码只能使用一次
   - 验证成功或过期后会自动删除
   - 建议在用户登录时验证验证码

3. **性能考虑**:
   - 验证码存储在内存中，服务重启会丢失
   - 定期清理过期验证码以节省内存
   - 大量并发时考虑使用Redis等外部存储

4. **安全性**: 密码在传输过程中应使用HTTPS加密
2. **Token存储**: 客户端应安全存储JWT Token，建议存储在localStorage或sessionStorage
3. **Token过期**: Token有效期为24小时，过期后需要重新登录
4. **错误处理**: 请根据不同的错误码进行相应的错误处理
5. **重试机制**: 建议实现登录失败的重试机制，但要防止暴力破解

## 更新日志

| 版本 | 日期 | 更新内容 |
|------|------|----------|
| v1.1.0 | 2024-01-02 | 新增图形验证码接口，支持SVG格式验证码生成 |
| v1.0.0 | 2024-01-01 | 初始版本，实现基础登录功能 |
